import mongoose from "mongoose";

export interface CategoryDocument extends mongoose.Document {
    Id: string,
    CategoryName: string,
    IsOnMenu: Boolean
}


const CategorySchema = new mongoose.Schema({
    CategoryName: { type: String, require: true, unique: true },
    IsOnMenu: { type: Boolean, default: false }
}, { timestamps: true })

const Category = mongoose.model<CategoryDocument>("tbl_Category", CategorySchema);
export default Category;