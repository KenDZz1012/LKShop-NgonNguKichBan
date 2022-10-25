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
    if (file) {
        input.Avatar = `src/public/ClientAvatar/${file.filename}`
    }
    const hash: string = input.Password ? bcrypt.hashSync(input.Password, 10) : "";
    input.Password = hash
    return await Client.create(input)
}

const updateClient = async (input: ClientModel) => {
    return await Client.updateOne({ _id: input.Id }, { $set: input })
}

const deleteClient = async (input: string) => {
    return await Client.deleteOne({ _id: input })
}

export {
    getListClient,
    getClientById,
    createClient,
    updateClient,
    deleteClient
}