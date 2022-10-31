import { getListPerson, getPersonById, createPerson, updatePerson, deletePerson } from "../services/Person.service";
import { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../common/base.response'
import PersonModel from "../DTO/Person.dto";
import Router from '../../decorators/routes.decorator';
import extractJWT from "../middlewares/extractJWT";

const baseUrl = "api/v1/Person"

export class PersonController {
    @Router({
        path: `/${baseUrl}/GetAllPerson`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getListPersonHandler(req: Request, res: Response, next: NextFunction) {
        const persons = await getListPerson(req.body);
        return res.status(200).send(new BaseResponse<PersonModel[]>(persons, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/GetPersonById/:PersonId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getPersonByIdHandler(req: Request, res: Response) {
        const { PersonId } = req.params;
        const person = await getPersonById(PersonId);
        return res.status(200).send(new BaseResponse<PersonModel>(person, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/createPerson`,
        method: 'post',
        middlewares: [extractJWT]
    })
    private async createPersonHandler(req: Request, res: Response) {
        const person = await createPerson(req.body);
        return res.status(200).send(new BaseResponse<PersonModel>(person, "Create Success", true))
    }

    @Router({
        path: `/${baseUrl}/updatePerson`,
        method: 'put',
        middlewares: [extractJWT]
    })
    private async updatePersonHandler(req: Request, res: Response) {
        const person = await updatePerson(req.body)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Update Success"
        })
    }

    @Router({
        path: `/${baseUrl}/deletePerson/:PersonId`,
        method: 'delete',
        middlewares: [extractJWT]
    })
    private async deletePersonHandler(req: Request, res: Response) {
        const { PersonId } = req.params
        await deletePerson(PersonId)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }
}
