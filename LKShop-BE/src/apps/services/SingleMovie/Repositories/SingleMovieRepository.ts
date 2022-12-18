import SingleMovieModel from "../models/SingleMovieModel";
import SingleMovie from "../DTO/SingleMovie";
import SingleMovieFilter from "../DTO/SingleMovieFilter";
import SingleMovieCreate from "../DTO/SingleMovieCreate";
import SingleMovieUpdate from "../DTO/SingleMovieUpdate";
import { FileService } from "../../../middlewares/FileService";
import DataFile from "../DTO/DataFile";
const _fileService = new FileService();

const getAllSingleMovieHandler = async (input: SingleMovieFilter) => {
    return await SingleMovieModel.find(input).populate('Movie')
}

const getSingleMovieByIdHandler = async (input: String) => {
    return await SingleMovieModel.findById(input).populate('Movie')
}

const createSingleMovieHandler = async (input: SingleMovieCreate, files: any) => {
    if (files.MoviePoster) {
        const filePathPoster = await _fileService.createFile(files.MoviePoster[0])
        input.Poster = filePathPoster
    }
    if (files.MovieVideo) {
        const filePathMovie = await _fileService.createLargeFile(files.MovieVideo[0])
        input.Video = filePathMovie[0]
        input.VideoUrl = filePathMovie[1]
    }
    console.log(input)
    const movieCreate = await SingleMovieModel.create(input)
    return ({
        isSuccess: true,
        msgString: 'Create Success'
    })
}

const updateSingleMovieHandler = async (SingleMovieId: String, input: SingleMovieUpdate, files: any) => {
    if (files.MoviePoster) {
        const filePathPoster = await _fileService.createFile(files.MoviePoster[0])
        input.Poster = filePathPoster
    }
    if (files.MovieVideo) {
        const filePathMovie = await _fileService.createLargeFile(files.MovieVideo[0])
        input.Video = filePathMovie[0]
        input.VideoUrl = filePathMovie[1]
    }
    const movieUpdate = await SingleMovieModel.updateOne({ _id: SingleMovieId }, { $set: input })
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