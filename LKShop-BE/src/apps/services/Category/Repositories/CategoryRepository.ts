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
    const category = await CategoryModel.findOne({ CategoryName: input.CategoryName })
    if (category) {
        return {
            isSuccess: false,
            msgString: `Category ${input.CategoryName} is exist`
        }
    }
    const categoryCreate = await CategoryModel.create(input)
    return {
        isSuccess: true,
        msgString: `Create Success`,
        data: categoryCreate
    }
}

const updateCategoryHandler = async (CategoryId: String, input: CategoryUpdate) => {
    return await CategoryModel.updateOne({ _id: CategoryId }, { $set: input })
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