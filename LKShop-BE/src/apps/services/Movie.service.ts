import Movie from "../models/Movie.model";
import MovieModel, { MovieFilterModel } from "../DTO/Movie.dto";

const getAllMovie = async (input: MovieFilterModel) => {
    return await Movie.find(input)
}

const getMovieById = async (input: String) => {
    return await Movie.findById(input)
}

const createMovie = async (input: MovieModel, file: any) => {
    if (file) {
        console.log(file)
    }
    // return await Movie.create(input)
    return
}

const updateMovie = async (input: MovieModel) => {
    return await Movie.updateOne({ _id: input.Id }, { $set: input })
}

const deleteMovie = async (input: string) => {
    return await Movie.deleteOne({ _id: input })
}

export {
    getAllMovie,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
}