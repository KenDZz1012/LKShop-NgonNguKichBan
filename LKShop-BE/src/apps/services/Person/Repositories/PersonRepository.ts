import Person from "../DTO/Person";
import PersonFilter from "../DTO/PersonFilter";
import PersonModel from "../models/PersonModel";


const getListPerson = async (input: PersonFilter) => {
    return await PersonModel.find(input)
}

const getPersonById = async (input: string) => {
    return await PersonModel.findById(input)
}

const createPerson = async (input: Person) => {
    return await PersonModel.create(input)
}

const updatePerson = async (input: Person) => {
    return await PersonModel.updateOne({ _id: input.Id }, { $set: input })
}

const deletePerson = async (input: string) => {
    return await PersonModel.deleteOne({ _id: input })
}

export {
    getListPerson,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
}