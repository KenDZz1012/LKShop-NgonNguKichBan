import MovieModel from "../models/MovieModel";
import Movie from "../DTO/Movie";
import MovieFilter from "../DTO/MovieFilter";
import MovieCreate from "../DTO/MovieCreate";
import MovieUpdate from "../DTO/MovieUpdate";

const getAllMovieHandler = async (input: MovieFilter) => {
    let queryHandler = {
        ...input,
        Category: input.Category ? { $in: input.Category } : null,
        Director: input.Director ? { $in: input.Director } : null,
        Actor: input.Actor ? { $in: input.Actor } : null,
    }
    const query = Object.fromEntries(Object.entries(queryHandler).filter(([_, v]) => v != null));
    return await MovieModel.find(query).populate('Category').populate('Actor').populate('Director')
}

const getMovieByIdHandler = async (input: String) => {
    return await MovieModel.findById(input).populate('Category').populate('Actor').populate('Director')
}

const createMovieHandler = async (input: MovieCreate) => {
    const movieCreate = await MovieModel.create(input)
    return {
        isSuccess: true,
        msgString: "Create Success"
    }
}

const updateMovieHandler = async (MovieId: String, input: MovieUpdate) => {

    return await MovieModel.updateOne({ _id: MovieId }, { $set: input })
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