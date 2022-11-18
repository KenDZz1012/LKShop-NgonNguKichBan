import TVEpisodeModel from "../Models/TVEpisodeModel";
import TVEpisodeCreate from "../DTO/TVEpisodeCreate";
import TVEpisodeFilter from "../DTO/TVEpisodeFilter";
import TVEpisode from "../DTO/TVEpisode";
import TVEpisodeUpdate from "../DTO/TVEpisodeUpdate";

const getAllTVEpisodeHandler = async (input: TVEpisodeFilter) => {
    return await TVEpisodeModel.find(input).populate('Movie')
}

const getTVEpisodeByIdHandler = async (input: String) => {
    return await TVEpisodeModel.findById(input).populate('Movie')
}

const createTVEpisodeHandler = async (input: TVEpisodeCreate, files: any) => {
    if (files) {
        input.Video = files.TVSeriesVideo ? `src/public/MovieVideo/${files.MovieVideo[0].filename}` : null
    }
    const movieCreate = await TVEpisodeModel.create(input)
    return ({
        isSuccess: true,
        msgString: 'Create Success'
    })
}

const updateTVEpisodeHandler = async (input: TVEpisodeUpdate, files: any) => {
    if (files) {
        input.Video = files.TVSeriesVideo ? `src/public/MovieVideo/${files.MovieVideo[0].filename}` : null
    }
    const movieUpdate = await TVEpisodeModel.updateOne({ _id: input.Id }, { $set: input })
    return ({
        isSuccess: true,
        msgString: 'Create Success'
    })
}

const deleteTVEpisodeHandler = async (input: String) => {
    const movieDelete = await TVEpisodeModel.deleteOne({ _id: input })
}

export {
    getAllTVEpisodeHandler,
    getTVEpisodeByIdHandler,
    createTVEpisodeHandler,
    updateTVEpisodeHandler,
    deleteTVEpisodeHandler
}