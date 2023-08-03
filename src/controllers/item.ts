import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"
import { getCar, getCars, insertCar, updateCar, deleteCar } from "../services/item.service";

const getItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const response = await getCar(id);
        const data = response ? response : "NOT_FOUND";
        return data;
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM', e);
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        return response;
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS', e);
    }
}

const updateItem = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await updateCar(id, body);
        return response;
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM', e);
    }
}

const postItem = async ({body}: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e);
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const response = await deleteCar(id);
        return response;
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM', e);
    }
}

export {getItem, getItems, updateItem, postItem, deleteItem};