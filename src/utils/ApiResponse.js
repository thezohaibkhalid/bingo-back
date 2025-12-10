class ApiResponse {
  constructor(statusCode, data, success, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = typeof success === "boolean" ? success : statusCode < 400;
  }
}

export { ApiResponse };

