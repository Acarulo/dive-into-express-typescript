import {Request, Response} from "express";
import { loginUser, registerNewUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handler";

const register = async({body}: Request, res: Response) => {
    try {
        const response = await registerNewUser(body);
    } catch (e) {
        handleHttp(res, "ERROR_USER_REGISTRATION", e);
    }
}

const login = async(req: Request, res: Response) => {}

export {login, register};