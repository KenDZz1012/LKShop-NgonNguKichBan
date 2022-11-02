import mongoose from "mongoose";
import Category from "../DTO/Category";

const CategorySchema = new mongoose.Schema({
    CategoryName: { type: String, require: true, unique: true },
    IsOnMenu: { type: Boolean, default: false }
}, { timestamps: true })

const CategoryModel = mongoose.model<Category>("tbl_Category", CategorySchema);
export default CategoryModel;