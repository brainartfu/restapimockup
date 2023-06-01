import { Test, TestingModule } from '@nestjs/testing';
import { NftcollectionsService } from './nftcollections.service';

describe('NftcollectionsService', () => {
  let service: NftcollectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NftcollectionsService],
    }).compile();

    service = module.get<NftcollectionsService>(NftcollectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
