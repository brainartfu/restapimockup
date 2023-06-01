import { Test, TestingModule } from '@nestjs/testing';
import { NftcollectionsController } from './nftcollections.controller';

describe('NftcollectionsController', () => {
  let controller: NftcollectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NftcollectionsController],
    }).compile();

    controller = module.get<NftcollectionsController>(NftcollectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
