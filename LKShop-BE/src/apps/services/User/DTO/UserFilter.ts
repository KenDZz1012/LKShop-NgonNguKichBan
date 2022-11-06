import { IsString,IsEmail, IsDate, IsBoolean, IsObject, IsOptional } from "class-validator"
export default class UserFilter  {
    @IsOptional()
    @IsString()
    public UserName: string

    @IsOptional()
    @IsString()
    public Sex: string

    @IsOptional()
    @IsDate()
    public Dob: Date

    @IsOptional()
    @IsEmail()
    public Email: string

    @IsOptional()
    @IsString()
    public FullName: string

    @IsOptional()
    @IsBoolean()
    public Status: boolean
}
