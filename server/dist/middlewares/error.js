export const errorMiddleware = (err, req, res, next) => {
    err.message || (err.message = ""); //err.message = err.message || ""; ex:- a+=b; a=a+b;
    err.statusCode || (err.statusCode = 500);
    return res.status(err.statusCode).json({
        success: false,
        message: "Some Error",
    });
};
export const TryCatch = (func) => (req, res, next) => {
    return Promise.resolve(func(req, res, next)).catch(next);
};
