import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString } from "class-validator"

export default class TVSeasonFilter {
    @IsNumber()
    @IsOptional()
    public Season: number

    @IsString()
    @IsOptional()
    public Description: string

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
    public Status: string

    @IsBoolean()
    @IsOptional()
    public IsTrending: boolean
}