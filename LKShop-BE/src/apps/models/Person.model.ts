import mongoose from "mongoose";
import PersonModel from "../DTO/Person.dto";

const PersonSchema = new mongoose.Schema({
    FullName: { type: String, require: true },
    ShortName: { type: String, require: true },
    Birth: { type: Date, require: true },
    Avatar: { type: String },
    Role: { type: String },
}, { timestamps: true })

const Person = mongoose.model<PersonModel>("tbl_Person", PersonSchema);
export default Person;