import User from "../models/user.model";
import bcrypt from 'bcrypt'
import { UserLoginModel } from "../DTO/User.dto";

const login = async (input: UserLoginModel) => {
    try {
        const { UserName, Password } = input
        let user: any = await User.findOne({ UserName })
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
        user = user.toObject()
        delete user.Password
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