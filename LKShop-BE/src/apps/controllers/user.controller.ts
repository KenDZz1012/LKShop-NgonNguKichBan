import { checkPasswordUser, createUser, deleteUser, getAllUser, getUserById, updateUser } from "../services/User.service";
import { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../common/base.response'
import { UserDocument } from "../models/user.model";
import { DocumentDefinition } from "mongoose";
import bcrypt from 'bcrypt'
import Router from '../../decorators/routes.decorator';
import extractJWT from "../middlewares/extractJWT";

const baseUrl = "api/v1/User"

export class UserController {
    @Router({
        path: `/${baseUrl}/GetAllUser`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getUserListHandler(req: Request, res: Response) {
        const users = await getAllUser(req.body);
        return res.send(new BaseResponse<UserDocument[]>(users, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/GetUserById/:UserId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getUserByIdHandler(req: Request, res: Response) {
        const { UserId } = req.params;
        const user = await getUserById(UserId);
        return res.send(new BaseResponse<UserDocument>(user, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/createUser`,
        method: 'post',
        middlewares: [extractJWT]
    })
    private async createUserHandler(req: Request, res: Response) {
        const user = await createUser(req.body);
        return res.send(new BaseResponse<UserDocument>(user, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/updateUser`,
        method: 'put',
        middlewares: [extractJWT]
    })
    private async updateUserHandler(req: Request, res: Response) {
        const user = await updateUser(req.body)
        return res.send({
            isSuccess: true,
            msgString: "Update Success"
        })
    }

    @Router({
        path: `/${baseUrl}/deleteUser/:UserId`,
        method: 'delete',
        middlewares: [extractJWT]
    })
    private async deleteUserHandler(req: Request, res: Response) {
        const { UserId } = req.params
        await deleteUser(UserId)
        return res.send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }

    @Router({
        path: `/${baseUrl}/ChangePassword`,
        method: 'put',
        middlewares: [extractJWT]
    })
    private async changePasswordUserHandler(req: Request, res: Response) {
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
}