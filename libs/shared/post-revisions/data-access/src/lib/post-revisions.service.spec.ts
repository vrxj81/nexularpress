import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PostRevisionsService } from './post-revisions.service';
import {
  IListPostRevisionsQueryParams,
  IPostRevision,
} from '@nexularpress/domain-interfaces';

describe('PostRevisionsService', () => {
  let service: PostRevisionsService;
  let httpController: HttpTestingController;

  const postRevisionsUrl = '/wp/v2/posts/<parent>/revisions';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostRevisionsService],
    });
    service = TestBed.inject(PostRevisionsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getPostRevisions', () => {
    it('should fetch post revisions without query params when none are provided', async () => {
      const mockPostRevisions = [] as IPostRevision[];
      service.getPostRevisions(1).then((data) => {
        expect(data).toEqual(mockPostRevisions);
      });
      const req = httpController.expectOne(
        `${postRevisionsUrl.replace('<parent>', '1')}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockPostRevisions);
    });
    it('should fetch post revisions with query params when provided', async () => {
      const mockPostRevisions = [] as IPostRevision[];
      const queryParams: IListPostRevisionsQueryParams = { per_page: 5 };
      service.getPostRevisions(1, queryParams).then((data) => {
        expect(data).toEqual(mockPostRevisions);
      });
      const req = httpController.expectOne(
        `${postRevisionsUrl.replace('<parent>', '1')}?per_page=5`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockPostRevisions);
    });
  });
  describe('getPostRevision', () => {
    it('should fetch post revision without query params when none are provided', async () => {
      const mockPostRevision = {} as IPostRevision;
      service.getPostRevision(1, 1).then((data) => {
        expect(data).toEqual(mockPostRevision);
      });
      const req = httpController.expectOne(
        `${postRevisionsUrl.replace('<parent>', '1')}/1`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockPostRevision);
    });
    it('should fetch post revision with query params when provided', async () => {
      const mockPostRevision = {} as IPostRevision;
      const queryParams: IListPostRevisionsQueryParams = { context: 'view' };
      service.getPostRevision(1, 1, queryParams).then((data) => {
        expect(data).toEqual(mockPostRevision);
      });
      const req = httpController.expectOne(
        `${postRevisionsUrl.replace('<parent>', '1')}/1?context=view`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockPostRevision);
    });
  });
});
