import { createUser, deleteUser, getAllUser, getUserById, updateUser } from "../services/user.service";
import { NextFunction, Request, Response } from 'express'
import signJWT from "../functions/signJWT";
import { BadRequest, BaseResponse } from '../../common/base.response'
import { UserDocument } from "../models/user.model";
import { catchAsync } from "../../common/catchAsync";

const getUserListHandler = async (req: Request, res: Response, next: NextFunction) => {

    const users = await getAllUser(req.body.abc);
    return res.send(new BaseResponse<UserDocument[]>(users, "Get Success", true))
    
}

const getUserByIdHandler = async (req: Request, res: Response) => {
    const user = await getUserById(req.body);
    return res.send(new BaseResponse<UserDocument>(user, "Get Success", true))


}

const createUserHandler = async (req: Request, res: Response) => {
    const user = await createUser(req.body);
    return res.send(new BaseResponse<UserDocument>(user, "Get Success", true))

}

const updateUserHandler = async (req: Request, res: Response) => {
    const user = await updateUser(req.body)
    return res.send({
        isSuccess: true,
        msgString: "Update Success"
    })
}

const deleteUserHandler = async (req: Request, res: Response) => {
    await deleteUser(req.body)
    return res.send({
        isSuccess: true,
        msgString: "Delete Success"
    })

}

export {
    getUserListHandler,
    createUserHandler,
    getUserByIdHandler,
    updateUserHandler,
    deleteUserHandler
}