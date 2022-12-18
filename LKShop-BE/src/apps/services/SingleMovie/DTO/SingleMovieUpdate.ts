import { IsNumber, IsOptional, IsString, IsBoolean } from "class-validator"

export default class SingleMovieCreate {
    @IsString()
    @IsOptional()
    public Poster: string

    @IsString()
    @IsOptional()
    public Description: string

    @IsString()
    @IsOptional()
    public RunTime: string

    @IsNumber()
    @IsOptional()
    public Rating: number

    @IsNumber()
    @IsOptional()
    public RateCount: number

    @IsNumber()
    @IsOptional()
    public ViewCount: number

    @IsNumber()
    @IsOptional()
    public YearProduce: number

    @IsString()
    @IsOptional()
    public Trailer: string

    @IsString()
    @IsOptional()
    public Video: string

    @IsString()
    @IsOptional()
    public VideoUrl: string

    @IsBoolean()
    @IsOptional()
    public IsTrending: boolean

    @IsString()
    @IsOptional()
    public Status: string

    @IsString()
    @IsOptional()
    public Movie: string
}