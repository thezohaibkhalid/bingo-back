class ApiResponse{
    constructor(public statusCode: number, public data: any, public success: boolean, public message: string = "Success"){
        this.statusCode = statusCode,
        this.data = data, 
        this.message = message, 
        this.success = statusCode < 400
    }
}


export {ApiResponse};