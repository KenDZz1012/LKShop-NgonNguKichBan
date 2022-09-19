import { Express, Request, Response } from "express"
import { loginHandler } from "../apps/controllers/Login/admin.login.controller"
import { createUserHandler, getUserListHandler, getUserByIdHandler, updateUserHandler, deleteUserHandler } from "../apps/controllers/user.controller"
import extractJWT from "../apps/middlewares/extractJWT"
import { catchAsync } from "../common/catchAsync"
export default function (app: Express) {
    app.post('/api/login', catchAsync(loginHandler))

}