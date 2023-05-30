import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
class User {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name : 'user_id',
    })
    id: number;

    @Column({
        nullable: false,
        default: ''
    })
    firstname: string;

    @Column({
        nullable:false,
        default:''
    })
    lastname: string;

    @Column({
        name: 'email_address',
        nullable: false,
        default:''
    })
    email: string;

    @Column({
        nullable: false,
        default: ''
    })
    password: string;
}

export {
    User
};