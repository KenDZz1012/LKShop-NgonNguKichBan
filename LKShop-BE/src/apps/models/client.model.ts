import mongoose from "mongoose";
import ClientModel from "../DTO/Client.dto";

const ClientSchema = new mongoose.Schema({
    UserName: { type: String, require: true },
    Password: { type: String, require: true },
    Email: { type: String, require: true, unique: true },
    Avatar: { type: String, default: null },
    IsPayment: { type: Boolean, default: false },
    Quality: { type: String, default: null },
    LastWatch: [{
        type: mongoose.Types.ObjectId,
        ref: "Movie"
    }],
    MovieList: [{
        type: mongoose.Types.ObjectId,
        ref: "Movie"
    }]
}, { timestamps: true })

const Client = mongoose.model<ClientModel>("tbl_Client", ClientSchema);
export default Client;