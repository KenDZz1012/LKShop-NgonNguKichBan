import { Request, Response, NextFunction, response } from "express";
import signJWT from "../../functions/signJWT";
import log from "../../logger";
import { login, loginClient } from "../../services/login.service";
import Router from '../../../decorators/routes.decorator';
import { getListClient, createClient, updateClient, deleteClient, getClientById, changeAvatar, checkPasswordClient } from "../../services/Client.service";
import { ClientLoginController } from "./client.login.controller";

const baseUrl = "api/v1/Client"

export class ClientRegisterController {

    @Router({
        path: `/${baseUrl}/register`,
        method: 'post',
    })
    private async register(req: Request, res: Response, next: NextFunction) {
        const response = await createClient(req.body, req.file)
        return res.send({
            isSuccess: response.isSuccess,
            msgString: response.isSuccess ? "Register Success" : response.msgString
        })


    }
}