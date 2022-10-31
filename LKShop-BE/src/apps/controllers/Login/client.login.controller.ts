import { Request, Response, NextFunction } from "express";
import signJWT from "../../functions/signJWT";
import log from "../../logger";
import { login, loginClient } from "../../services/login.service";
import Router from '../../../decorators/routes.decorator';

const baseUrl = "api/v1/Authentication/Client"

export class ClientLoginController {
    @Router({
        path: `/${baseUrl}/Login`,
        method: 'post',
    })
    public async loginHandler(req: Request, res: Response, next: NextFunction) {
        const clientLogin = await loginClient(req.body)
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
            return res.send({
                message: clientLogin.msgString,
                isSucces: clientLogin.isSucces,
            })
        }
    }

}