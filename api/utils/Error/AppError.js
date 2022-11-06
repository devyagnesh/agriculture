class AppError extends Error {
  constructor(statusCode, errorCode = undefined, message) {
    super(message);
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.statusCode = statusCode;

    if (errorCode) {
      this.errorCode = errorCode;
    }

    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
