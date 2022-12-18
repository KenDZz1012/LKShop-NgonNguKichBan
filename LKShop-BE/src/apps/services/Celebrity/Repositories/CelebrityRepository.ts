import Celebrity from "../DTO/Celebrity";
import CelebrityFilter from "../DTO/CelebrityFilter";
import CelebrityModel from "../Models/CelebrityModel";
import { FileService } from "../../../middlewares/FileService";

const getListCelebrityHandler = async (input: CelebrityFilter) => {
    return await CelebrityModel.find(input)
}

const getCelebrityByIdHandler = async (input: string) => {
    return await CelebrityModel.findById(input)
}

const createCelebrityHandler = async (input: Celebrity, file: any) => {
    if (file) {
        const _fileService = new FileService();
        const filePath = await _fileService.createFile(file)
        input.Avatar = filePath
    }
    const celebrity = await CelebrityModel.findOne({ FullName: input.FullName, Role: input.Role })
    if (celebrity) {
        return {
            isSuccess: false,
            msgString: `Celebrity ${input.FullName} is exist`
        }
    }
    const celebrityCreate = await CelebrityModel.create(input)
    return {
        isSuccess: true,
        msgString: `Create Success`,
        data: celebrityCreate
    }
}

const updateCelebrityHandler = async (CelebrityId: String, input: Celebrity, file: any) => {
    if (file) {
        const _fileService = new FileService();
        const filePath = await _fileService.createFile(file)
        input.Avatar = filePath 
    }
    return await CelebrityModel.updateOne({ _id: CelebrityId }, { $set: input })
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