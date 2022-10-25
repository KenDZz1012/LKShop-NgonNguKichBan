import mongoose from "mongoose";

export interface ClientDocument extends mongoose.Document {
    Id: string,
    UserName: string,
    Password: string,
    Email: string,
    IsPayment: Boolean,
    Quality: string,
    LastWatch: Array<String>,
    MovieList: Array<String>,
    Avatar: string
}

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

const Client = mongoose.model<ClientDocument>("tbl_Client", ClientSchema);
export default Client;