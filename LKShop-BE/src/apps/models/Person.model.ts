import mongoose from "mongoose";

export interface PersonDocument extends mongoose.Document {
    Id: string,
    FullName: string,
    ShortName: string,
    Birth: Date,
    Avatar: String,
    Role: String
}


const PersonSchema = new mongoose.Schema({
    FullName: { type: String, require: true },
    ShortName: { type: String, require: true },
    Birth: { type: Date, require: true },
    Avatar: { type: String },
    Role: { type: String },
}, { timestamps: true })

const Person = mongoose.model<PersonDocument>("tbl_Person", PersonSchema);
export default Person;