import { IsString,IsEmail, IsDate, IsBoolean, IsOptional } from "class-validator"
export default class UserUpdate  {

    @IsString()
    public Id: string

    @IsOptional()
    @IsString()
    public UserName: string

    @IsOptional()
    @IsString()
    public Password: string

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

    @IsBoolean()
    @IsOptional()
    public Status: boolean
}
