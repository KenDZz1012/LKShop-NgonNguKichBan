import Celebrity from "../DTO/Celebrity";
import CelebrityFilter from "../DTO/CelebrityFilter";
import CelebrityModel from "../Models/CelebrityModel";


const getListCelebrity = async (input: CelebrityFilter) => {
    return await CelebrityModel.find(input)
}

const getCelebrityById = async (input: string) => {
    return await CelebrityModel.findById(input)
}

const createCelebrity = async (input: Celebrity) => {
    return await CelebrityModel.create(input)
}

const updateCelebrity = async (input: Celebrity) => {
    return await CelebrityModel.updateOne({ _id: input.Id }, { $set: input })
}

const deleteCelebrity = async (input: string) => {
    return await CelebrityModel.deleteOne({ _id: input })
}

export {
    getListCelebrity,
    getCelebrityById,
    createCelebrity,
    updateCelebrity,
    deleteCelebrity
}