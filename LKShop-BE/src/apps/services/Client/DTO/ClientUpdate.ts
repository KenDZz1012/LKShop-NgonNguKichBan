import { IsArray, IsBoolean, IsEmail, IsOptional, IsString } from "class-validator"

export default class ClientUpdate {
    @IsString()
    public Id: string

    @IsString()
    @IsOptional()
    public UserName: string

    @IsString()
    @IsOptional()
    public Password: string

    @IsEmail()
    @IsOptional()
    public Email: string

    @IsString()
    @IsOptional()
    public Avatar: string

    @IsBoolean()
    @IsOptional()
    public IsPayment: Boolean

    @IsString()
    @IsOptional()
    public Quality: string

    @IsArray()
    @IsOptional()
    public LastWatch: Array<string>

    @IsArray()
    @IsOptional()
    public MovieList: Array<string>
}
