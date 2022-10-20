import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    UserName: { type: String, require: true },
    Password: { type: String, require: true },
    Email: { type: String, require: true, unique: true },
    Avatar: { type: String },
    IsPayment: { type: Boolean, default: false },
    Quality: { type: String, default: null },
    LastWatch: [{
        type: String,
        default: null
    }]
}, { timestamps: true })

const Client = mongoose.model("tbl_Client", ClientSchema);
export default Client;