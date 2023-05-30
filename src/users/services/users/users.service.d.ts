import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { SignupDTO } from 'src/users/dtos';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(signupDTO: SignupDTO): Promise<User>;
    getUsers(): Promise<User[]>;
    findUsersById(id: number): Promise<User>;
}
