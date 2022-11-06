import mongoose from "mongoose";
import { PopulatedDoc } from 'mongoose';

const TVSeriesSchema = new mongoose.Schema({
    MovieName: { type: String, require: true },
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
    Language: {
        type: String,
        default: null
    },
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

const TVSeriesModel = mongoose.model("tbl_TVSeries", TVSeriesSchema);
export default TVSeriesModel;