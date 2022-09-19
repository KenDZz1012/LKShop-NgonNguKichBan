import { DocumentDefinition } from "mongoose";
import User, { UserDocument, UserFilter } from "../models/user.model";
import bcrypt from 'bcrypt'

const getAllUser = async (input: DocumentDefinition<UserFilter>) => {
    const filter: DocumentDefinition<UserFilter> = { ...input }
    return await User.find(filter)
}

const getUserById = async (input: string) => {
    // const filter: DocumentDefinition<UserFilter> = { ...input }
    return await User.findById(input)

}

const createUser = async (input: DocumentDefinition<UserDocument>) => {

    const hash: string = input.Password ? bcrypt.hashSync(input.Password, 10) : "";
    input.Password = hash
    return await User.create(input)

}

const updateUser = async (input: DocumentDefinition<UserDocument>) => {
    const user: DocumentDefinition<UserDocument> = { ...input }
    return await User.updateOne({ _id: user.Id }, { $set: user })

}

const deleteUser = async (input: DocumentDefinition<UserDocument>) => {
    const user: DocumentDefinition<UserDocument> = { ...input }
    await User.deleteOne({ _id: user.Id })

}

export {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}