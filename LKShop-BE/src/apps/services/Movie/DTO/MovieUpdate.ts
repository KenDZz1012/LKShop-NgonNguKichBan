import { IsArray, IsBoolean, IsDate, IsOptional, IsString, IsNumber } from "class-validator"

export default class MovieUpdate {

    @IsString()
    public Id: string

    @IsString()
    @IsOptional()
    public MovieName: string

    @IsString()
    @IsOptional()
    public Poster: string

    @IsNumber()
    @IsOptional()
    public Rating: Number

    @IsNumber()
    @IsOptional()
    public RateCount: Number

    @IsArray()
    @IsOptional()
    public Category: Array<string>

    @IsString()
    @IsOptional()
    public Trailer: string

    @IsArray()
    @IsOptional()
    public Director: Array<string>

    @IsArray()
    @IsOptional()
    public Actor: Array<string>

    @IsString()
    @IsOptional()
    public Information: string

    @IsNumber()
    @IsOptional()
    public ReleaseYear: Number

    @IsDate()
    @IsOptional()
    public InTime: Date

    @IsString()
    @IsOptional()
    public status: string

    @IsBoolean()
    @IsOptional()
    public IsTrending: Boolean

    @IsString()
    @IsOptional()
    public RunTime: string

    @IsArray()
    @IsOptional()
    public RelatedMovie: Array<string>

    @IsString()
    @IsOptional()
    public Country: string

    @IsString()
    @IsOptional()
    public Video: string

    @IsString()
    @IsOptional()
    public CreatedBy: string

    @IsDate()
    @IsOptional()
    public CreatedTime: Date
}