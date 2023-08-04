import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { registerFileUpload } from "../services/upload.service";
import { RequestExtended } from "../interfaces/request.interface";
import { Storage } from "../interfaces/storage.interface";

const getFile = async (req: RequestExtended, res: Response) => {
    try {
        const {user, file} = req;

        const dataToRegister: Storage = {
            filename: `${file?.filename}`,
            path: `${file?.path}`,
            idUser: `${user?.id}`,
        }
        const response = await registerFileUpload(dataToRegister);
    } catch (e) {
        handleHttp(res, "ERROR_GET_BLOG", e);
    }
}

export {getFile};