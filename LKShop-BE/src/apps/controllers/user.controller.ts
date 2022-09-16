import { createUser } from "../services/user.service";
import { Request, Response } from 'express'
export const createUserHandler = async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        return res.send(user.toJSON())
    }
    catch (e) {
        return res.status(409);
    }
}