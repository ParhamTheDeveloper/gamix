const { body } = require("express-validator");

const loginValidator = () => {
  return [
    body("email").isEmail().withMessage("ایمیل وارد شده معتبر نیست"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("گذرواژه وارد شده حداقل باید 6 کاراکتر باشد"),
  ];
};

const signupValidator = () => {
  return [
    body("username")
      .isLength({ min: 5, max: 20 })
      .withMessage("نام کاربری وارد شده باید حداقل 5 و حداکثر 20 کاراکتر باشد"),
    body("email").isEmail().withMessage("ایمیل وارد شده معتبر نیست"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("رگذرواژه وارد شده حداقل باید 6 کاراکتر باشد"),
  ];
};

module.exports = {
  loginValidator,
  signupValidator,
};
