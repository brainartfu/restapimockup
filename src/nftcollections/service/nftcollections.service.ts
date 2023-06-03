import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Nftcollection } from 'src/typeorm/nftcollection.entity';
import { Repository, EntityNotFoundError } from 'typeorm';
import { CollectionDTO } from '../dtos/Collection.dto';
import { Nftid } from 'src/typeorm/nftid.entity';

@Injectable()
export class NftcollectionsService {
    constructor(
        @InjectRepository(Nftcollection) private readonly collectionRepository:Repository<Nftcollection>,
        @InjectRepository(Nftid) private readonly idsRepository:Repository<Nftid>
    ){}

    async createCollection(data:CollectionDTO){
        let nftcollection = await this.collectionRepository.findOne({where:{ name: data.name }});
        if (!nftcollection) {
            nftcollection = new Nftcollection();
            nftcollection.name = data.name;
            await this.collectionRepository.save(nftcollection);
        } else {
            nftcollection.name = data.name;
            await this.collectionRepository.update(nftcollection.id, nftcollection);
        }

        const nftidsArray: Nftid[] = [];
        for (const id of data.ids) {
            let nftid = await this.idsRepository.findOne({where:{ name: id }});
            if ( nftid ) continue;
            const nftids = new Nftid();
            nftids.name = id;
            nftids.nftcollection = nftcollection;
            nftidsArray.push(nftids);
        }
        await this.idsRepository.save(nftidsArray);
    }

    async getNameByIds(ids: any): Promise<any> {
        var returnArray = [];
        for ( var i = 0 ; i < ids.length ; i ++ ){
            try{
                const nftId = await this.idsRepository
                .createQueryBuilder('nftid')
                .where('nftid.name = :name', { name: ids[i] })
                .leftJoinAndSelect('nftid.nftcollection', 'nftcollection')
                .getOne();
                if ( !nftId ){
                    returnArray.push('null');
                } else {
                    returnArray.push(nftId.nftcollection.name);
                }
            } catch(err){
                returnArray.push('null');
            }
        }
        return returnArray;
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
