import { IsBoolean, IsOptional, IsString } from "class-validator"

export default class CategoryCreate {
    @IsString()
    CategoryName: string

    @IsOptional()
    @IsBoolean()
    IsOnMenu: Boolean
}
