import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Nftcollection } from 'src/typeorm/nftcollection.entity';
import { Repository, EntityNotFoundError } from 'typeorm';
import { CollectionDTO } from '../dtos/Collection.dto';

@Injectable()
export class NftcollectionsService {
    constructor(@InjectRepository(Nftcollection) private readonly collectionRepository:Repository<Nftcollection>){

    }

    createCollection(collectionDTO:CollectionDTO){
        const newCollection = this.collectionRepository.create(collectionDTO)
        return this.collectionRepository.save(newCollection);
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
