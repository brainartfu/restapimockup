import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Nftcollection } from "./nftcollection.entity";


@Entity()
class Nftid {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @ManyToOne(() => Nftcollection, (nftcollection) => nftcollection.nftids)
    nftcollection: Nftcollection;
}

export {
    Nftid
}