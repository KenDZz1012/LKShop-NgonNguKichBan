import jwt from "jsonwebtoken";
import config from "config"
import log from "../logger";
import { DocumentDefinition } from "mongoose";
import  UserLogin  from "../Services/Authentication/DTO/AdminLogin";

const signJWT = (user: UserLogin, callback: (error: Error | null, token: string | null) => void): void => {
    var timeSinchEpoch = new Date().getTime();
    var expirationTime = timeSinchEpoch + Number(config.get("app.token.SERVER_TOKEN_EXPIRETIME")) * 100000;
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000);

    log.info(`Attempting to sign token for ${user.UserName}`);
    try {
        jwt.sign({
            UserName: user.UserName
        },
            config.get("app.token.SERVER_TOKEN_SECRET"),
            {
                issuer: config.get("app.token.SERVER_TOKEN_ISSUER"),
                algorithm: "HS256",
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                if (error) {
                    callback(error, null)
                }
                else if (token) {
                    callback(null, token)
                }
            })
    } catch (err) {
        throw (err)
    }
}

export default signJWT