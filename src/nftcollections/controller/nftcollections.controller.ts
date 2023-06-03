import { Controller, Get,Post, Body,UsePipes, ValidationPipe } from '@nestjs/common';
import { CollectionDTO } from '../dtos/Collection.dto';
import { NftcollectionsService } from '../service/nftcollections.service';

@Controller('nftcollections')
export class NftcollectionsController {

    constructor(private readonly nftcollectionService:NftcollectionsService){}
    @Get()
    getCollectionNames(){
        return "ID NAMES";
    }

    @Post('search')
    searchCollectionName(@Body() collectionNames: any):Promise<any>{
        const result = this.nftcollectionService.getNameByIds(collectionNames);
        return result;
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    async saveNftData(@Body() data: CollectionDTO) {
        const { name, ids } = data;
        return await this.nftcollectionService.createCollection({name, ids});
    }
}
