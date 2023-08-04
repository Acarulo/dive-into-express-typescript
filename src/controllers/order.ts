import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { RequestExtended } from "../interfaces/request.interface";

const getItem = async () => {};

const getItems = async (req: RequestExtended, res: Response) => {
    try {
        res.send({
            data: "Only viewable by users with active session / JWT"
        })
    } catch (e) {
        handleHttp(res, "ERROR_GET_ORDERS", e)
    }
};

export {getItem, getItems};