import { getListPerson, getPersonById, createPerson, updatePerson, deletePerson } from "../services/Person.service";
import { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../common/base.response'
import { PersonDocument } from "../models/Person.model";

const getListPersonHandler = async (req: Request, res: Response, next: NextFunction) => {
    const persons = await getListPerson(req.body);
    return res.send(new BaseResponse<PersonDocument[]>(persons, "Get Success", true))
}

const getPersonByIdHandler = async (req: Request, res: Response) => {
    const { PersonId } = req.params;
    const person = await getPersonById(PersonId);
    return res.send(new BaseResponse<PersonDocument>(person, "Get Success", true))
}

const createPersonHandler = async (req: Request, res: Response) => {
    const person = await createPerson(req.body);
    return res.send(new BaseResponse<PersonDocument>(person, "Create Success", true))
}

const updatePersonHandler = async (req: Request, res: Response) => {
    const person = await updatePerson(req.body)
    return res.send({
        isSuccess: true,
        msgString: "Update Success"
    })
}

const deletePersonHandler = async (req: Request, res: Response) => {
    const { PersonId } = req.params
    await deletePerson(PersonId)
    return res.send({
        isSuccess: true,
        msgString: "Delete Success"
    })
}
export {
    getListPersonHandler,
    createPersonHandler,
    updatePersonHandler,
    deletePersonHandler,
    getPersonByIdHandler
}