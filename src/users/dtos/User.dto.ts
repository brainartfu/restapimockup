import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

class LoginDTO {
    @IsNotEmpty()
    @IsEmail()
    email : string;

    @IsNotEmpty()
    @MinLength(6)
    password : string;
}

class SignupDTO {
    @IsNotEmpty()
    @MinLength(2)
    firstname: string;

    @IsNotEmpty()
    @MinLength(2)
    lastname : string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password : string;
}

export {
    LoginDTO,
    SignupDTO
};