class ApiError extends Error {
    public statusCode: number;
    public data: any;
    public success: boolean;
    public errors: any[];
  
    constructor(
      statusCode: number,
      message: string = "Something went wrong",
      errors: any[] = [],
      stack?: string
    ) {
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
  