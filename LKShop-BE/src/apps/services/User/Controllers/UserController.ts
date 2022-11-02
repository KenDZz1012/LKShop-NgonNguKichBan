import { checkPasswordUser, createUser, deleteUser, getAllUser, getUserById, updateUser } from "../Repositories/UserRepository";
import { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../../../common/Base.response'
import User from "../DTO/User";
import bcrypt from 'bcrypt'
import Router from '../../../../decorators/routes.decorator';
import extractJWT from "../../../middlewares/extractJWT";

const baseUrl = "api/v1/User"

export class UserController {
    @Router({
        path: `/${baseUrl}/GetAllUser`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getUserListHandler(req: Request, res: Response) {
        const users = await getAllUser(req.body);
        return res.status(200).send(new BaseResponse<User[]>(users, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/GetUserById/:UserId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getUserByIdHandler(req: Request, res: Response) {
        const { UserId } = req.params;
        const user = await getUserById(UserId);
        return res.status(200).send(new BaseResponse<User>(user, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/createUser`,
        method: 'post',
        middlewares: [extractJWT]
    })
    private async createUserHandler(req: Request, res: Response) {
        const user = await createUser(req.body);
        return res.status(200).send(new BaseResponse<User>(user, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/updateUser`,
        method: 'put',
        middlewares: [extractJWT]
    })
    private async updateUserHandler(req: Request, res: Response) {
        const user = await updateUser(req.body)
        return res.status(200).send({
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
        return res.status(200).send({
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
            return res.status(200).send({
                isSuccess: true,
                msgString: "Update Success"
            })
        }
        else {
            return res.send({
                isSuccess: response.isSucces,
                msgString: response.msgString
            })
        }
    }
}