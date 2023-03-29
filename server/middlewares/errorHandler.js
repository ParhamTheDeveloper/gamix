const NotFoundError = (req, res, next) => {
  return res.status(404).json({
    statusCode: res.statusCode,
    error: {
      type: "NotFound",
      message: "صفحه ی مورد نظر شما پیدا نشد!",
    },
  });
};

const ErrorHandler = (err, req, res, next) => {
  return res.json({
    statusCode: err.status || 500, // 500 status code means unexpected error while processing the request
    error: {
      message: err.message || "مشکل داخلی سرور",
      invalidParams: err.error
    },
  });
};

module.exports = {
  NotFoundError,
  ErrorHandler,
};
