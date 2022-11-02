import { getListCelebrity, getCelebrityById, createCelebrity, updateCelebrity, deleteCelebrity } from "../Repositories/CelebrityRepository";
import { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../../../common/base.response'
import Celebrity from "../DTO/Celebrity";
import Router from '../../../../decorators/routes.decorator';
import extractJWT from "../../../middlewares/extractJWT";

const baseUrl = "api/v1/Celebrity"

export class CeleController {
    @Router({
        path: `/${baseUrl}/GetAllCelebrity`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getListCelebrityHandler(req: Request, res: Response, next: NextFunction) {
        const Celebritys = await getListCelebrity(req.body);
        return res.status(200).send(new BaseResponse<Celebrity[]>(Celebritys, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/GetCelebrityById/:CelebrityId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getCelebrityByIdHandler(req: Request, res: Response) {
        const { CelebrityId } = req.params;
        const Celebrity = await getCelebrityById(CelebrityId);
        return res.status(200).send(new BaseResponse<Celebrity>(Celebrity, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/createCelebrity`,
        method: 'post',
        middlewares: [extractJWT]
    })
    private async createCelebrityHandler(req: Request, res: Response) {
        const Celebrity = await createCelebrity(req.body);
        return res.status(200).send(new BaseResponse<Celebrity>(Celebrity, "Create Success", true))
    }

    @Router({
        path: `/${baseUrl}/updateCelebrity`,
        method: 'put',
        middlewares: [extractJWT]
    })
    private async updateCelebrityHandler(req: Request, res: Response) {
        const Celebrity = await updateCelebrity(req.body)
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
    private async deleteCelebrityHandler(req: Request, res: Response) {
        const { CelebrityId } = req.params
        await deleteCelebrity(CelebrityId)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }
}
