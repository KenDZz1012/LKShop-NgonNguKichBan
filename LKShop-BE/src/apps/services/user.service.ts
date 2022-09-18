import { DocumentDefinition } from "mongoose";
import User, { UserDocument, UserFilter } from "../models/user.model";
import bcrypt from 'bcrypt'

const getAllUser = async (input: DocumentDefinition<UserFilter>) => {
    try {
        const filter: DocumentDefinition<UserFilter> = { ...input }
        return await User.find(filter)
    } catch (err) {
        throw err;
    }
}

const getUserById = async (input: DocumentDefinition<UserFilter>) => {
    try {
        const filter: DocumentDefinition<UserFilter> = { ...input }
        return await User.findById(filter.Id)
    } catch (err) {
        throw err;
    }
}

const createUser = async (input: DocumentDefinition<UserDocument>) => {
    try {
        const hash: string = bcrypt.hashSync(input.Password, 10)
        input.Password = hash
        return await User.create(input)
    }
    catch (err) {
        throw err;
    }
}

const updateUser = async (input: DocumentDefinition<UserDocument>) => {
    try {
        const user: DocumentDefinition<UserDocument> = { ...input }
        await User.updateOne({ _id: user.Id }, { $set: user })
    } catch (err) {
        throw err;
    }
}

const deleteUser = async (input: DocumentDefinition<UserDocument>) => {
    try {
        const user: DocumentDefinition<UserDocument> = { ...input }
        await User.deleteOne({ _id: user.Id })
    } catch (err) {
        throw err;
    }
}

export {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}