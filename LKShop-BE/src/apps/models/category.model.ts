import mongoose from "mongoose";
import CategoryModel from "../DTO/Category.dto";

const CategorySchema = new mongoose.Schema({
    CategoryName: { type: String, require: true, unique: true },
    IsOnMenu: { type: Boolean, default: false }
}, { timestamps: true })

const Category = mongoose.model<CategoryModel>("tbl_Category", CategorySchema);
export default Category;