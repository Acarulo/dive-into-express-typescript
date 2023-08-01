import {Request, Response, Router} from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send({data: "Models go in here"});
});

export {router};