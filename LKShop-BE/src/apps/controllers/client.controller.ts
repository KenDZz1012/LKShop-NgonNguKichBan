import { getListClient, createClient, updateClient, deleteClient, getClientById, changeAvatar, checkPasswordClient } from "../services/Client.service";
import e, { NextFunction, Request, Response } from 'express'
import { BadRequest, BaseResponse } from '../../common/base.response'
import Router from '../../decorators/routes.decorator';
import extractJWT from "../middlewares/extractJWT";
import upload from "../middlewares/uploadImage";
import ClientModel from "../DTO/Client.dto";
const baseUrl = "api/v1/Client"

export class ClientController {


    @Router({
        path: `/${baseUrl}/GetAllClient`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getListClientHandler(req: Request, res: Response, next: NextFunction) {
        const clients = await getListClient(req.body);
        return res.status(200).send(new BaseResponse<ClientModel[]>(clients, "Get Success", true))
    }



    @Router({
        path: `/${baseUrl}/GetClientById/:ClientId`,
        method: 'get',
        middlewares: [extractJWT]
    })
    private async getClientByIdHandler(req: Request, res: Response) {
        const { ClientId } = req.params;
        const Client = await getClientById(ClientId);
        return res.status(200).send(new BaseResponse<ClientModel>(Client, "Get Success", true))
    }



    @Router({
        path: `/${baseUrl}/createClient`,
        method: 'post',
        middlewares: [extractJWT, upload.single("Avatar")]
    })
    private async createClientHandler(req: Request, res: Response) {
        const Client = await createClient(req.body, req.file);
        return res.status(200).send({
            isSuccess: Client.isSuccess,
            msgString: Client.msgString
        })
    }



    @Router({
        path: `/${baseUrl}/updateClient`,
        method: 'put',
        middlewares: [extractJWT]
    })
    private async updateClientHandler(req: Request, res: Response) {
        const Client = await updateClient(req.body)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Update Success"
        })
    }



    @Router({
        path: `/${baseUrl}/deleteClient`,
        method: 'delete',
        middlewares: [extractJWT]
    })
    private async deleteClientHandler(req: Request, res: Response) {
        const { ClientId } = req.params
        await deleteClient(ClientId)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Delete Success"
        })
    }



    @Router({
        path: `/${baseUrl}/changeAvatar`,
        method: 'put',
        middlewares: [extractJWT, upload.single("Avatar")]
    })
    private async changeAvatarHandler(req: Request, res: Response) {
        console.log(req.file)
        if (!req.file) {
            return res.status(200).send({
                isSuccess: false,
                msgString: "Please upload your file"
            })
        }
        await changeAvatar(req.body, req.file)
        return res.status(200).send({
            isSuccess: true,
            msgString: "Change Avatar success"
        })
    }

    @Router({
        path: `/${baseUrl}/ChangePassword`,
        method: 'put',
        middlewares: [extractJWT]
    })
    private async changePasswordClientHandler(req: Request, res: Response) {
        const { Id, Password, NewPassword } = req.body
        const response = await checkPasswordClient(Id, Password)
        const ClientUpdate = {
            ...req.body,
            Id: Id,
            Password: NewPassword,
        }
        if (response.isSucces == true) {
            await updateClient(ClientUpdate)
            return res.status(200).send({
                isSuccess: true,
                msgString: "Change Password Success"
            })
        }
        else {
            return res.status(200).send({
                isSuccess: response.isSucces,
                msgString: response.msgString
            })
        }

    }
}
