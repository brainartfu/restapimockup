import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Nftids } from "./nftids.entity";


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

    @OneToMany(()=>Nftids, (nftids) => {nftids.nftcollection})
    nftids : Nftids[];
}

export {
    Nftcollection
}