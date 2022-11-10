import { IsEmail, IsString } from "class-validator"

export default class ClientCreate {
    @IsString()
    public UserName: string
    
    @IsString()
    public Password: string

    @IsEmail()
    public Email: string
}
