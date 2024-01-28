export default class CustomErrorHandler extends Error{
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
};


export const ApplicationErrorHandler = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Server Error, Try Later!"
    res.status(err.statusCode).json({success:false, error:err.message});
    next();
};
