import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { BlockTypesService } from './block-types.service';
import {
  IBlockType,
  IListBlockTypesQueryParams,
  IRetrieveBlockTypeQueryParams,
} from '@nexularpress/domain-interfaces';

describe('BlockTypesService', () => {
  let service: BlockTypesService;
  let httpController: HttpTestingController;

  const blockTypesUrl = '/wp/v2/block-types';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlockTypesService],
    });
    service = TestBed.inject(BlockTypesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getBlockTypes', () => {
    it('should fetch block types without query params when none are provided', async () => {
      const mockBlockTypes = [] as IBlockType[];
      service.getBlockTypes().then((data) => {
        expect(data).toEqual(mockBlockTypes);
      });
      const req = httpController.expectOne(`${blockTypesUrl}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockBlockTypes);
    });
    it('should fetch block types with query params when provided', async () => {
      const mockBlockTypes = [] as IBlockType[];
      const queryParams: IListBlockTypesQueryParams = {
        namespace: 'namespace',
      };
      service.getBlockTypes(queryParams).then((data) => {
        expect(data).toEqual(mockBlockTypes);
      });
      const req = httpController.expectOne(
        `${blockTypesUrl}?namespace=namespace`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockBlockTypes);
    });
  });
  describe('getBlockType', () => {
    it('should fetch block type without query params when none are provided', async () => {
      const mockBlockType = {} as IBlockType;
      service.getBlockType('namespace').then((data) => {
        expect(data).toEqual(mockBlockType);
      });
      const req = httpController.expectOne(`${blockTypesUrl}/namespace`);
      expect(req.request.method).toBe('GET');
      req.flush(mockBlockType);
    });
    it('should fetch block type with query params when provided', async () => {
      const mockBlockType = {} as IBlockType;
      const queryParams: IRetrieveBlockTypeQueryParams = { context: 'view' };
      service.getBlockType('namespace', 'name', queryParams).then((data) => {
        expect(data).toEqual(mockBlockType);
      });
      const req = httpController.expectOne(
        `${blockTypesUrl}/namespace/name?context=view`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockBlockType);
    });
  });
});
