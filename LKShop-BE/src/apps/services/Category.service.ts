import CategoryModel, { CategoryFilterModel } from "../DTO/Category.dto";
import Category from "../models/Category.model";


const getListCategory = async (input: CategoryFilterModel) => {
    return await Category.find(input)
}

const getCategoryById = async (input: string) => {
    return await Category.findById(input)
}

const createCategory = async (input: CategoryModel) => {
    return await Category.create(input)
}

const updateCategory = async (input: CategoryModel) => {
    return await Category.updateOne({ _id: input.Id }, { $set: input })
}

const deleteCategory = async (input: string) => {
    return await Category.deleteOne({ _id: input })
}

export {
    getListCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}