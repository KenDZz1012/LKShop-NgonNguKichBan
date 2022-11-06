import MovieModel from "../models/MovieModel";
import Movie from "../DTO/Movie";
import MovieFilter from "../DTO/MovieFilter";
import MovieCreate from "../DTO/MovieCreate";
import MovieUpdate from "../DTO/MovieUpdate";

const getAllMovieHandler = async (input: MovieFilter) => {
    return await MovieModel.find(input)
}

const getMovieByIdHandler = async (input: String) => {
    return await MovieModel.findById(input)
}

const createMovieHandler = async (input: MovieCreate, files: any) => {
    input.Poster = files.Poster ? `src/public/MoviePoster/${files.Poster[0].filename}` : null
    input.Video = files.MovieVideo ? `src/public/MovieVideo/${files.MovieVideo[0].filename}` : null
    input.Trailer = files.MovieTrailer ? `src/public/MovieTrailer/${files.MovieTrailer[0].filename}` : null
    return await MovieModel.create(input) 
}

const updateMovieHandler = async (input: MovieUpdate) => {
    return await MovieModel.updateOne({ _id: input.Id }, { $set: input })
}

const deleteMovieHandler = async (input: string) => {
    return await MovieModel.deleteOne({ _id: input })
}

export {
    getAllMovieHandler,
    getMovieByIdHandler,
    createMovieHandler,
    updateMovieHandler,
    deleteMovieHandler
}