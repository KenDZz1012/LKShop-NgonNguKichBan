import { getListClient, createClient, updateClient, deleteClient, getClientById } from "../services/Client.service";
import { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../common/base.response'
import { ClientDocument } from "../models/client.model";
import Router from '../../decorators/routes.decorator';
import extractJWT from "../middlewares/extractJWT";
import upload from "../middlewares/uploadImage";

const baseUrl = "api/v1/Client"

export class ClientController {
    @Router({
        path: `/${baseUrl}/GetAllClient`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getListClientHandler(req: Request, res: Response, next: NextFunction) {
        const categories = await getListClient(req.body);
        return res.send(new BaseResponse<ClientDocument[]>(categories, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/GetClientById/:ClientId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getClientByIdHandler(req: Request, res: Response) {
        const { ClientId } = req.params;
        const Client = await getClientById(ClientId);
        return res.send(new BaseResponse<ClientDocument>(Client, "Get Success", true))
    }

    @Router({
        path: `/${baseUrl}/createClient`,
        method: 'post',
        middlewares: [extractJWT, upload.single("Avatar")]
    })
    private async createClientHandler(req: Request, res: Response) {
        const Client = await createClient(req.body, req.file);
        return res.send(new BaseResponse<ClientDocument>(Client, "Create Success", true))
    }

    @Router({
        path: `/${baseUrl}/updateClient`,
        method: 'post',
        middlewares: [extractJWT]
    })
    private async updateClientHandler(req: Request, res: Response) {
        const Client = await updateClient(req.body)
        return res.send({
            isSuccess: true,
            msgString: "Update Success"
        })
    }

    @Router({
        path: `/${baseUrl}/deleteClient`,
        method: 'post',
        middlewares: [extractJWT]
    })
    private async deleteClientHandler(req: Request, res: Response) {
        const { ClientId } = req.params
        await deleteClient(ClientId)
        return res.send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }
}
