class ApiError extends Error {
  constructor(statusCode, message = "Something went wrong", errors = [], stack) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (stack) this.stack = stack;
    else Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      success: this.success,
      message: this.message,
      errors: this.errors,
      data: this.data,
      statusCode: this.statusCode,
      stack: process.env.NODE_ENV === "development" ? this.stack : undefined,
    };
  }
}

export { ApiError };
