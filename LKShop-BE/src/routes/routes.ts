import { Express, Request, Response } from "express"
import { loginHandler } from "../apps/controllers/login.controller"
import { createUserHandler, getUserListHandler, getUserByIdHandler, updateUserHandler, deleteUserHandler } from "../apps/controllers/user.controller"
import extractJWT from "../apps/middlewares/extractJWT"
export default function (app: Express) {

    //auth

    app.post('/api/login', loginHandler)



    // User
    app.get("/api/getalluser", getUserListHandler)

    app.get("/api/getuserbyid", getUserByIdHandler)

    app.post("/api/createuser", createUserHandler)

    app.put("/api/updateUser", updateUserHandler)

    app.delete("/api/deleteUser", deleteUserHandler)
}