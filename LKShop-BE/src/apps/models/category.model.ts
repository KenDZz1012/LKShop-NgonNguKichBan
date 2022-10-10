import mongoose from "mongoose";

export interface CategoryDocument extends mongoose.Document {
    Id: string,
    CategoryName: string,
}


const CategorySchema = new mongoose.Schema({
    CategoryName: { type: String, require: true, unique: true },
}, { timestamps: true })

const Category = mongoose.model<CategoryDocument>("tbl_Category", CategorySchema);
export default Category;