import "dotenv/config";
import {sign, verify} from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

const generateToken = async (id: string) => {
    const jwt = sign(id, JWT_SECRET, {expiresIn: "1h"});
    return jwt;
};

const verifyToken = async (jwt: string) => {
    const isValid = verify(jwt, JWT_SECRET);
    return isValid;
};

export {generateToken, verifyToken};