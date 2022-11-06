import UserModel from "../models/UserModel"
import bcrypt from 'bcrypt'
import User from "../DTO/User";
import UserFilter from "../DTO/UserFilter";
import UserCreate from "../DTO/UserCreate";
import UserUpdate from "../DTO/UserUpdate";

const getAllUserHandler = async (input: UserFilter) => {
    return await UserModel.find(input).select(['-Password'])
}

const getUserByIdHandler = async (input: string) => {
    return await UserModel.findById(input).select(['-Password'])
}

const createUserHandler = async (input: UserCreate) => {
    const hash: string = input.Password ? bcrypt.hashSync(input.Password, 10) : "";
    input.Password = hash
    return await UserModel.create(input)
}

const updateUserHandler = async (input: UserUpdate) => {
    const user = input
    if (user.Password) {
        const hash: string = bcrypt.hashSync(user.Password, 10);
        user.Password = hash;
    }
    return await UserModel.updateOne({ _id: user.Id }, { $set: user })
}

const deleteUserHandler = async (input: string) => {
    return await UserModel.deleteOne({ _id: input })
}

const checkPasswordUserHandler = async (Id: string, Password: string) => {
    let user = await UserModel.findById(Id)
    if (!user) {
        return {
            isSuccess: false,
            msgString: "Not exist UserName"
        }
    }
    const isPasswordValid: boolean = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
        return {
            isSuccess: false,
            msgString: "Wrong password"
        }
    }

    return {
        isSucces: true,
        data: user
    }
}

export {
    createUserHandler,
    getAllUserHandler,
    getUserByIdHandler,
    updateUserHandler,
    deleteUserHandler,
    checkPasswordUserHandler
}