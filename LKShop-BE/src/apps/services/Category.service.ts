import CategoryModel, { CategoryFilterModel } from "../DTO/Category.dto";
import Category from "../models/Category.model";


const getListCategory = async (input: CategoryFilterModel) => {
    const filter: CategoryFilterModel = { ...input }
    return await Category.find(filter)
}

const getCategoryById = async (input: string) => {
    return await Category.findById(input)
}

const createCategory = async (input: CategoryModel) => {
    return await Category.create(input)
}

const updateCategory = async (input: CategoryModel) => {
    const category: CategoryModel = { ...input }
    return await Category.updateOne({ _id: category.Id }, { $set: category })
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