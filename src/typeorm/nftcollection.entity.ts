import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
class Nftcollection {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'collection_id'
    })
    id: number;
    @Column({
        nullable: false,
        default: ''
    })
    name : string;
}

export {
    Nftcollection
}