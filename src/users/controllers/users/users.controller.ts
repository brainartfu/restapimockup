import { 
    Body,
    Controller, 
    Get,
    Param,
    ParseIntPipe, 
    Post,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { LoginDTO, SignupDTO } from 'src/users/dtos';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){

    }
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get('id/:id')
    findUsersById(@Param('id', ParseIntPipe) id: number){
        return this.userService.findUsersById(id);
    }

    @Post('search')
    @UsePipes(ValidationPipe)
    findUser(@Body() loginDTO:LoginDTO):Promise<any>{
        return this.userService.loginUser(loginDTO);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(@Body() signupDTO : SignupDTO ){
        return this.userService.createUser(signupDTO);
    }
}
