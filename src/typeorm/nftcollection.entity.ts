import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Nftid } from "./nftid.entity";


@Entity()
class Nftcollection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @OneToMany(() => Nftid, (nftid) => nftid.nftcollection)
    nftids: Nftid[];
}

export {
    Nftcollection
}