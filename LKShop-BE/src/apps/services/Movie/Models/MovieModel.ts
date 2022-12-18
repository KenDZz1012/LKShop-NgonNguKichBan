import mongoose from "mongoose";
import { PopulatedDoc } from 'mongoose';
import Movie from "../DTO/Movie";

const MovieSchema = new mongoose.Schema({
    MovieName: { type: String, require: true },
    Category: [{
        type: mongoose.Types.ObjectId,
        ref: "tbl_Category"
    }],
    Director: [{
        type: mongoose.Types.ObjectId,
        ref: "tbl_Celebrity"
    }],
    Actor: [{
        type: mongoose.Types.ObjectId,
        ref: "tbl_Celebrity"
    }],
    Country: {
        type: String,
        default: null,
    },
    Type: {
        type: String,
        default: null,
    },
    CreatedTime: {
        type: Date,
        default: new Date()
    }

})

const MovieModel = mongoose.model<Movie>("tbl_Movie", MovieSchema);
export default MovieModel;