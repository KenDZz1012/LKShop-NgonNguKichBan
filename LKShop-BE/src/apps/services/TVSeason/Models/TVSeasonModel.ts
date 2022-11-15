import mongoose from "mongoose";
import { PopulatedDoc } from 'mongoose';

const TVSeasonSchema = new mongoose.Schema({
    Season: {
        type: Number,
        default: null
    },
    Poster: {
        type: String,
        default: null
    },
    Description: {
        type: String,
        default: null
    },
    Trailer: {
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
        default: 0
    },
    Status: {
        type: String,
        default: null
    },
    IsTrending: {
        type: Boolean,
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

const TVSeasonModel = mongoose.model("tbl_TVSeason", TVSeasonSchema);
export default TVSeasonModel;