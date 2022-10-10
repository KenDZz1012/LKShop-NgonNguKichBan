import { Express, Request, Response } from "express"
import { createUserHandler, getUserListHandler, getUserByIdHandler, updateUserHandler, deleteUserHandler, changePasswordUserHandler } from "../apps/controllers/user.controller"
import { getListCategoryHandler, getCategoryByIdHandler, createCategoryHandler, updateCategoryHandler, deleteCategoryHandler } from '../apps/controllers/category.controller'
import { getListPersonHandler, getPersonByIdHandler, createPersonHandler, updatePersonHandler, deletePersonHandler } from '../apps/controllers/person.controller'

import extractJWT from "../apps/middlewares/extractJWT"
import { catchAsync } from "../common/catchAsync"
export default function (app: Express) {

    // User
    app.get("/api/getAllUser", extractJWT, catchAsync(getUserListHandler))

    app.get("/api/getUserById/User=:UserId", extractJWT, catchAsync(getUserByIdHandler))

    app.post("/api/createUser", extractJWT, catchAsync(createUserHandler))

    app.put("/api/updateUser", extractJWT, catchAsync(updateUserHandler))

    app.delete("/api/deleteUser/:UserId", extractJWT, catchAsync(deleteUserHandler))

    app.put("/api/changePassworUser", extractJWT, catchAsync(changePasswordUserHandler))


    // Category
    app.get("/api/getAllCategory", extractJWT, catchAsync(getListCategoryHandler))

    app.get("/api/getCategoryById/Category=:CategoryId", extractJWT, catchAsync(getCategoryByIdHandler))

    app.post("/api/createCategory", extractJWT, catchAsync(createCategoryHandler))

    app.put("/api/updateCategory", extractJWT, catchAsync(updateCategoryHandler))

    app.delete("/api/deleteCategory/:CategoryId", extractJWT, catchAsync(deleteCategoryHandler))


    // Person
    app.get("/api/getAllPerson", extractJWT, catchAsync(getListPersonHandler))

    app.get("/api/getPersonById/Person=:PersonId", extractJWT, catchAsync(getPersonByIdHandler))

    app.post("/api/createPerson", extractJWT, catchAsync(createPersonHandler))

    app.put("/api/updatePerson", extractJWT, catchAsync(updatePersonHandler))

    app.delete("/api/deletePerson/:PersonId", extractJWT, catchAsync(deletePersonHandler))

}