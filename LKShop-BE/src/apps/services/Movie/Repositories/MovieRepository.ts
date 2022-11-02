import MovieModel from "../models/MovieModel";
import Movie from "../DTO/Movie";
import MovieFilter from "../DTO/MovieFilter";

const getAllMovie = async (input: MovieFilter) => {
    return await MovieModel.find(input)
}

const getMovieById = async (input: String) => {
    return await MovieModel.findById(input)
}

const createMovie = async (input: Movie, files: any) => {
    input.Poster = files.Poster ? `src/public/MoviePoster/${files.Poster[0].filename}` : null
    input.Video = files.MovieVideo ? `src/public/MovieVideo/${files.MovieVideo[0].filename}` : null
    input.Trailer = files.MovieTrailer ? `src/public/MovieTrailer/${files.MovieTrailer[0].filename}` : null
    return await MovieModel.create(input) 
}

const updateMovie = async (input: Movie) => {
    return await MovieModel.updateOne({ _id: input.Id }, { $set: input })
}

const deleteMovie = async (input: string) => {
    return await MovieModel.deleteOne({ _id: input })
}

export {
    getAllMovie,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
}