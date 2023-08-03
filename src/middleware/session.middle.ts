import { Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt.handler";
import { RequestExtended } from "../interfaces/request.interface";

const checkJwt = (req: RequestExtended, res: Response, next: NextFunction) => {
    try {
        const userJwt = req.headers.authorization || '';
        const jwt = userJwt.split(' ').pop();
        const verifiedUserJwt = verifyToken(`${jwt}`);

        if(!verifiedUserJwt) {
            res.status(401).send("ERROR_INVALID_JWT");
        } else {
            req.user = verifiedUserJwt;
            next();
        }
        
    } catch (e) {
        res.status(400).send("ERROR_INVALID_SESSION");
    }
}

export {checkJwt}