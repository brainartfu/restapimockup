import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { SignupDTO } from 'src/users/dtos';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository:Repository<User>
    ){}

    createUser(signupDTO: SignupDTO){
        const newUser = this.userRepository.create(signupDTO);
        return this.userRepository.save(newUser);
    }

    getUsers() {
        return this.userRepository.find();
    }

    findUsersById(id: number) {
        return this.userRepository.findOneBy({id:id});
    }
}
