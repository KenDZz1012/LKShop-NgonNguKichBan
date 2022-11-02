import { Request, Response, NextFunction } from "express";
import signJWT from "../../../functions/signJWT";
import log from "../../../logger";
import { UserLoginHandler } from "../Repositories/AdminAuthenticationRepository";
import Router from '../../../../decorators/routes.decorator';

const baseUrl = "api/v1/Authentication/admin"

export class UserAuthenticationController {
    @Router({
        path: `/${baseUrl}/Login`,
        method: 'post',
    })
    private async UserLogin(req: Request, res: Response, next: NextFunction) {
        const userLogin = await UserLoginHandler(req.body)
        if (userLogin.isSucces) {
            signJWT(userLogin.data, (_error, token) => {
                if (_error) {
                    log.error("Unable to sign Token", _error)
                    return res.status(401).json({
                        message: "Unauthorized",
                        error: _error
                    })
                }
                else if (token) {
                    return res.send({
                        ...userLogin,
                        token,
                    })
                }
            })
        }
        else {
            return res.send({
                message: userLogin.msgString,
                isSucces: userLogin.isSucces,
            })
        }
    }

}