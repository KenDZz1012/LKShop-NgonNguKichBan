import { DocumentDefinition } from "mongoose";
import Category, { CategoryDocument, } from "../models/Category.model";


const getListCategory = async () => {
    return await Category.find()
}

const getCategoryById = async (input: string) => {
    return await Category.findById(input)
}

const createCategory = async (input: DocumentDefinition<CategoryDocument>) => {
    return await Category.create(input)
}

const updateCategory = async (input: DocumentDefinition<CategoryDocument>) => {
    const category: DocumentDefinition<CategoryDocument> = { ...input }
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