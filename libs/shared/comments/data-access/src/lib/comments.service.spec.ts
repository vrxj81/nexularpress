import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CommentsService } from './comments.service';
import {
  IComment,
  IRetrieveCommentQueryParams,
} from '@nexularpress/domain-interfaces';

describe('CommentsService', () => {
  let service: CommentsService;
  let httpController: HttpTestingController;

  const commentsUrl = '/wp/v2/comments';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentsService],
    });
    service = TestBed.inject(CommentsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getComments', () => {
    it('should fetch comments without query params when none are provided', async () => {
      const mockComments = [] as IComment[];
      service.getComments().then((data) => {
        expect(data).toEqual(mockComments);
      });
      const req = httpController.expectOne(`${commentsUrl}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockComments);
    });
    it('should fetch comments with query params when provided', async () => {
      const mockComments = [] as IComment[];
      const queryParams = { per_page: 5 };
      service.getComments(queryParams).then((data) => {
        expect(data).toEqual(mockComments);
      });
      const req = httpController.expectOne(`${commentsUrl}?per_page=5`);
      expect(req.request.method).toBe('GET');
      req.flush(mockComments);
    });
  });
  describe('getComment', () => {
    it('should fetch comment without query params when none are provided', async () => {
      const mockComment = {} as IComment;
      const id = 1;
      service.getComment(id).then((data) => {
        expect(data).toEqual(mockComment);
      });
      const req = httpController.expectOne(`${commentsUrl}/${id}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockComment);
    });
    it('should fetch comment with query params when provided', async () => {
      const mockComment = {} as IComment;
      const id = 1;
      const queryParams: IRetrieveCommentQueryParams = { context: 'edit' };
      service.getComment(id, queryParams).then((data) => {
        expect(data).toEqual(mockComment);
      });
      const req = httpController.expectOne(`${commentsUrl}/${id}?context=edit`);
      expect(req.request.method).toBe('GET');
      req.flush(mockComment);
    });
  });
});
