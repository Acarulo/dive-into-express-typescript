import "dotenv/config";
import {hash, compare} from "bcryptjs";

const encrypt = async (pass: string) => {
    const passwordHash = await hash(pass, parseInt(process.env.SALT!));
    return passwordHash;
};

const verify = async (pass: string, hash: string) => {
    const verified = await compare(pass, hash);
    return verified;
};

export {encrypt, verify};