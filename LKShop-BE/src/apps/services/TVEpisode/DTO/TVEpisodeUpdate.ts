import { IsDate, IsNumber, IsOptional, IsString } from "class-validator"

export default class TVEpisodeUpdate {
    @IsString()
    @IsOptional()
    public Id: string

    @IsString()
    @IsOptional()
    public EpisodeName: string

    @IsNumber()
    @IsOptional()
    public Episode: number

    @IsString()
    @IsOptional()
    public Video: string

    @IsString()
    @IsOptional()
    public RunTime: string

    @IsDate()
    @IsOptional()
    public CreatedTime: Date

    @IsString()
    @IsOptional()
    public TVSeason: string
}

