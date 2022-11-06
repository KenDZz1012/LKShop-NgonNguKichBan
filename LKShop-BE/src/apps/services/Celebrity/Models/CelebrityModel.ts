import mongoose from "mongoose";
import Celebrity from "../DTO/Celebrity";

const CelebritySchema = new mongoose.Schema({
    FullName: { type: String, require: true },
    ShortName: { type: String, require: true },
    Birth: { type: Date, require: true },
    Avatar: { type: String },
    Role: { type: String },
    CreatedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    CreatedTime:{
        type:Date,
        default: new Date()
    }
}, { timestamps: true })

const CelebrityModel = mongoose.model<Celebrity>("tbl_Celebrity", CelebritySchema);
export default CelebrityModel;