import { IsBoolean, IsEmail, IsOptional, IsString } from "class-validator"

export default class ClientFilter {
    @IsString()
    @IsOptional()
    public UserName: string

    @IsEmail()
    @IsOptional()
    public Email: string

    @IsBoolean()
    @IsOptional()
    public IsPayment: Boolean

    @IsString()
    @IsOptional()
    public Bundle: string

}
