import { Request, Response, NextFunction } from "express";
import signJWT from "../../../functions/signJWT";
import log from "../../../logger";
import { ClientLoginHandler } from "../Repositories/ClientAuthenticationRepository";
import Router from '../../../../decorators/routes.decorator';
import { createClientHandler } from "../../Client/Repositories/ClientRepository";
import validationMiddleware from "../../../middlewares/validation";
import ClientLogin from "../DTO/ClientLogin";
import HttpException from "../../../../Exceptions/HttpException";

const baseUrl = "api/v1/Authentication/Client"

export class ClientAuthenticationController {
    @Router({
        path: `/${baseUrl}/Login`,
        method: 'post',
        middlewares: [validationMiddleware(ClientLogin)]
    })
    public async ClientLogin(req: Request, res: Response, next: NextFunction) {
        const clientLogin = await ClientLoginHandler(req.body)
        if (clientLogin.isSucces) {
            signJWT(clientLogin.data, (_error, token) => {
                if (_error) {
                    log.error("Unable to sign Token", _error)
                    return res.status(401).json({
                        message: "Unauthorized",
                        error: _error
                    })
                }
                else if (token) {
                    return res.send({
                        ...clientLogin,
                        token,
                    })
                }
            })
        }
        else {
            next(new HttpException(400, clientLogin.msgString))
        }
    }

    @Router({
        path: `/${baseUrl}/Register`,
        method: 'post',
    })
    private async UserRegister(req: Request, res: Response, next: NextFunction) {
        const response = await createClientHandler(req.body)
        if (!response.isSuccess) {
            next(new HttpException(400, response.msgString))
        }
        return res.send({
            isSuccess: response.isSuccess,
            msgString: "Register Success"
        })
    }

}