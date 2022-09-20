import { Express, Request, Response } from "express"
import { loginHandler } from "../apps/controllers/Login/admin.login.controller"
import { createUserHandler, getUserListHandler, getUserByIdHandler, updateUserHandler, deleteUserHandler, changePasswordUserHandler } from "../apps/controllers/user.controller"
import extractJWT from "../apps/middlewares/extractJWT"
import { catchAsync } from "../common/catchAsync"
export default function (app: Express) {

    // User
    app.get("/api/getalluser", extractJWT, catchAsync(getUserListHandler))

    app.get("/api/getuserbyid/User=:UserId", extractJWT, catchAsync(getUserByIdHandler))

    app.post("/api/createuser", extractJWT, catchAsync(createUserHandler))

    app.put("/api/updateUser", extractJWT, catchAsync(updateUserHandler))

    app.delete("/api/deleteUser/:UserId", extractJWT, catchAsync(deleteUserHandler))

    app.put("/api/changepassworuser", extractJWT, catchAsync(changePasswordUserHandler))

}