import { getListCategoryHandler, createCategoryHandler, updateCategoryHandler, deleteCategoryHandler, getCategoryByIdHandler } from "../Repositories/CategoryRepository";
import { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../../../common/base.response'
import Category from "../DTO/Category";
import Router from '../../../../decorators/routes.decorator';
import extractJWT from "../../../middlewares/extractJWT";
import validationMiddleware from "../../../middlewares/validation";
import CategoryCreate from "../DTO/CategoryCreate";
import CategoryUpdate from "../DTO/CategoryUpdate";
import CategoryFilter from "../DTO/CategoryFilter";
import HttpException from "../../../../Exceptions/HttpException";

const baseUrl = "api/v1/Category"

export class CategoryController {

    @Router({
        path: `/${baseUrl}/GetAllCategory`,
        method: 'get',
        middlewares: [extractJWT, validationMiddleware(CategoryFilter)]
    })
    private async getListCategory(req: Request, res: Response, next: NextFunction) {
        const categories = await getListCategoryHandler(req.body);
        return res.status(200).send(new BaseResponse<Category[]>(categories, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/GetCategoryById/:CategoryId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getCategoryById(req: Request, res: Response) {
        const { CategoryId } = req.params;
        const category = await getCategoryByIdHandler(CategoryId);
        return res.status(200).send(new BaseResponse<Category>(category, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/createCategory`,
        method: 'post',
        middlewares: [extractJWT, validationMiddleware(CategoryCreate)]
    })
    private async createCategory(req: Request, res: Response, next: NextFunction) {
        const response = await createCategoryHandler(req.body);
        if (!response.isSuccess) {
            next(new HttpException(400, response.msgString))
        }
        else {
            return res.send({
                isSuccess: response.isSuccess,
                message: response.msgString
            })
        }
    }
    // return res.status(200).send(new BaseResponse<Category>(category, "Create Success", true))

    @Router({
        path: `/${baseUrl}/updateCategory`,
        method: 'put',
        middlewares: [extractJWT, validationMiddleware(CategoryUpdate)]
    })
    private async updateCategory(req: Request, res: Response) {
        const category = await updateCategoryHandler(req.body)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Update Success"
        })
    }

    @Router({
        path: `/${baseUrl}/deleteCategory/:CategoryId`,
        method: 'delete',
        middlewares: [extractJWT]
    })
    private async deleteCategory(req: Request, res: Response) {
        const { CategoryId } = req.params
        await deleteCategoryHandler(CategoryId)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }
}
