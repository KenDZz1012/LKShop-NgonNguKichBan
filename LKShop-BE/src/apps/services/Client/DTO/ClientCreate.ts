import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export default class ClientCreate {
    @IsNotEmpty()
    @IsString()
    public UserName: string

    @IsNotEmpty()
    @IsString()
    public Password: string

    @IsNotEmpty()
    @IsEmail()
    public Email: string

    @IsString()
    @IsOptional()
    public Avatar: string
}
