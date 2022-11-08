import mongoose from "mongoose";
import { PopulatedDoc } from 'mongoose';

const TVSeriesSchema = new mongoose.Schema({
    MovieName: { type: String, require: true },
    Category: [{
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }],
    Director: [{
        type: mongoose.Types.ObjectId,
        ref: "Celebrity"
    }],
    Actor: [{
        type: mongoose.Types.ObjectId,
        ref: "Celebrity"
    }],
    StartYear: { type: Number, default: 0 },
    EndYear: { type: Number, default: 0},
    TVSeason:[{
        type: mongoose.Types.ObjectId,
        ref: "TVSeriesSeason"
    }],
    Country: {
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