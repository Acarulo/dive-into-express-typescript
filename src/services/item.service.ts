import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item.schema";

const getCar = async(id: string) => {
    const responseItems = await ItemModel.findOne({_id: id});
    return responseItems;   
}

const getCars = async() => {
    const responseItems = await ItemModel.find({});
    return responseItems;
}

const insertCar = async (item: Car) => {
    const resInsert = await ItemModel.create(item);
    return resInsert;
}

const updateCar = async (id: string, data: Car) => {
    const responseItem = await ItemModel.findOneAndUpdate(
        {_id: id},
        data, 
        {new: true}
    );

    return responseItem;
}

const deleteCar = async (id: string) => {
    const response = await ItemModel.findOneAndRemove({_id: id});
    return response;
}

export {getCar, getCars, insertCar, updateCar, deleteCar};