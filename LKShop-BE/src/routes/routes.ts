import { Express, Request, Response } from "express"
import { createUserHandler } from "../apps/controllers/user.controller"
export default function (app: Express){
    app.post("/api/createuser",createUserHandler )
}