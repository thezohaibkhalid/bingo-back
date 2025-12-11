class ApiResponse {
  constructor(res, statusCode, data, success, message) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = success ?? statusCode < 400;

    return res.status(statusCode).json({
      success: this.success,
      message: this.message,
      data: this.data,
    });
  }
}

export { ApiResponse };