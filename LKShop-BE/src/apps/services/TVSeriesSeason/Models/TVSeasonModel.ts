import mongoose from "mongoose";
import { PopulatedDoc } from 'mongoose';

const TVSeriesSeasonSchema = new mongoose.Schema({
    MovieName: { type: String, require: true },
    Season: { type: Number, default: 0 },
    Information: { type: String, default: null },
    Trailer: { type: String, default: null },
    TVEpisode: [{
        type: mongoose.Types.ObjectId,
        ref: "TVEpisode"
    }],
    Rating: { type: Number, default: 0 },
    RateCount: { type: Number, default: 0 },
    ReleaseYear: { type: Number, default: 0 },
    Status: { type: String, default: null },
    IsTrending: { type: Boolean, default: null },
    CreatedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    CreatedTime: {
        type: Date,
        default: new Date()
    }
})

const TVSeriesSeasonModel = mongoose.model("tbl_TVSeriesSeason", TVSeriesSeasonSchema);
export default TVSeriesSeasonModel;