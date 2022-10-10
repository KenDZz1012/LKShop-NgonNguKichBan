import { DocumentDefinition } from "mongoose";
import Person, { PersonDocument, } from "../models/Person.model";


const getListPerson = async () => {
    return await Person.find()
}

const getPersonById = async (input: string) => {
    return await Person.findById(input)
}

const createPerson = async (input: DocumentDefinition<PersonDocument>) => {
    return await Person.create(input)
}

const updatePerson = async (input: DocumentDefinition<PersonDocument>) => {
    const person: DocumentDefinition<PersonDocument> = { ...input }
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