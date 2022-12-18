import { getListCelebrityHandler, getCelebrityByIdHandler, createCelebrityHandler, updateCelebrityHandler, deleteCelebrityHandler } from "../Repositories/CelebrityRepository";
import { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../../../common/base.response'
import Celebrity from "../DTO/Celebrity";
import Router from '../../../../decorators/routes.decorator';
import extractJWT from "../../../middlewares/extractJWT";
import validationMiddleware from "../../../middlewares/validation";
import CelebrityCreate from "../DTO/CelebrityCreate";
import CelebrityUpdate from "../DTO/CelebrityUpdate";
import CelebrityFilter from "../DTO/CelebrityFilter";
import HttpException from "../../../../Exceptions/HttpException";
import upload from "../../../middlewares/uploadImage";

const baseUrl = "api/v1/Celebrity"

export class CeleController {
    @Router({
        path: `/${baseUrl}/GetAllCelebrity`,
        method: 'get',
        middlewares: [extractJWT, validationMiddleware(CelebrityFilter)]
    })
    private async getListCelebrity(req: Request, res: Response, next: NextFunction) {
        const Celebritys = await getListCelebrityHandler(req.body);
        return res.status(200).send(new BaseResponse<Celebrity[]>(Celebritys, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/GetCelebrityById/:CelebrityId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getCelebrityById(req: Request, res: Response) {
        const { CelebrityId } = req.params;
        const Celebrity = await getCelebrityByIdHandler(CelebrityId);
        return res.status(200).send(new BaseResponse<Celebrity>(Celebrity, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/createCelebrity`,
        method: 'post',
        middlewares: [extractJWT, upload.single("CelebrityAvatar"), validationMiddleware(CelebrityCreate)]
    })
    private async createCelebrity(req: Request, res: Response, next: NextFunction) {
        console.log(req.file)
        const response = await createCelebrityHandler(req.body, req.file);
        if (!response.isSuccess) {
            next(new HttpException(400, response.msgString))
        }
        else {
            return res.status(201).send({
                isSuccess: response.isSuccess,
                message: response.msgString
            })
        }
    }

    @Router({
        path: `/${baseUrl}/updateCelebrity/:CelebrityId`,
        method: 'put',
        middlewares: [extractJWT, upload.single("CelebrityAvatar"), validationMiddleware(CelebrityUpdate)]
    })
    private async updateCelebrity(req: Request, res: Response) {
        const { CelebrityId } = req.params
        const Celebrity = await updateCelebrityHandler(CelebrityId, req.body, req.file)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Update Success"
        })
    }

    @Router({
        path: `/${baseUrl}/deleteCelebrity/:CelebrityId`,
        method: 'delete',
        middlewares: [extractJWT]
    })
    private async deleteCelebrity(req: Request, res: Response) {
        const { CelebrityId } = req.params
        await deleteCelebrityHandler(CelebrityId)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }
}
