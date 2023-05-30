import { SignupDTO } from 'src/users/dtos';
import { UsersService } from 'src/users/services/users/users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(): Promise<import("../../../typeorm/user.entity").User[]>;
    findUsersById(id: number): Promise<import("../../../typeorm/user.entity").User>;
    createUsers(signupDTO: SignupDTO): Promise<import("../../../typeorm/user.entity").User>;
}
