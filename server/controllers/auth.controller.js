const { UserModel } = require("../model/user.model");

const loginAuth = async (req, res, next) => {
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
};

const signupAuth = async (req, res, next) => {
  try {
    const { username, email, password } = omitEmpty(req.body);
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
};

module.exports = {
  loginAuth,
  signupAuth,
};
