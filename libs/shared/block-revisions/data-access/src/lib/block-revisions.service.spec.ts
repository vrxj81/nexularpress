import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { BlockRevisionsService } from './block-revisions.service';
import {
  IBlockRevision,
  IListBlockRevisionsQueryParams,
  IRetrieveBlockRevisionQueryParams,
} from '@nexularpress/domain-interfaces';

describe('BlockRevisionsService', () => {
  let service: BlockRevisionsService;
  let httpController: HttpTestingController;

  const blockRevisionsUrl = '/wp/v2/blocks/<parent>/revisions';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlockRevisionsService],
    });
    service = TestBed.inject(BlockRevisionsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getBlockRevisions', () => {
    it('should fetch post revisions without query params when none are provided', async () => {
      const mockBlockRevisions = [] as IBlockRevision[];
      service.getBlockRevisions(1).then((data) => {
        expect(data).toEqual(mockBlockRevisions);
      });
      const req = httpController.expectOne(
        `${blockRevisionsUrl.replace('<parent>', '1')}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockBlockRevisions);
    });
    it('should fetch post revisions with query params when provided', async () => {
      const mockBlockRevisions = [] as IBlockRevision[];
      const queryParams: IListBlockRevisionsQueryParams = { per_page: 5 };
      service.getBlockRevisions(1, queryParams).then((data) => {
        expect(data).toEqual(mockBlockRevisions);
      });
      const req = httpController.expectOne(
        `${blockRevisionsUrl.replace('<parent>', '1')}?per_page=5`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockBlockRevisions);
    });
  });
  describe('getBlockRevision', () => {
    it('should fetch post revision without query params when none are provided', async () => {
      const mockBlockRevision = {} as IBlockRevision;
      service.getBlockRevision(1, 1).then((data) => {
        expect(data).toEqual(mockBlockRevision);
      });
      const req = httpController.expectOne(
        `${blockRevisionsUrl.replace('<parent>', '1')}/1`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockBlockRevision);
    });
    it('should fetch post revision with query params when provided', async () => {
      const mockBlockRevision = {} as IBlockRevision;
      const queryParams: IRetrieveBlockRevisionQueryParams = {
        context: 'view',
      };
      service.getBlockRevision(1, 1, queryParams).then((data) => {
        expect(data).toEqual(mockBlockRevision);
      });
      const req = httpController.expectOne(
        `${blockRevisionsUrl.replace('<parent>', '1')}/1?context=view`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockBlockRevision);
    });
  });
});
