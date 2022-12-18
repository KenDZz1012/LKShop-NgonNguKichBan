import { Request, Response, NextFunction } from "express";
import { BadRequest, BaseResponse } from '../../../../common/base.response'
import TVSeason from "../DTO/TVSeason";
import Router from '../../../../decorators/routes.decorator';
import extractJWT from "../../../middlewares/extractJWT";
import upload from "../../../middlewares/uploadImage";
import { getListTVSeasonHandler, getTVSeasonByIdHandler, createTVSeasonHandler, updateTVSeasonHandler, deleteTVSeasonHandler } from '../Repositories/TVSeasonRepository'
import validationMiddleware from "../../../middlewares/validation";
import TVSeasonFilter from "../DTO/TVSeasonFilter";
import TVSeasonCreate from "../DTO/TVSeasonCreate";
import TVSeasonUpdate from "../DTO/TVSeasonUpdate";
import HttpException from "../../../../Exceptions/HttpException";

const baseUrl = `api/v1/TVSeason`

export class TVSeasonController {

    @Router({
        path: `/${baseUrl}/getListTVSeason`,
        method: 'get',
        middlewares: [extractJWT, validationMiddleware(TVSeasonFilter)]
    })
    public async GetListTVSeason(req: Request, res: Response) {
        const tvseasons = await getListTVSeasonHandler(req.body);
        return res.status(200).send(new BaseResponse<TVSeason[]>(tvseasons, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/GetTVSeasonById/:TVSeasonId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async GetTVSeasonById(req: Request, res: Response, next: NextFunction) {
        try {
            const { TVSeasonId } = req.params;
            const TVSeason = await getTVSeasonByIdHandler(TVSeasonId);
            return res.status(200).send(new BaseResponse<TVSeason>(TVSeason, "Get Success", true))
        }
        catch (error) {
            console.log(error)
        }

    }

    @Router({
        path: `/${baseUrl}/CreateTVSeason`,
        method: 'post',
        middlewares: [extractJWT, validationMiddleware(TVSeasonCreate), upload.single("TVPoster")]
    })
    private async CreateTVSeason(req: Request, res: Response, next: NextFunction) {
        const response = await createTVSeasonHandler(req.body, req.file);
        if (!response) {
            return next(new HttpException(400, response.msgString))
        }
        else {
            return res.status(201).send({
                isSuccess: response.isSuccess,
                message: response.msgString
            })
        }
    }

    @Router({
        path: `/${baseUrl}/UpdateTVSeason/:TVSeasonId`,
        method: 'put',
        middlewares: [extractJWT, validationMiddleware(TVSeasonUpdate), upload.single("TVPoster")]
    })
    private async UpdateTVSeason(req: Request, res: Response, next: NextFunction) {
        const { TVSeasonId } = req.params
        const Movie = await updateTVSeasonHandler(TVSeasonId, req.body, req.file)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Update Success"
        })
    }

    @Router({
        path: `/${baseUrl}/DeleteTVSeason/:TVSeasonId`,
        method: 'delete',
        middlewares: [extractJWT]
    })
    private async DeleteMovie(req: Request, res: Response, next: NextFunction) {
        const { TVSeasonId } = req.params
        await deleteTVSeasonHandler(TVSeasonId)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }

}