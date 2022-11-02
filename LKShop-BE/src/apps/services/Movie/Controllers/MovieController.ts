import { Request, Response, NextFunction } from "express";
import { BadRequest, BaseResponse } from '../../../../common/base.response'
import Movie from "../DTO/Movie";
import Router from '../../../../decorators/routes.decorator';
import extractJWT from "../../../middlewares/extractJWT";
import upload from "../../../middlewares/uploadImage";
import { getAllMovie, getMovieById, createMovie, updateMovie, deleteMovie } from '../Repositories/MovieRepository'
import extractJWTClient from "../../../middlewares/extractJWTClient";
const baseUrl = "api/v1/Movie"

export class MovieController {
    @Router({
        path: `/${baseUrl}/GetAllMovie`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async GetAllMovieHandler(req: Request, res: Response, next: NextFunction) {
        const movies = await getAllMovie(req.body);
        return res.status(200).send(new BaseResponse<Movie[]>(movies, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/GetMovieById/:MovieId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async GetAllMovieByIdHandler(req: Request, res: Response, next: NextFunction) {
        const { MovieId } = req.params;
        const Movie = await getMovieById(MovieId);
        return res.status(200).send(new BaseResponse<Movie>(Movie, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/CreateMovie`,
        method: 'post',
        middlewares: [extractJWT || extractJWTClient, upload.fields([
            { name: 'MovieVideo' },
            { name: 'Poster' }
        ])]
    })
    private async CreateMovieHandler(req: Request, res: Response, next: NextFunction) {
        const Movie = await createMovie(req.body, req.files);
        return res.status(200).send(new BaseResponse<Movie>(Movie, "Create Success", true))
    }

    @Router({
        path: `/${baseUrl}/UpdateMovie`,
        method: 'put',
        middlewares: [extractJWT]
    })
    private async UpdateMovieHandler(req: Request, res: Response, next: NextFunction) {
        const Movie = await updateMovie(req.body)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Update Success"
        })
    }

    @Router({
        path: `/${baseUrl}/DeleteMovie/:MovieId`,
        method: 'put',
        middlewares: [extractJWT]
    })
    private async DeleteMovieHandler(req: Request, res: Response, next: NextFunction) {
        const { MovieId } = req.params
        await deleteMovie(MovieId)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }
}