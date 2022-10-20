export default class UserModel {
    public Id: string
    public UserName: string
    public Password: string
    public Sex: string
    public Dob: Date
    public Email: string
    public FullName: string
    public Status: boolean
}


export class UserFilterModel extends UserModel{}

export class UserLoginModel {
    public UserName: string
    public Password: string
}