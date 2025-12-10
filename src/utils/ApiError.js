class ApiError extends Error {
  constructor(statusCode, message = "Something went wrong", errors = [], stack) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      success: this.success,
      errors: this.errors,
      data: this.data,
      stack: process.env.NODE_ENV === "development" ? this.stack : undefined,
    };
  }
}

export { ApiError };

