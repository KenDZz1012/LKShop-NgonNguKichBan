import Category from "../DTO/Category";
import CategoryModel from "../models/CategoryModel";
import CategoryFilter from "../DTO/CategoryFilter";


const getListCategory = async (input: CategoryFilter) => {
    return await CategoryModel.find(input)
}

const getCategoryById = async (input: string) => {
    return await CategoryModel.findById(input)
}

const createCategory = async (input: Category) => {
    return await CategoryModel.create(input)
}

const updateCategory = async (input: Category) => {
    return await CategoryModel.updateOne({ _id: input.Id }, { $set: input })
}

const deleteCategory = async (input: string) => {
    return await CategoryModel.deleteOne({ _id: input })
}

export {
    getListCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}