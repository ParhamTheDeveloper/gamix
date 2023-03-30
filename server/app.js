const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const omitEmpty = require("omit-empty");
const app = express();
const mongoConfig = require("./configs/mongo.config");
const { NotFoundError, ErrorHandler } = require("./middlewares/errorHandler");
const { CourseModel } = require("./model/course.model");
const { UserModel } = require("./model/user.model");
const {
  loginValidator,
  signupValidator,
} = require("./validators/auth.validator");
const { checkValidation } = require("./validators/middlewares/validator");
const { encrypt, decrypt } = require("./utils/crypto.utils");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/courses", async (req, res) => {
  const courses = await CourseModel.find({});
  res.send(courses);
});

app.get("/courses/:name", async (req, res, next) => {
  try {
    const courses = await CourseModel.find({});
    const { name } = req.params;
    const course = courses.find(
      (course) => course.name.toLowerCase() == name.toLowerCase()
    );
    if (course) return res.send(course);
    throw {
      status: 400,
      message: "دوره ی مورد نظر شما پیدا نشد!",
    };
  } catch (error) {
    next(error);
  }
});

app.post("/courses/new", async (req, res, next) => {
  try {
    const { name, img, description, episodes, episodesCount, studentsCount } =
      req.body;
    const courses = await CourseModel.find({});
    const foundCourse = courses.find(
      (course) => course.name.toLowerCase() == name.toLowerCase()
    );

    if (!foundCourse) {
      const result = await CourseModel.create({
        name,
        img,
        description,
        episodes,
        episodesCount,
        studentsCount,
      });
      res.end();
    } else {
      throw {
        status: 400,
        message: "قبلا دوره ای با همین اسم ثبت شده",
      };
    }
  } catch (error) {
    next(error);
  }
});

app.delete("/courses", async (req, res, next) => {
  try {
    const { id } = req.query;
    const courses = await CourseModel.find({});
    const course = await CourseModel.findOneAndDelete({
      _id: id,
    });

    if (course) {
      res.end();
    } else {
      throw {
        status: 400,
        message: "دوره ای با این ایدی تابحال ثبت نشده است!",
      };
    }
  } catch (error) {
    next(error);
  }
});

app.patch("/courses", async (req, res, next) => {
  try {
    const { id } = req.query;
    const newBody = omitEmpty(req.body);
    const course = await CourseModel.findOneAndUpdate(
      {
        _id: id,
      },
      { $set: newBody }
    );

    if (course) {
      res.end();
    } else {
      throw {
        status: 400,
        message: "دوره ای با این ایدی تابحال ثبت نشده است!",
      };
    }
  } catch (error) {
    next(error);
  }
});

app.patch("/courses/new/episode", async (req, res, next) => {
  try {
    const { id } = req.query;
    const { video, title } = omitEmpty(req.body);
    const course = await CourseModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $push: {
          episodes: {
            title,
            video,
          },
        },
        $inc: { episodesCount: 1 },
      }
    );

    if (course) {
      res.end();
    } else {
      throw {
        status: 400,
        message: "دوره ای با این ایدی تابحال ثبت نشده است!",
      };
    }
  } catch (error) {
    next(error);
  }
});

app.patch("/courses/delete/episode", async (req, res, next) => {
  try {
    const { id, videoId } = req.query;
    const course = await CourseModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $pull: { episodes: { _id: videoId } },
        $inc: { episodesCount: -1 },
      }
    );

    if (course) {
      res.end();
    } else {
      throw {
        status: 400,
        message: "دوره ای با این ایدی تابحال ثبت نشده است!",
      };
    }
  } catch (error) {
    next(error);
  }
});

app.get("/users", async (req, res) => {
  const users = await UserModel.find({});
  res.send(users);
});

app.post(
  "/login",
  loginValidator(),
  checkValidation,
  async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const users = await UserModel.find({});
      users.forEach((user) => {
        user.email = decrypt(user.email, "user_secret_email");
        user.password = decrypt(user.password, "user_secret_password");
      });
      const user = users.find(
        (user) => user.email == email && user.password == password
      );

      if (user) {
        res.send(user);
      } else {
        throw {
          status: 400,
          message: "گذرواژه یا ایمیل وارد شده اشتباه است",
        };
      }
    } catch (error) {
      next(error);
    }
  }
);

app.post(
  "/signup",
  signupValidator(),
  checkValidation,
  async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const users = await UserModel.find({});
      users.forEach((user) => {
        user.email = decrypt(user.email, "user_secret_email");
        user.password = decrypt(user.password, "user_secret_password");
      });
      const foundUsers = users.find(
        (user) => user.username == username || user.email == email
      );

      const cipherEmail = encrypt(email, "user_secret_email");
      const cipherPassword = encrypt(password, "user_secret_password");
      if (!foundUsers) {
        let rule = "کاربر معمولی";
        if (username === "Parham.tkh") {
          rule = "ادمین";
        }
        const result = await UserModel.create({
          username,
          email: cipherEmail,
          password: cipherPassword,
          rule,
        });
        result.email = decrypt(cipherEmail, "user_secret_email");
        result.password = decrypt(cipherPassword, "user_secret_password");
        res.send(result);
      } else {
        throw {
          status: 400,
          message:
            "کاربری با همین اسم درحال حاضر وجود دارد. نام دیگری انتخاب کنید",
        };
      }
    } catch (error) {
      next(error);
    }
  }
);

app.use(NotFoundError);
app.use(ErrorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Running server at port ${process.env.PORT}`);
});
