const { validationResult } = require("express-validator");

const checkValidation = (req, res, next) => {
  const result = validationResult(req);
  const error = {};
  result?.errors?.forEach((err) => {
    error[err.param] = err.msg;
  });
  if (Object.keys(error).length) {
    throw {
      status: 400,
      message: "Validation error",
      error,
    };
  }
  next();
};

module.exports = {
  checkValidation,
};
