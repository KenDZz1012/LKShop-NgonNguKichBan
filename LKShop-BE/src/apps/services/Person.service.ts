import PersonModel, { PersonFilterModel } from "../DTO/Person.dto";
import Person from "../models/Person.model";


const getListPerson = async (input: PersonFilterModel) => {
    const filter: PersonFilterModel = { ...input }
    return await Person.find(filter)
}

const getPersonById = async (input: string) => {
    return await Person.findById(input)
}

const createPerson = async (input: PersonModel) => {
    return await Person.create(input)
}

const updatePerson = async (input: PersonModel) => {
    const person: PersonModel = { ...input }
    return await Person.updateOne({ _id: person.Id }, { $set: person })
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