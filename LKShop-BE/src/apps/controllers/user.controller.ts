import { checkPasswordUser, createUser, deleteUser, getAllUser, getUserById, updateUser } from "../services/user.service";
import { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../common/base.response'
import { UserDocument } from "../models/user.model";
import { DocumentDefinition } from "mongoose";
import bcrypt from 'bcrypt'

const getUserListHandler = async (req: Request, res: Response, next: NextFunction) => {
    const users = await getAllUser(req.body);
    return res.send(new BaseResponse<UserDocument[]>(users, "Get Success", true))
}

const getUserByIdHandler = async (req: Request, res: Response) => {
    const { UserId } = req.params;
    const user = await getUserById(UserId);
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
    const { UserId } = req.params
    await deleteUser(UserId)
    return res.send({
        isSuccess: true,
        msgString: "Delete Success"
    })
}

const changePasswordUserHandler = async (req: Request, res: Response) => {
    const { Id, Password, NewPassword } = req.body
    const response = await checkPasswordUser(Id, Password)
    const UserUpdate = {
        ...req.body,
        Id: Id,
        Password: NewPassword,
    }
    if (response.isSucces == true) {
        await updateUser(UserUpdate)
        return res.send({
            isSuccess: true,
            msgString: "Update Success"
        })
    }

}
export {
    getUserListHandler,
    createUserHandler,
    getUserByIdHandler,
    updateUserHandler,
    deleteUserHandler,
    changePasswordUserHandler
}