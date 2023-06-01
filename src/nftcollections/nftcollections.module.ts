import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nftcollection } from 'src/typeorm/nftcollection.entity';
import { Nftids } from 'src/typeorm/nftids.entity';
import { NftcollectionsService } from './service/nftcollections.service';
import { NftcollectionsController } from './controller/nftcollections.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Nftcollection,Nftids])],
    providers:[NftcollectionsService],
    controllers:[NftcollectionsController]
})
export class NftcollectionsModule {}
