import { IsString } from 'class-validator'
import { makeValidateBody } from 'express-class-validator'

export default class UserLogin {
    @IsString()
    public UserName: string

    @IsString()
    public Password: string
}