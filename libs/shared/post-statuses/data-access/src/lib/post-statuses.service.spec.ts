import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PostStatusesService } from './post-statuses.service';
import {
  IPostStatus,
  IRetrievePostStatusQueryParams,
} from '@nexularpress/domain-interfaces';

describe('PostStatusesService', () => {
  let service: PostStatusesService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostStatusesService],
    });
    service = TestBed.inject(PostStatusesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('fetchPostStatuses', () => {
    it('should fetch post statuses', async () => {
      const mockPostStatuses = [] as IPostStatus[];
      service.fetchPostStatuses().then((data) => {
        expect(data).toEqual(mockPostStatuses);
      });
      const req = httpController.expectOne('/wp/v2/statuses');
      req.flush({ data: [] });
    });
  });
  describe('fetchPostStatus', () => {
    it('should fetch post status without query params when none are provided', async () => {
      const mockPostStatus = {} as IPostStatus;
      service.fetchPostStatus('publish').then((data) => {
        expect(data).toEqual(mockPostStatus);
      });
      const req = httpController.expectOne('/wp/v2/statuses/publish');
      req.flush({ data: {} });
    });
    it('should fetch post status with query params when provided', async () => {
      const mockPostStatus = {} as IPostStatus;
      const queryParams: IRetrievePostStatusQueryParams = { context: 'view' };
      service.fetchPostStatus('publish', queryParams).then((data) => {
        expect(data).toEqual(mockPostStatus);
      });
      const req = httpController.expectOne(
        '/wp/v2/statuses/publish?context=view'
      );
      req.flush({ data: {} });
    });
  });
});
