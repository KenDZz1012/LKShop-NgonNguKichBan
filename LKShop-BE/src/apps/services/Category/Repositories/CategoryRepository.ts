import Category from "../DTO/Category";
import CategoryModel from "../models/CategoryModel";
import CategoryFilter from "../DTO/CategoryFilter";
import CategoryCreate from "../DTO/CategoryCreate";
import CategoryUpdate from "../DTO/CategoryUpdate";


const getListCategoryHandler = async (input: CategoryFilter) => {
    return await CategoryModel.find(input)
}

const getCategoryByIdHandler = async (input: string) => {
    return await CategoryModel.findById(input)
}

const createCategoryHandler = async (input: CategoryCreate) => {
    return await CategoryModel.create(input)
}

const updateCategoryHandler = async (input: CategoryUpdate) => {
    return await CategoryModel.updateOne({ _id: input.Id }, { $set: input })
}

const deleteCategoryHandler = async (input: string) => {
    return await CategoryModel.deleteOne({ _id: input })
}

export {
    getListCategoryHandler,
    getCategoryByIdHandler,
    createCategoryHandler,
    updateCategoryHandler,
    deleteCategoryHandler
}