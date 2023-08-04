import { Request } from "express";
import multer, {diskStorage} from "multer";

/*
 * Multer is a node.js middleware for handling multipart/form-data.
 * This is primarily used for uploading files.
 * It is written on top of busboy for maximum efficiency.
 * 
 * Multer adds a "body" object and a "file" or "files" object to the request body.
 * The body object contains the values of the text fields of the form.
 * The file or files object contains the files uploaded via the form.
*/

const PATH_STORAGE = `${process.cwd()}/storage`;

const storage = diskStorage({
    destination(req: Request, file: Express.Multer.File, cb: any) {
        cb(null, PATH_STORAGE);
    },
    filename(req: Request, file: Express.Multer.File, cb: any) {
        const ext = file.originalname.split(".").pop();
        const fileNameRandom = `image-${Date.now()}.${ext}`;
        cb(null, fileNameRandom);
    }
});

const multerMiddleware = multer({storage});

export default multerMiddleware;