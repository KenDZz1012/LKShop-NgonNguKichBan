import { Request, Response, NextFunction } from "express";
import { BadRequest, BaseResponse } from '../../../../common/base.response'
import TVEpisode from "../DTO/TVEpisode";
import Router from '../../../../decorators/routes.decorator';
import extractJWT from "../../../middlewares/extractJWT";
import upload from "../../../middlewares/uploadImage";
import { getAllTVEpisodeHandler, getTVEpisodeByIdHandler, createTVEpisodeHandler, updateTVEpisodeHandler, deleteTVEpisodeHandler } from '../Repositories/TVEpisodeRepository'
import validationMiddleware from "../../../middlewares/validation";
import TVEpisodeFilter from "../DTO/TVEpisodeFilter";
import TVEpisodeCreate from "../DTO/TVEpisodeCreate";
import TVEpisodeUpdate from "../DTO/TVEpisodeUpdate";
import HttpException from "../../../../Exceptions/HttpException";

const baseUrl = `api/v1/TVEpisode`

export class TVEpisodeController {

    @Router({
        path: `/${baseUrl}/getListTVEpisode`,
        method: 'get',
        middlewares: [extractJWT, validationMiddleware(TVEpisodeFilter)]
    })
    public async GetListTVEpisode(req: Request, res: Response) {
        const movies = await getAllTVEpisodeHandler(req.body);
        return res.status(200).send(new BaseResponse<TVEpisode[]>(movies, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/GetTVEpisodeById/:TVEpisodeId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async GetTVEpisodeById(req: Request, res: Response, next: NextFunction) {
        try {
            const { TVEpisodeId } = req.params;
            const TVEpisode = await getTVEpisodeByIdHandler(TVEpisodeId);
            return res.status(200).send(new BaseResponse<TVEpisode>(TVEpisode, "Get Success", true))
        }
        catch (error) {
            console.log(error)
        }

    }

    @Router({
        path: `/${baseUrl}/CreateTVEpisode`,
        method: 'post',
        middlewares: [extractJWT, validationMiddleware(TVEpisodeCreate), upload.single("TVSeriesVideo")]
    })
    private async CreateTVEpisode(req: Request, res: Response, next: NextFunction) {
        const response = await createTVEpisodeHandler(req.body, req.files);
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
        path: `/${baseUrl}/UpdateTVEpisode`,
        method: 'put',
        middlewares: [extractJWT, validationMiddleware(TVEpisodeUpdate), upload.single("TVSeriesVideo")]
    })
    private async UpdateTVEpisode(req: Request, res: Response, next: NextFunction) {
        const Movie = await updateTVEpisodeHandler(req.body, req.files)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Update Success"
        })
    }

    @Router({
        path: `/${baseUrl}/DeleteTVEpisode/:TVEpisodeId`,
        method: 'put',
        middlewares: [extractJWT]
    })
    private async DeleteMovie(req: Request, res: Response, next: NextFunction) {
        const { TVEpisodeId } = req.params
        await deleteTVEpisodeHandler(TVEpisodeId)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }

}