import mongoose from "mongoose";
import { PopulatedDoc } from 'mongoose';
import Movie from "../DTO/Movie";

const MovieSchema = new mongoose.Schema({
    MovieName: { type: String, require: true },
    Poster: { type: String, require: true },
    Rating: { type: Number, default: 0 },
    RateCount: { type: Number, default: 0 },
    Category: [{
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }],
    Information: { type: String, defaut: null },
    ReleaseYear: { type: Number, default: 0 },
    InTime: { type: Date, default: new Date() },
    Trailer: {
        type: String,
        default: null
    },
    Status: { type: String, default: null },
    IsTrending: { type: Boolean, default: null },
    Director: [{
        type: mongoose.Types.ObjectId,
        ref: "Celebrity"
    }],
    Actor: [{
        type: mongoose.Types.ObjectId,
        ref: "Celebrity"
    }],
    RunTime: {
        type: String,
        require: true
    },
    RelatedMovie: [{
        type: String,
        default: null
    }],
    Country: {
        type: String,
        default: null,
    },
    Video: {
        type: String,
        default: null,
    },
    CreatedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    CreatedTime:{
        type:Date,
        default: new Date()
    }
    
})

const MovieModel = mongoose.model<Movie>("tbl_Movie", MovieSchema);
export default MovieModel;