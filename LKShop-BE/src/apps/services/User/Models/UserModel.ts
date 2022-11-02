import mongoose from "mongoose";
import User from "../DTO/User";
const myDB = mongoose.connection.useDb('KenStore');


const UserSchema = new mongoose.Schema({
    UserName: { type: String, require: true, unique: true },
    Password: { type: String, require: true },
    Sex: { type: String, require: true },
    Dob: { type: Date, require: true },
    Email: { type: String, require: true },
    FullName: { type: String },
    Status: { type: Boolean, require: true }
}, { timestamps: true })


const UserModel = myDB.model<User>("tbl_User", UserSchema);
export default UserModel;