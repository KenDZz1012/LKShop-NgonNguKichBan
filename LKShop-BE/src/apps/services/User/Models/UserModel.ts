import mongoose from "mongoose";
import User from "../DTO/User";
const myDB = mongoose.connection.useDb('KenStore');


const UserSchema = new mongoose.Schema({
    UserName: { type: String, require: true, unique: true },
    Password: { type: String, require: true },
    Sex: { type: String, default: null },
    Dob: { type: Date, default: null },
    Email: { type: String, require: true, unique: true },
    FullName: { type: String },
    Status: { type: Boolean, default: true },
}, { timestamps: true })


const UserModel = myDB.model<User>("tbl_User", UserSchema);
export default UserModel;