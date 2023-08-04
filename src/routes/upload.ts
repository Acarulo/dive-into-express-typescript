import { Router } from "express";
import { getFile } from "../controllers/upload";
import multerMiddleware from "../middleware/file.middle";
import { checkJwt } from "../middleware/session.middle";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile);

export {router};