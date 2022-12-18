import { checkPasswordUserHandler, createUserHandler, deleteUserHandler, getAllUserHandler, getUserByIdHandler, updateUserHandler } from "../Repositories/UserRepository";
import { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../../../common/Base.response'
import User from "../DTO/User";
import bcrypt from 'bcrypt'
import Router from '../../../../decorators/routes.decorator';
import extractJWT from "../../../middlewares/extractJWT";
import validationMiddleware from "../../../middlewares/validation";
import UserFilter from "../DTO/UserFilter";
import UserCreate from "../DTO/UserCreate";
import UserUpdate from "../DTO/UserUpdate";
import HttpException from "../../../../Exceptions/HttpException";

const baseUrl = "api/v1/User"

export class UserController {
    @Router({
        path: `/${baseUrl}/GetAllUser`,
        method: 'get',
        middlewares: [extractJWT, validationMiddleware(UserFilter)]
    })
    private async getUserList(req: Request, res: Response) {
        const users = await getAllUserHandler(req.body);
        return res.status(200).send(new BaseResponse<User[]>(users, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/GetUserById/:UserId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getUserById(req: Request, res: Response) {
        const { UserId } = req.params;
        const user = await getUserByIdHandler(UserId);
        return res.status(200).send(new BaseResponse<User>(user, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/createUser`,
        method: 'post',
        middlewares: [extractJWT, validationMiddleware(UserCreate)]
    })
    private async createUser(req: Request, res: Response, next: NextFunction) {
        const response = await createUserHandler(req.body);
        if (!response.isSuccess) {
            next(new HttpException(400, response.msgString))
        }
        else {
            return res.status(201).send({
                isSuccess: response.isSuccess,
                msgString: response.msgString
            })
        }

    }

    @Router({
        path: `/${baseUrl}/updateUser/:UserId`,
        method: 'put',
        middlewares: [extractJWT, validationMiddleware(UserUpdate)]
    })
    private async updateUser(req: Request, res: Response) {
        const { UserId } = req.params
        const user = await updateUserHandler(UserId, req.body)
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
    private async deleteUser(req: Request, res: Response) {
        const { UserId } = req.params
        await deleteUserHandler(UserId)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }

    @Router({
        path: `/${baseUrl}/ChangePassword/:UserId`,
        method: 'put',
        middlewares: [extractJWT]
    })
    private async changePasswordUser(req: Request, res: Response) {
        const { UserId } = req.params
        const { Password, NewPassword } = req.body
        const response = await checkPasswordUserHandler(UserId, Password)
        const UserUpdate = {
            ...req.body,
            Password: NewPassword,
        }
        if (response.isSucces == true) {
            await updateUserHandler(UserId, UserUpdate)
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