import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import config from 'config'
import UserModel from "../DTO/User.dto";

const UserSchema = new mongoose.Schema({
    UserName: { type: String, require: true, unique: true },
    Password: { type: String, require: true },
    Sex: { type: String, require: true },
    Dob: { type: Date, require: true },
    Email: { type: String, require: true },
    FullName: { type: String },
    Status: { type: Boolean, require: true }
}, { timestamps: true })

const User = mongoose.model<UserModel>("tbl_User", UserSchema);
export default User;