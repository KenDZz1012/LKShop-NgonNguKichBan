import { getListCategory, createCategory, updateCategory, deleteCategory, getCategoryById } from "../services/Category.service";
import { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../common/base.response'
import { CategoryDocument } from "../models/Category.model";
import Router from '../../decorators/routes.decorator';
import extractJWT from "../middlewares/extractJWT";

const baseUrl = "api/v1/Category"

export class CategoryController {

    @Router({
        path: `/${baseUrl}/GetAllCategory`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getListCategoryHandler(req: Request, res: Response, next: NextFunction) {
        const categories = await getListCategory(req.body);
        return res.send(new BaseResponse<CategoryDocument[]>(categories, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/GetCategoryById/:CategoryId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getCategoryByIdHandler(req: Request, res: Response) {
        const { CategoryId } = req.params;
        const category = await getCategoryById(CategoryId);
        return res.send(new BaseResponse<CategoryDocument>(category, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/createCategory`,
        method: 'post',
        middlewares: [extractJWT]
    })
    private async createCategoryHandler(req: Request, res: Response) {
        const category = await createCategory(req.body);
        return res.send(new BaseResponse<CategoryDocument>(category, "Create Success", true))
    }

    @Router({
        path: `/${baseUrl}/updateCategory`,
        method: 'put',
        middlewares: [extractJWT]
    })
    private async updateCategoryHandler(req: Request, res: Response) {
        const category = await updateCategory(req.body)
        return res.send({
            isSuccess: true,
            msgString: "Update Success"
        })
    }

    @Router({
        path: `/${baseUrl}/deleteCategory/:CategoryId`,
        method: 'delete',
        middlewares: [extractJWT]
    })
    private async deleteCategoryHandler(req: Request, res: Response) {
        const { CategoryId } = req.params
        await deleteCategory(CategoryId)
        return res.send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }
}
