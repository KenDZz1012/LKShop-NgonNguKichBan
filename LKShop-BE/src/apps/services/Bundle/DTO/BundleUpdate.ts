import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export default class BundleUpdate {
    @IsString()
    @IsNotEmpty()
    public Id: string

    @IsString()
    @IsOptional()
    public BundleName: string

    @IsArray()
    @IsOptional()
    public Description: Array<string>

    @IsNumber()
    @IsOptional()
    public Price: number
}