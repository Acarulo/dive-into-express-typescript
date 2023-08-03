import {Request, Response, Router} from "express";
import { getItem, getItems, postItem, updateItem, deleteItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log.middle";

const router = Router();

router.get("/", logMiddleware, getItems);
router.get("/:id", getItem);
router.post("/:id", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);


export {router};