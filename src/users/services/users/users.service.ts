import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { LoginDTO, SignupDTO } from 'src/users/dtos';
import { constant } from 'src/constants';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository:Repository<User>
    ){}

    createUser(signupDTO: SignupDTO){
        const newUser = this.userRepository.create(signupDTO);
        return this.userRepository.save(newUser);
    }

    async loginUser(loginDTO: LoginDTO):Promise<any>{
        const user = await this.userRepository.findOneBy({email:loginDTO.email});
        if ( user == undefined ){
            return constant.NoLoginedUser;
        } else {
            if ( user.password != loginDTO.password ) return constant.IncorrectPassword;
            else return user;
        }
        
    }

    getUsers() {
        return this.userRepository.find();
    }

    findUsersById(id: number) {
        return this.userRepository.findOneBy({id:id});
    }
}
