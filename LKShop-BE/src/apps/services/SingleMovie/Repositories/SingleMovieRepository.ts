import SingleMovieModel from "../models/SingleMovieModel";
import SingleMovie from "../DTO/SingleMovie";
import SingleMovieFilter from "../DTO/SingleMovieFilter";
import SingleMovieCreate from "../DTO/SingleMovieCreate";
import SingleMovieUpdate from "../DTO/SingleMovieUpdate";

const getAllSingleMovieHandler = async (input: SingleMovieFilter) => {
    return await SingleMovieModel.find(input).populate('Movie')
}

const getSingleMovieByIdHandler = async (input: String) => {
    return await SingleMovieModel.findById(input).populate('Movie')
}

const createSingleMovieHandler = async (input: SingleMovieCreate, files: any) => {
    if (files) {
        input.Poster = files.MoviePoster ? `src/public/MoviePoster/${files.MoviePoster[0].filename}` : null
        input.video = files.MovieVideo ? `src/public/MovieVideo/${files.MovieVideo[0].filename}` : null
    }
    const movieCreate = await SingleMovieModel.create(input)
    return ({
        isSuccess: true,
        msgString: 'Create Success'
    })
}

const updateSingleMovieHandler = async (input: SingleMovieUpdate, files: any) => {
    if (files) {
        input.Poster = files.MoviePoster ? `src/public/MoviePoster/${files.MoviePoster[0].filename}` : null
        input.video = files.MovieVideo ? `src/public/MovieVideo/${files.MovieVideo[0].filename}` : null
    }
    const movieUpdate = await SingleMovieModel.updateOne({ _id: input.Id }, { $set: input })
    return ({
        isSuccess: true,
        msgString: 'Create Success'
    })
}

const deleteSingleMovieHandler = async (input: String) => {
    const movieDelete = await SingleMovieModel.deleteOne({ _id: input })
}

export {
    getAllSingleMovieHandler,
    getSingleMovieByIdHandler,
    createSingleMovieHandler,
    updateSingleMovieHandler,
    deleteSingleMovieHandler
}