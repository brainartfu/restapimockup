import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nftcollection } from 'src/typeorm/nftcollection.entity';
import { Nftid } from 'src/typeorm/nftid.entity';
import { NftcollectionsService } from './service/nftcollections.service';
import { NftcollectionsController } from './controller/nftcollections.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Nftcollection,Nftid])],
    providers:[NftcollectionsService],
    controllers:[NftcollectionsController]
})
export class NftcollectionsModule {}
