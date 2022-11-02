import ClientModel from "../../Client/Models/ClientModel";
import bcrypt from 'bcrypt'
import  ClientLogin  from "../DTO/ClientLogin";

const ClientLoginHandler = async (input: ClientLogin) => {
    try {
        const { Email, Password } = input
        let client: any = await ClientModel.findOne({ Email })
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
    ClientLoginHandler
}