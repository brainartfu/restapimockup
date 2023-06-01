import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Nftcollection } from "./nftcollection.entity";


@Entity()
class Nftids {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'collection_id'
    })
    id: number;

    @Column({
        nullable: false
    })
    name : string;

    @ManyToOne(() => Nftcollection, (nftcollection) => nftcollection.nftids)
    nftcollection: Nftcollection;
}

export {
    Nftids
}