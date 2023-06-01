import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Nftcollection } from 'src/typeorm/nftcollection.entity';
import { Repository, EntityNotFoundError } from 'typeorm';
import { CollectionDTO } from '../dtos/Collection.dto';
import { Nftids } from 'src/typeorm/nftids.entity';

@Injectable()
export class NftcollectionsService {
    constructor(
        @InjectRepository(Nftcollection) private readonly collectionRepository:Repository<Nftcollection>,
        @InjectRepository(Nftids) private readonly idsRepository:Repository<Nftids>
    ){}

    async createCollection(data:CollectionDTO){
        const nftcollection = new Nftcollection();
        nftcollection.name = data.name;
        await this.collectionRepository.save(nftcollection);

        const nftidsArray: Nftids[] = [];
        for (const id of data.ids) {
            const nftids = new Nftids();
            nftids.name = id;
            nftids.nftcollection = nftcollection;
            nftidsArray.push(nftids);
        }
        await this.idsRepository.save(nftidsArray);
    }

    async getNameById(id_one: string): Promise<any> {
        const nftId = await this.idsRepository.findOneBy({ name : id_one });
        if (nftId && nftId.nftcollection) {
          return nftId.nftcollection.name;
        }
        return null;
    }
    async searchCollectionname(name:string): Promise<Nftcollection>{
        try{
            return this.collectionRepository.findOneByOrFail({name:name});
        } catch(err){
            if ( err instanceof EntityNotFoundError ){
                return null;
            }
            throw err;
        }
    }
}
