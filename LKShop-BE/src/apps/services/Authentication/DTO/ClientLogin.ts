import { IsEmail, IsString } from 'class-validator'
export default class ClientLogin {
    @IsEmail()
    public Email: string

    @IsString()
    public Password: string
}