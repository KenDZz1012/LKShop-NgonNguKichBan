import { DocumentDefinition } from "mongoose";
import User, { UserDocument, UserFilter, UserLogin } from "../models/user.model";
import bcrypt from 'bcrypt'

const login = async (input: DocumentDefinition<UserLogin>) => {
    try {
        const { UserName, Password } = input
        const user = await User.findOne({ UserName })
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
            msgString: "Login Success",
            isSucces: true,
            data: user
        }
    } catch (err) {
        throw err;
    }

}

export {
    login
}