import TVSeasonModel from "../Models/TVSeasonModel";
import TVSeasonCreate from "../DTO/TVSeasonCreate";
import TVSeasonFilter from "../DTO/TVSeasonFilter";
import TVSeasonUpdate from "../DTO/TVSeasonUpdate";

const getListTVSeasonHandler = async (input: TVSeasonFilter) => {
    return await TVSeasonModel.find(input).populate('Movie')
}

const getTVSeasonByIdHandler = async (input: String) => {
    return await TVSeasonModel.findById(input).populate('Movie')
}

const createTVSeasonHandler = async (input: TVSeasonCreate, files: any) => {
    if (files) {
        input.Poster = files.TVPoster ? `src/public/TVPoster/${files.TVPoster[0].filename}` : null
    }
    const TVSeasonCreate = await TVSeasonModel.create(input)
    return ({
        isSuccess: true,
        msgString: 'Create Success'
    })
}

const updateTVSeasonHandler = async (input: TVSeasonUpdate, files: any) => {
    if (files) {
        input.Poster = files.TVPoster ? `src/public/TVPoster/${files.TVPoster[0].filename}` : null
    }
    const TVSeasonUpdate = await TVSeasonModel.updateOne({ _id: input.Id }, { $set: input })
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