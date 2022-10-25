export default class ClientModel {
    public Id: string
    public UserName: string
    public Password: string
    public Email: string
    public Avatar: string
    public IsPayment: Boolean
    public Quality: string
    public LastWatch: Array<string>
}

export class ClientFilterModel extends ClientModel { }