import { Router} from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session.middle";

const router = Router();

router.get("/", checkJwt, getItems);

export {router};