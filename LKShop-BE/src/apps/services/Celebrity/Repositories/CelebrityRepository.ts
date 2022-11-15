import Celebrity from "../DTO/Celebrity";
import CelebrityFilter from "../DTO/CelebrityFilter";
import CelebrityModel from "../Models/CelebrityModel";


const getListCelebrityHandler = async (input: CelebrityFilter) => {
    return await CelebrityModel.find(input)
}

const getCelebrityByIdHandler = async (input: string) => {
    return await CelebrityModel.findById(input)
}

const createCelebrityHandler = async (input: Celebrity) => {    
    const celebrity = await CelebrityModel.findOne({ FullName: input.FullName,Role:input.Role })
    if(celebrity){
        return{
            isSuccess:false,
            msgString:`Celebrity ${input.FullName} is exist`
        }
    }
    const celebrityCreate = await CelebrityModel.create(input)
    return {
        isSuccess:true,
        msgString:`Create Success`,
        data:celebrityCreate
    } 
}

const updateCelebrityHandler = async (input: Celebrity) => {
    return await CelebrityModel.updateOne({ _id: input.Id }, { $set: input })
}

const deleteCelebrityHandler = async (input: string) => {
    return await CelebrityModel.deleteOne({ _id: input })
}

export {
    getListCelebrityHandler,
    getCelebrityByIdHandler,
    createCelebrityHandler,
    updateCelebrityHandler,
    deleteCelebrityHandler
}