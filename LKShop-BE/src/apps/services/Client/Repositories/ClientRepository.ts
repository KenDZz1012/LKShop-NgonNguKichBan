import ClientModel from "../models/ClientModel";
import Client from "../DTO/Client";
import ClientFilter from "../DTO/ClientFilter";
import bcrypt from 'bcrypt'

const getListClient = async (input: ClientFilter) => {
    return await ClientModel.find(input)
}

const getClientById = async (input: string) => {
    return await ClientModel.findById(input)
}

const createClient = async (input: Client, file: any) => {
    const { Email, Password, UserName } = input
    let client: any = await ClientModel.findOne({ Email })
    if (client) {
        return {
            isSuccess: false,
            msgString: "Email already exist"
        }
    }
    if (file) {
        input.Avatar = `src/public/ClientAvatar/${file.filename}`
    }
    const hash: string = input.Password ? bcrypt.hashSync(input.Password, 10) : "";
    input.Password = hash
    await ClientModel.create(input)
    return {
        isSuccess: true,
        msgString: "Create Success"
    }
}

const updateClient = async (input: Client) => {
    return await ClientModel.updateOne({ _id: input.Id }, { $set: input })
}

const deleteClient = async (input: string) => {
    return await ClientModel.deleteOne({ _id: input })
}

const changeAvatar = async (input: Client, file: any) => {
    input.Avatar = `src/public/ClientAvatar/${file.filename}`
    return await ClientModel.updateOne({ _id: input.Id }, { $set: input })
}

const checkPasswordClient = async (Id: string, Password: string) => {
    let client = await ClientModel.findById(Id)
    if (!client) {
        return {
            isSuccess: false,
            msgString: "Not exist Client"
        }
    }
    const isPasswordValid: boolean = await bcrypt.compare(Password, client.Password);
    if (!isPasswordValid) {
        return {
            isSuccess: false,
            msgString: "Wrong password"
        }
    }

    return {
        isSucces: true,
        data: client
    }
}
export {
    getListClient,
    getClientById,
    createClient,
    updateClient,
    deleteClient,
    changeAvatar,
    checkPasswordClient
}