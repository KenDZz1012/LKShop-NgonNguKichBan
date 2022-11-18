import mongoose from "mongoose";
import { PopulatedDoc } from 'mongoose';
import TVEpisode from "../DTO/TVEpisode";

const TVEpisodeSchema = new mongoose.Schema({
    Video: {
        type: String,
        default: null
    },
    Episode: {
        type: Number,
        default: null
    },
    EpisodeName: {
        type: String,
        default: null
    },
    RunTime: {
        type: String,
        default: null
    },
    TVSeason:{
        type: mongoose.Types.ObjectId,
        ref: "tbl_TVSeason"
    },
    CreatedTime: {
        type: Date,
        default: new Date()
    }
})

const TVEpisodeModel = mongoose.model<TVEpisode>("tbl_TVEpisode", TVEpisodeSchema);
export default TVEpisodeModel;