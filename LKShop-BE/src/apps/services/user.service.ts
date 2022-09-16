import { DocumentDefinition } from "mongoose";
import User, { UserDocument } from "../models/user.model";
import bcrypt from 'bcrypt'
export const createUser = async (input: DocumentDefinition<UserDocument>) => {
    try {
        const hash = bcrypt.hashSync(input.Password, 10)
        input.Password = hash
        return await User.create(input)
    }
    catch (err) {
        throw err;
    }
}