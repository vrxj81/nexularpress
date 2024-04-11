import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { BlocksService } from './blocks.service';
import {
  IEditorBlock,
  IListEditorBlocksQueryParams,
  IRetrieveEditorBlockQueryParams,
} from '@nexularpress/domain-interfaces';

describe('BlocksService', () => {
  let service: BlocksService;
  let httpController: HttpTestingController;

  const blocksUrl = '/wp/v2/blocks';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlocksService],
    });
    service = TestBed.inject(BlocksService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getBlocks', () => {
    it('should fetch blocks without query params when none are provided', async () => {
      const mockBlocks = [] as IEditorBlock[];
      service.getBlocks().then((data) => {
        expect(data).toEqual(mockBlocks);
      });
      const req = httpController.expectOne(`${blocksUrl}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockBlocks);
    });
    it('should fetch blocks with query params when provided', async () => {
      const mockBlocks = [] as IEditorBlock[];
      const queryParams: IListEditorBlocksQueryParams = {
        per_page: 10,
      };
      service.getBlocks(queryParams).then((data) => {
        expect(data).toEqual(mockBlocks);
      });
      const req = httpController.expectOne(`${blocksUrl}?per_page=10`);
      expect(req.request.method).toBe('GET');
      req.flush(mockBlocks);
    });
  });
  describe('getBlock', () => {
    it('should fetch block without query params when none are provided', async () => {
      const mockBlock = {} as IEditorBlock;
      service.getBlock(1).then((data) => {
        expect(data).toEqual(mockBlock);
      });
      const req = httpController.expectOne(`${blocksUrl}/1`);
      expect(req.request.method).toBe('GET');
      req.flush(mockBlock);
    });
    it('should fetch block with query params when provided', async () => {
      const mockBlock = {} as IEditorBlock;
      const queryParams: IRetrieveEditorBlockQueryParams = {
        context: 'view',
      };
      service.getBlock(1, queryParams).then((data) => {
        expect(data).toEqual(mockBlock);
      });
      const req = httpController.expectOne(`${blocksUrl}/1?context=view`);
      expect(req.request.method).toBe('GET');
      req.flush(mockBlock);
    });
  });
});
