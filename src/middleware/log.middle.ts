import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Hi, this is the log middleware")
    next();
}

export {logMiddleware};