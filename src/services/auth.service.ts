import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.schema"

const registerNewUser = async(authUser: User) => {
    const isAlreadyRegistered = await UserModel.findOne({email: authUser.email})
    if (isAlreadyRegistered) return "USER_ALREADY_REGISTERED";

    const registerNewUser = await UserModel.create(authUser);
    return registerNewUser;
}

const loginUser = async() => {}

export {registerNewUser, loginUser}