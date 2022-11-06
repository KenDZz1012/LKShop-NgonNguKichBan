import { IsBoolean, IsOptional, IsString } from "class-validator"

export default class CategoryUpdate {
    @IsString()
    Id: string

    @IsOptional()
    @IsString()
    CategoryName: string

    @IsOptional()
    @IsBoolean()
    IsOnMenu: Boolean
}
