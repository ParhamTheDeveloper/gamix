require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
require("./configs/mongo.config");
const { NotFoundError, ErrorHandler } = require("./middlewares/errorHandler");
const { CourseModel } = require("./model/course.model");
const omitEmpty = require("omit-empty");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/courses", async (req, res) => {
  const courses = await CourseModel.find();
  res.send(courses);
});

app.get("/courses/:name", async (req, res, next) => {
  try {
    const courses = await CourseModel.find();
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
    const courses = await CourseModel.find();
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
    const courses = await CourseModel.find();
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
        $inc: { episodesCount: 1 }
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
    const { id, videoId } = req.params;
    const course = await CourseModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $pull: { episodes: { _id: videoId } },
        $inc: { episodesCount: -1 }
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

app.use(NotFoundError);
app.use(ErrorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Running server at port ${process.env.PORT}`);
});
