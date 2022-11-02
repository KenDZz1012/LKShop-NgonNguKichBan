import mongoose from "mongoose";
import Client from "../DTO/Client"
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
const myDB = mongoose.connection.useDb('KenStore');
const ClientModel = myDB.model<Client>("tbl_Client", ClientSchema);
export default ClientModel;