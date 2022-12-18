import { IsString, IsEmail, IsDate, IsBoolean, IsOptional, IsDateString } from "class-validator"
export default class UserCreate {
    @IsString()
    public UserName: string

    @IsString()
    public Password: string

    @IsString()
    @IsOptional()
    public Sex: string

    @IsString()
    @IsOptional()
    public Dob: Date

    @IsEmail()
    @IsOptional()
    public Email: string

    @IsString()
    @IsOptional()
    public FullName: string

    @IsBoolean()
    @IsOptional()
    public Status: boolean
}
