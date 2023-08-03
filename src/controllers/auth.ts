import {Request, Response} from "express";
import { loginUser, registerNewUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handler";

const register = async({body}: Request, res: Response) => {
    try {
        const response = await registerNewUser(body);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_USER_REGISTRATION", e);
    }
}

const login = async({body}: Request, res: Response) => {
    try {
        const {email, password} = body;
        const response = await loginUser({email, password});

        if(response === "INCORRECT_PASSWORD") {
            res.status(403).send(response);
        } else {
            res.send(response);
        }
    } catch (e) {
        handleHttp(res, "ERROR_USER_LOGIN", e);
    }
}

export {login, register};