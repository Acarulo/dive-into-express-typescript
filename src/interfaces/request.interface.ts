import { Request } from "express"
import { JwtPayload } from "jsonwebtoken";

export interface RequestExtended extends Request {
    user?: string | JwtPayload;
}