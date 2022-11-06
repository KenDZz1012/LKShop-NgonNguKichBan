import { IsEmail, IsString } from "class-validator"

export default class ClientCreate {
    @IsString()
    public UserName: string
    
    @IsEmail()
    public Password: string

    @IsEmail()
    public Email: string
}
