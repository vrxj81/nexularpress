import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { BlockDirectoryItemsService } from './block-directory-items.service';
import {
  IBlockDirectoryItem,
  IListBlockDirectoryItemsQueryParams,
} from '@nexularpress/domain-interfaces';

describe('BlockDirectoryItemsService', () => {
  let service: BlockDirectoryItemsService;
  let httpController: HttpTestingController;

  const blockDirectoryItemsUrl = '/wp/v2/block-directory/search';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlockDirectoryItemsService],
    });
    service = TestBed.inject(BlockDirectoryItemsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getBlockDirectoryItems', () => {
    it('should fetch block directory items without query params when none are provided', async () => {
      const mockBlockDirectoryItems = [] as IBlockDirectoryItem[];
      service.getBlockDirectoryItems().then((data) => {
        expect(data).toEqual(mockBlockDirectoryItems);
      });
      const req = httpController.expectOne(`${blockDirectoryItemsUrl}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockBlockDirectoryItems);
    });
    it('should fetch block directory items with query params when provided', async () => {
      const mockBlockDirectoryItems = [] as IBlockDirectoryItem[];
      const queryParams: IListBlockDirectoryItemsQueryParams = { term: 'test' };
      service.getBlockDirectoryItems(queryParams).then((data) => {
        expect(data).toEqual(mockBlockDirectoryItems);
      });
      const req = httpController.expectOne(
        `${blockDirectoryItemsUrl}?term=test`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockBlockDirectoryItems);
    });
  });
});
