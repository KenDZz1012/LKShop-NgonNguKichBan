import { IsArray, IsBoolean, IsDate, IsOptional, IsString, IsNumber } from "class-validator"

export default class MovieCreate {

    @IsString()
    public MovieName: string

    @IsArray()
    @IsOptional()
    public Category: Array<string>


    @IsArray()
    @IsOptional()
    public Director: Array<string>

    @IsArray()
    @IsOptional()
    public Actor: Array<string>

    @IsString()
    @IsOptional()
    public Country: string

    @IsDate()
    @IsOptional()
    public CreatedTime: Date
}