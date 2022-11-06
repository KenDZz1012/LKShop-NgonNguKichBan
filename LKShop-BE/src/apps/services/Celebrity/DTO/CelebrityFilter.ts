import { IsOptional, IsString } from "class-validator"

export default class CelebrityFilter{
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
    Role: string
}
