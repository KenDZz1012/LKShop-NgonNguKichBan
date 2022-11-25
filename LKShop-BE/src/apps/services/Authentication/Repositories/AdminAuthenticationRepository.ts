import UserModel from "../../User/Models/UserModel";
import bcrypt from 'bcrypt'
import UserLogin from "../DTO/AdminLogin";
import {
    validate,
} from 'class-validator';
const UserLoginHandler = async (input: UserLogin) => {
    try {
        const { UserName, Password } = input
        let user: any = await UserModel.findOne({ UserName })
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
            isSuccess: true,
            data: user
        }
    } catch (err) {
        throw err;
    }
}
export {
    UserLoginHandler,
}