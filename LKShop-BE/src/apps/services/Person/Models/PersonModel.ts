import mongoose from "mongoose";
import Person from "../DTO/Person";

const PersonSchema = new mongoose.Schema({
    FullName: { type: String, require: true },
    ShortName: { type: String, require: true },
    Birth: { type: Date, require: true },
    Avatar: { type: String },
    Role: { type: String },
}, { timestamps: true })

const PersonModel = mongoose.model<Person>("tbl_Person", PersonSchema);
export default PersonModel;