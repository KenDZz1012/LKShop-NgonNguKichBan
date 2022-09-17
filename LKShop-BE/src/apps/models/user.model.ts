import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import config from 'config'

export interface UserDocument extends mongoose.Document {
    Id: string,
    UserName: string,
    Password: string,
    Sex: string,
    Dob: Date,
    Email: string,
    FullName: string,
    Status: boolean
}

export interface UserFilter extends mongoose.Document {
    Id: string,
    UserName: string,
    FullName: string,
    Email: string,
    Status: boolean,
    Sex: string
}

export interface UserLogin extends mongoose.Document {
    UserName: string,
    Password: string
}


const UserSchema = new mongoose.Schema({
    UserName: { type: String, require: true, unique: true },
    Password: { type: String, require: true },
    Sex: { type: String, require: true },
    Dob: { type: Date, require: true },
    Email: { type: String, require: true },
    FullName: { type: String },
    Status: { type: Boolean, require: true }
}, { timestamps: true })

const User = mongoose.model<UserDocument>("tbl_User", UserSchema);
export default User;