import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

const getItem = async () => {};

const getItems = async (req: Request, res: Response) => {
    try {
        res.send({
            data: "Only viewable by users with active session / JWT"
        })
    } catch (e) {
        handleHttp(res, "ERROR_GET_ORDERS", e)
    }
};

export {getItem, getItems};