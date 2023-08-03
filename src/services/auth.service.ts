import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.schema"
import { encrypt, verify } from "../utils/password.handler";

const registerNewUser = async(authUser: User) => {
    const isAlreadyRegistered = await UserModel.findOne({email: authUser.email})
    if (isAlreadyRegistered) return "USER_ALREADY_REGISTERED";

    authUser.password = await encrypt(authUser.password);

    const registerNewUser = await UserModel.create(authUser);
    return registerNewUser;
}

const loginUser = async({email, password}: Auth) => {
    const userExists = await UserModel.findOne({email: email});
    if (!userExists) return "USER_NOT_FOUND";

    const passwordHash = userExists.password;
    const passwordIsCorrect = await verify(password, passwordHash);

    if(!passwordIsCorrect) return "INCORRECT_PASSWORD";

    return userExists;
}

export {registerNewUser, loginUser}