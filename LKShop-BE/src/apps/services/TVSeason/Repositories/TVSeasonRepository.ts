import TVSeasonModel from "../Models/TVSeasonModel";
import TVSeasonCreate from "../DTO/TVSeasonCreate";
import TVSeasonFilter from "../DTO/TVSeasonFilter";
import TVSeasonUpdate from "../DTO/TVSeasonUpdate";
import { FileService } from "../../../middlewares/FileService";
const _fileService = new FileService();
const getListTVSeasonHandler = async (input: TVSeasonFilter) => {
    return await TVSeasonModel.find(input).populate('Movie')
}

const getTVSeasonByIdHandler = async (input: String) => {
    return await TVSeasonModel.findById(input).populate('Movie')
}

const createTVSeasonHandler = async (input: TVSeasonCreate, file: any) => {
    if (file) {
        input.Poster = await _fileService.createFile(file)
    }
    const TVSeasonCreate = await TVSeasonModel.create(input)
    return ({
        isSuccess: true,
        msgString: 'Create Success'
    })
}

const updateTVSeasonHandler = async (TVSeasonId: String, input: TVSeasonUpdate, file: any) => {
    if (file) {
        input.Poster = await _fileService.createFile(file)
    }
    const TVSeasonUpdate = await TVSeasonModel.updateOne({ _id: TVSeasonId }, { $set: input })
    return ({
        isSuccess: true,
        msgString: 'Create Success'
    })
}

const deleteTVSeasonHandler = async (input: String) => {
    const TVSeasoneDelete = await TVSeasonModel.deleteOne({ _id: input })
}

export {
    getListTVSeasonHandler,
    getTVSeasonByIdHandler,
    createTVSeasonHandler,
    updateTVSeasonHandler,
    deleteTVSeasonHandler
}