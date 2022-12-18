import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export default class BundleCreate {
    @IsString()
    @IsNotEmpty()
    public BundleName: string

    @IsString()
    @IsOptional()
    public Description: string

    @IsNumber()
    @IsOptional()
    public Price: number
}