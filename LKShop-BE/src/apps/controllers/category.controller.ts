import { getListCategory, createCategory, updateCategory, deleteCategory,getCategoryById } from "../services/Category.service";
import { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../common/base.response'
import { CategoryDocument } from "../models/Category.model";



const getListCategoryHandler = async (req: Request, res: Response, next: NextFunction) => {
    const categories = await getListCategory();
    return res.send(new BaseResponse<CategoryDocument[]>(categories, "Get Success", true))
}

const getCategoryByIdHandler = async (req: Request, res: Response) => {
    const { CategoryId } = req.params;
    const category = await getCategoryById(CategoryId);
    return res.send(new BaseResponse<CategoryDocument>(category, "Get Success", true))
}

const createCategoryHandler = async (req: Request, res: Response) => {
    const category = await createCategory(req.body);
    return res.send(new BaseResponse<CategoryDocument>(category, "Create Success", true))
}

const updateCategoryHandler = async (req: Request, res: Response) => {
    const category = await updateCategory(req.body)
    return res.send({
        isSuccess: true,
        msgString: "Update Success"
    })
}

const deleteCategoryHandler = async (req: Request, res: Response) => {
    const { CategoryId } = req.params
    await deleteCategory(CategoryId)
    return res.send({
        isSuccess: true,
        msgString: "Delete Success"
    })
}
export {
    getListCategoryHandler,
    createCategoryHandler,
    updateCategoryHandler,
    deleteCategoryHandler,
    getCategoryByIdHandler
}