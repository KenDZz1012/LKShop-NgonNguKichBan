import PersonModel, { PersonFilterModel } from "../DTO/Person.dto";
import Person from "../models/Person.model";


const getListPerson = async (input: PersonFilterModel) => {
    return await Person.find(input)
}

const getPersonById = async (input: string) => {
    return await Person.findById(input)
}

const createPerson = async (input: PersonModel) => {
    return await Person.create(input)
}

const updatePerson = async (input: PersonModel) => {
    return await Person.updateOne({ _id: input.Id }, { $set: input })
}

const deletePerson = async (input: string) => {
    return await Person.deleteOne({ _id: input })
}

export {
    getListPerson,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
}