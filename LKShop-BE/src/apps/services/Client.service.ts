import Client from "../models/client.model";
import ClientModel, { ClientFilterModel } from "../DTO/Client.dto";
import bcrypt from 'bcrypt'

const getListClient = async (input: ClientFilterModel) => {
    return await Client.find(input)
}

const getClientById = async (input: string) => {
    return await Client.findById(input)
}

const createClient = async (input: ClientModel, file: any) => {
    const { Email, Password, UserName } = input
    let client: any = await Client.findOne({ Email })
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
    await Client.create(input)
    return {
        isSuccess: true,
        msgString: "Create Success"
    }
}

const updateClient = async (input: ClientModel) => {
    return await Client.updateOne({ _id: input.Id }, { $set: input })
}

const deleteClient = async (input: string) => {
    return await Client.deleteOne({ _id: input })
}

const changeAvatar = async (input: ClientModel, file: any) => {
    input.Avatar = `src/public/ClientAvatar/${file.filename}`
    return await Client.updateOne({ _id: input.Id }, { $set: input })
}

const checkPasswordClient = async (Id: string, Password: string) => {
    let client = await Client.findById(Id)
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