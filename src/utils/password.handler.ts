import "dotenv/config";
import {hash, compare} from "bcryptjs";

const encrypt = async (pass: string) => {
    const passwordHash = await hash(pass, parseInt(process.env.SALT!));
    return passwordHash;
};

const verify = async () => {};

export {encrypt, verify};