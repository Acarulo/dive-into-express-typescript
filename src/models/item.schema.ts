import { Schema, Types, model, Model} from "mongoose"
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
    {   
        brand: {type: String, required: true},
        model: {type: String, required: true},
        color: {type: String},
        gas: {type: String, enum: ["gasoline", "electric", "hybrid"], required: true},
        year: {type: Number, required: true},
        description: {type: String},
        price: {type: Number, required: true}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const ItemModel = model('items', ItemSchema);
export default ItemModel;