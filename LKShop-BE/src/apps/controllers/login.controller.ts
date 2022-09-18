import { Request, Response, NextFunction } from "express";
import signJWT from "../functions/signJWT";
import log from "../logger";
import { login } from "../services/login.service";

const loginHandler = async (req: Request, res: Response, next: NextFunction) => {
    const userLogin = await login(req.body)
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
                    message: userLogin.msgString,
                    isSucces: userLogin.isSucces,
                    token,
                    user: userLogin.data.UserName
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

export {
    loginHandler
}