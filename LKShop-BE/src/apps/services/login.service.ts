import User from "../models/user.model";
import Client from "../models/client.model";
import bcrypt from 'bcrypt'
import { UserLoginModel } from "../DTO/User.dto";
import { ClientLoginModel } from "../DTO/Client.dto";

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


const loginClient = async (input: ClientLoginModel) => {
    try {
        const { Email, Password } = input
        let client: any = await Client.findOne({ Email })
        if (!client) {
            return {
                isSuccess: false,
                msgString: "Not exist Email"
            }
        }
        const isPasswordValid: boolean = await bcrypt.compare(Password, client.Password);
        if (!isPasswordValid) {
            return {
                isSuccess: false,
                msgString: "Wrong password"
            }
        }
        client = client.toObject()
        delete client.Password
        return {
            msgString: "Login Success",
            isSucces: true,
            data: client
        }
    } catch (err) {
        throw err;
    }

}

export {
    login,
    loginClient
}