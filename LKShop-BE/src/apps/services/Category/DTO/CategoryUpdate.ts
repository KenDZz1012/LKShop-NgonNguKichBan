import { IsBoolean, IsOptional, IsString } from "class-validator"

export default class CategoryUpdate {

    @IsOptional()
    @IsString()
    CategoryName: string

    @IsOptional()
    @IsBoolean()
    IsOnMenu: Boolean
}
