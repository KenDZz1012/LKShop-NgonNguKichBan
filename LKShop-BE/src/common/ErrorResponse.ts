import { NextFunction, Request, Response } from "express";

const ErrorResponse = (err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err?.status || 500;
    return res.status(status).json({
        "isSuccess": false,
        "message": err.message,
        "stack": err.stack,
    })
}
export default ErrorResponse