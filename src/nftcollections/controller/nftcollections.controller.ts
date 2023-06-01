import { Controller, Get,Post, Body,UsePipes, ValidationPipe } from '@nestjs/common';
import { CollectionDTO } from '../dtos/Collection.dto';
import { NftcollectionsService } from '../service/nftcollections.service';
import { Nftcollection } from 'src/typeorm/nftcollection.entity';

@Controller('nftcollections')
export class NftcollectionsController {

    constructor(private readonly nftcollectionService:NftcollectionsService){}
    @Get()
    getCollectionNames(){
        return "ID NAMES";
    }

    @Post('search')
    searchCollectionName(@Body() collectionName: string):Promise<Nftcollection>{
        const result = this.nftcollectionService.searchCollectionname(collectionName);
        return result;
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    async saveNftData(@Body() data: CollectionDTO) {
        const { name, ids } = data;
        await this.nftcollectionService.createCollection({name, ids});
        return 'Data saved successfully';
    }
}
