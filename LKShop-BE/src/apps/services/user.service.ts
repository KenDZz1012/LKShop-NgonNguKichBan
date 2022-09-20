import { DocumentDefinition } from "mongoose";
import User, { UserDocument, UserFilter } from "../models/user.model";
import bcrypt from 'bcrypt'

const getAllUser = async (input: DocumentDefinition<UserFilter>) => {
    const filter: DocumentDefinition<UserFilter> = { ...input }
    return await User.find(filter)
}

const getUserById = async (input: string) => {
    return await User.findById(input)
}

const createUser = async (input: DocumentDefinition<UserDocument>) => {
    const hash: string = input.Password ? bcrypt.hashSync(input.Password, 10) : "";
    input.Password = hash
    return await User.create(input)
}

const updateUser = async (input: DocumentDefinition<UserDocument>) => {
    const user: DocumentDefinition<UserDocument> = { ...input }
    if (user.Password) {
        const hash: string = bcrypt.hashSync(user.Password, 10);
        user.Password = hash;
    }
    return await User.updateOne({ _id: user.Id }, { $set: user })
}

const deleteUser = async (input: string) => {
    return await User.deleteOne({ _id: input })
}

const checkPasswordUser = async (Id: string, Password: string) => {
    const user = await User.findById(Id)
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