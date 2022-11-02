import UserModel from "../models/UserModel"
import bcrypt from 'bcrypt'
import User from "../DTO/User";
import UserFilter from "../DTO/UserFilter";

const getAllUser = async (input: UserFilter) => {
    return await UserModel.find(input)
}

const getUserById = async (input: string) => {
    return await UserModel.findById(input)
}

const createUser = async (input: User) => {
    const hash: string = input.Password ? bcrypt.hashSync(input.Password, 10) : "";
    input.Password = hash
    return await UserModel.create(input)
}

const updateUser = async (input: User) => {
    const user = input
    if (user.Password) {
        const hash: string = bcrypt.hashSync(user.Password, 10);
        user.Password = hash;
    }
    return await UserModel.updateOne({ _id: user.Id }, { $set: user })
}

const deleteUser = async (input: string) => {
    return await UserModel.deleteOne({ _id: input })
}

const checkPasswordUser = async (Id: string, Password: string) => {
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
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
    checkPasswordUser
}