import { IsBoolean, IsOptional, IsString } from "class-validator"

export default class CategoryFilter {

    @IsString()
    @IsOptional()
    CategoryName: string

    @IsBoolean()
    @IsOptional()
    IsOnMenu: Boolean
}
