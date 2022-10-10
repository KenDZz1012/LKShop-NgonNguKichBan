import mongoose from "mongoose";
import { PopulatedDoc } from 'mongoose';

export interface MovieDocument extends mongoose.Document {
    MovieName: string,
    Poster: string,
    Rating: Number,
    Category: []
    Dob: Date,
    Email: string,
    FullName: string,
    Status: boolean
}
export interface MovieFilter extends mongoose.Document { }



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
    Trailer: [{
        type: String,
        default: null
    }],
    Status: { type: String, default: null },
    IsTrending: { type: Boolean, default: null },
    Director: {
        type: mongoose.Types.ObjectId,
        ref: "Person"
    },
    Actor: [{
        type: mongoose.Types.ObjectId,
        ref: "Person"
    }],
    CreatedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    RunTime: {
        type: String,
        require: true
    },
    RelatedMovie: {
        type: String,
        default: null
    },
    Language: {
        type: String,
        default: null
    },
    County: {
        type: String,
        default: null,
    }
})

const Movie = mongoose.model("tbl_Movie", MovieSchema);
export default Movie;