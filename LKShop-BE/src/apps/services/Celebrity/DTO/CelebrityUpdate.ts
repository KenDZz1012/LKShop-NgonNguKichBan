import { IsDate, IsOptional, IsString } from "class-validator"

export default class CelebrityUpdate{
    @IsString()
    @IsOptional()
    FullName: string
 
    @IsString()
    @IsOptional()
    ShortName: string
    
    @IsString()
    @IsOptional()
    Birth: Date

    @IsString()
    @IsOptional()
    Avatar: String

    @IsString()
    @IsOptional()
    Role: String
}
