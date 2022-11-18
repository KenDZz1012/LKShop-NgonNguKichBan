import mongoose from "mongoose";
import Bundle from "../DTO/Bundle";

const BundleSchema = new mongoose.Schema({
    BundleName: {
        type: String,
        require: true
    },
    Description: [
        {
            type: String,
            default:null
        }
    ],
    Price: {
        type: Number,
        require: true
    },
    CreatedTime: {
        type: Date,
        default: new Date()
    }
}, { timestamps: true })

const BundleModel = mongoose.model<Bundle>("tbl_Bundle", BundleSchema);
export default BundleModel;