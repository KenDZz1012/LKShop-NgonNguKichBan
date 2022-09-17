import { createUser, deleteUser, getAllUser, getUserById, updateUser } from "../services/user.service";
import { Request, Response } from 'express'
import signJWT from "../functions/signJWT";
const getUserListHandler = async (req: Request, res: Response) => {
    try {
        const users = await getAllUser(req.body);
        return res.send({
            isSuccess: true,
            msgString: "Get Success",
            data: users
        })
    } catch (e) {
        return res.status(409);
    }
}

const getUserByIdHandler = async (req: Request, res: Response) => {
    try {
        const user = await getUserById(req.body);
        return res.send({
            isSuccess: true,
            msgString: "Get Success",
            data: user
        })
    } catch (e) {
        return res.status(409);
    }
}

const createUserHandler = async (req: Request, res: Response) => {
    try {
        await createUser(req.body);
        return res.send({
            isSuccess: true,
            msgString: "Create Success"
        })
    }
    catch (e) {
        return res.status(409);
    }
}

const updateUserHandler = async (req: Request, res: Response) => {
    try {
        await updateUser(req.body)
        return res.send({
            isSuccess: true,
            msgString: "Update Success"
        })
    } catch (e) {
        return res.status(409);
    }
}

const deleteUserHandler = async (req: Request, res: Response) => {
    try {
        await deleteUser(req.body)
        return res.send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    } catch (e) {
        return res.status(409);
    }
}

export {
    getUserListHandler,
    createUserHandler,
    getUserByIdHandler,
    updateUserHandler,
    deleteUserHandler
}