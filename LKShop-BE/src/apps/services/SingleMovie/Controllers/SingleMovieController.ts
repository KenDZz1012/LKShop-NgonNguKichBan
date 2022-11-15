import { Request, Response, NextFunction } from "express";
import { BadRequest, BaseResponse } from '../../../../common/base.response'
import SingleMovie from "../DTO/SingleMovie";
import Router from '../../../../decorators/routes.decorator';
import extractJWT from "../../../middlewares/extractJWT";
import upload from "../../../middlewares/uploadImage";
import { getAllSingleMovieHandler, getSingleMovieByIdHandler, createSingleMovieHandler, updateSingleMovieHandler, deleteSingleMovieHandler } from '../Repositories/SingleMovieRepository'
import validationMiddleware from "../../../middlewares/validation";
import SingleMovieFilter from "../DTO/SingleMovieFilter";
import SingleMovieCreate from "../DTO/SingleMovieCreate";
import SingleMovieUpdate from "../DTO/SingleMovieUpdate";
import HttpException from "../../../../Exceptions/HttpException";

const baseUrl = `api/v1/SingleMovie`

export class SingleMovieController {

    @Router({
        path: `/${baseUrl}/getListSingleMovie`,
        method: 'get',
        middlewares: [extractJWT, validationMiddleware(SingleMovieFilter)]
    })
    public async GetListSingleMovie(req: Request, res: Response) {
        const movies = await getAllSingleMovieHandler(req.body);
        return res.status(200).send(new BaseResponse<SingleMovie[]>(movies, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/GetSingleMovieById/:SingleMovieId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async GetSingleMovieById(req: Request, res: Response, next: NextFunction) {
        try {
            const { SingleMovieId } = req.params;
            const SingleMovie = await getSingleMovieByIdHandler(SingleMovieId);
            return res.status(200).send(new BaseResponse<SingleMovie>(SingleMovie, "Get Success", true))
        }
        catch (error) {
            console.log(error)
        }

    }

    @Router({
        path: `/${baseUrl}/CreateSingleMovie`,
        method: 'post',
        middlewares: [extractJWT, validationMiddleware(SingleMovieCreate), upload.fields([
            { name: "MoviePoster" },
            { name: "MovieVideo" }
        ])]
    })
    private async CreateSingleMovie(req: Request, res: Response, next: NextFunction) {
        const response = await createSingleMovieHandler(req.body, req.files);
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
        path: `/${baseUrl}/UpdateSingleMovie`,
        method: 'put',
        middlewares: [extractJWT, validationMiddleware(SingleMovieUpdate), upload.fields([
            { name: "MoviePoster" },
            { name: "MovieVideo" }
        ])]
    })
    private async UpdateSingleMovie(req: Request, res: Response, next: NextFunction) {
        const Movie = await updateSingleMovieHandler(req.body, req.files)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Update Success"
        })
    }

    @Router({
        path: `/${baseUrl}/DeleteSingleMovie/:SingleMovieId`,
        method: 'put',
        middlewares: [extractJWT]
    })
    private async DeleteMovie(req: Request, res: Response, next: NextFunction) {
        const { SingleMovieId } = req.params
        await deleteSingleMovieHandler(SingleMovieId)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }

}