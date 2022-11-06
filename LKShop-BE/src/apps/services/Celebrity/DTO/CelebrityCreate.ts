import { IsDate, IsOptional, IsString } from "class-validator"

export default class CelebrityCreate{
    @IsString()
    FullName: string
 
    @IsString()
    @IsOptional()
    ShortName: string
    
    @IsDate()
    @IsOptional()
    Birth: Date

    @IsString()
    @IsOptional()
    Avatar: String

    @IsString()
    @IsOptional()
    Role: String
}
