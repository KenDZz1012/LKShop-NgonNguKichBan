import { IsBoolean, IsString } from "class-validator"

export default class CategoryCreate {
    @IsString()
    CategoryName: string

    @IsBoolean()
    IsOnMenu: Boolean
}
