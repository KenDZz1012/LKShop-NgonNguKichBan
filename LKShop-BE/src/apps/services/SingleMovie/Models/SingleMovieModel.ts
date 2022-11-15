import mongoose from "mongoose";
import { PopulatedDoc } from 'mongoose';
import SingleMovie from "../DTO/SingleMovie";

const SingleMovieSchema = new mongoose.Schema({
    Poster: {
        type: String,
        default: null
    },
    Description: {
        type: String,
        default: null
    },
    RunTime: {
        type: String,
        default: null
    },
    Rating: {
        type: Number,
        default: 0
    },
    RateCount: {
        type: Number,
        default: 0
    },
    ViewCount: {
        type: Number,
        default: 0
    },
    YearProduce: {
        type: Number,
        default: null,
    },
    Trailer: {
        type: String,
        default: null
    },
    Video: {
        type: String,
        default: null
    },
    IsTrending: {
        type: Boolean,
        default: null,
    },
    Status: {
        type: String,
        default: null
    },
    Movie: {
        type: mongoose.Types.ObjectId,
        ref: "tbl_Movie"
    },
    CreatedTime: {
        type: Date,
        default: new Date()
    }
})

const SingleMovieModel = mongoose.model<SingleMovie>("tbl_SingleMovie", SingleMovieSchema);
export default SingleMovieModel;