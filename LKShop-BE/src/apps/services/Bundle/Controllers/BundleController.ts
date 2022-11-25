import { getListBundleHandler, createBundleHandler, updateBundleHandler, deleteBundleHandler, getBundleByIdHandler } from "../Repositories/BundleRepository";
import e, { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../../../common/base.response'
import Router from '../../../../decorators/routes.decorator';
import extractJWT from "../../../middlewares/extractJWT";
import upload from "../../../middlewares/uploadImage";
import Bundle from "../DTO/Bundle";
import validationMiddleware from "../../../middlewares/validation";
import BundleFilter from "../DTO/BundleFilter";
import BundleCreate from "../DTO/BundlleCreate";
import BundleUpdate from "../DTO/BundleUpdate";
import HttpException from "../../../../Exceptions/HttpException";

const baseUrl = "api/v1/Bundle"

export class BundleController {


    @Router({
        path: `/${baseUrl}/GetListBundle`,
        method: 'get',
        middlewares: [extractJWT, validationMiddleware(BundleFilter)]
    })
    private async getListBundle(req: Request, res: Response, next: NextFunction) {
        const Bundles = await getListBundleHandler(req.body);
        return res.status(200).send(new BaseResponse<Bundle[]>(Bundles, "Get Success", true))
    }



    @Router({
        path: `/${baseUrl}/GetBundleById/:BundleId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getBundleById(req: Request, res: Response) {
        const { BundleId } = req.params;
        const Bundle = await getBundleByIdHandler(BundleId);
        return res.status(200).send(new BaseResponse<Bundle>(Bundle, "Get Success", true))
    }



    @Router({
        path: `/${baseUrl}/createBundle`,
        method: 'post',
        middlewares: [extractJWT, validationMiddleware(BundleCreate)]
    })
    private async createBundle(req: Request, res: Response, next: NextFunction) {
        const Response = await createBundleHandler(req.body);
        if (!Response.isSuccess) {
            next(new HttpException(400,Response.msgString))
        }
        else{
            return res.status(201).send({
                isSuccess: Response.isSuccess,
                msgString: Response.msgString
            })
        }

    }



    @Router({
        path: `/${baseUrl}/updateBundle`,
        method: 'put',
        middlewares: [extractJWT, validationMiddleware(BundleUpdate)]
    })
    private async updateBundle(req: Request, res: Response) {
        const Bundle = await updateBundleHandler(req.body)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Update Success"
        })
    }



    @Router({
        path: `/${baseUrl}/deleteBundle`,
        method: 'delete',
        middlewares: [extractJWT]
    })
    private async deleteBundle(req: Request, res: Response) {
        const { BundleId } = req.params
        await deleteBundleHandler(BundleId)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }
}
