import { IsString, IsEmail, IsDate, IsBoolean, IsOptional,IsDateString, IsEmpty } from "class-validator"
export default class UserUpdate {

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
    @IsString()
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
