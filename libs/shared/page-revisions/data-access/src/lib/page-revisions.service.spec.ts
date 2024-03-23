import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PageRevisionsService } from './page-revisions.service';
import {
  IListPageRevisionsQueryParams,
  IPageRevision,
} from '@nexularpress/domain-interfaces';

describe('PageRevisionsService', () => {
  let service: PageRevisionsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PageRevisionsService],
    });
    service = TestBed.inject(PageRevisionsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getPageRevisions', () => {
    it('should fetch page revisions without query params when none are provided', async () => {
      const mockPageRevisions = [] as IPageRevision[];
      service.getPageRevisions(1).then((data) => {
        expect(data).toEqual(mockPageRevisions);
      });
      const req = httpController.expectOne('/wp/v2/pages/1/revisions');
      expect(req.request.method).toBe('GET');
      req.flush(mockPageRevisions);
    });
    it('should fetch page revisions with query params when provided', async () => {
      const mockPageRevisions = [] as IPageRevision[];
      const queryParams: IListPageRevisionsQueryParams = { per_page: 5 };
      service.getPageRevisions(1, queryParams).then((data) => {
        expect(data).toEqual(mockPageRevisions);
      });
      const req = httpController.expectOne(
        '/wp/v2/pages/1/revisions?per_page=5'
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockPageRevisions);
    });
  });
  describe('getPageRevision', () => {
    it('should fetch page revision without query params when none are provided', async () => {
      const mockPageRevision = {} as IPageRevision;
      service.getPageRevision(1, 1).then((data) => {
        expect(data).toEqual(mockPageRevision);
      });
      const req = httpController.expectOne('/wp/v2/pages/1/revisions/1');
      expect(req.request.method).toBe('GET');
      req.flush(mockPageRevision);
    });
    it('should fetch page revision with query params when provided', async () => {
      const mockPageRevision = {} as IPageRevision;
      const queryParams: IListPageRevisionsQueryParams = { per_page: 5 };
      service.getPageRevision(1, 1, queryParams).then((data) => {
        expect(data).toEqual(mockPageRevision);
      });
      const req = httpController.expectOne(
        '/wp/v2/pages/1/revisions/1?per_page=5'
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockPageRevision);
    });
  });
});
