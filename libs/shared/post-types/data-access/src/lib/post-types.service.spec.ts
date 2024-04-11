import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PostTypesService } from './post-types.service';
import {
  IPostType,
  IRetrievePostTypeQueryParams,
} from '@nexularpress/domain-interfaces';

describe('PostTypesService', () => {
  let service: PostTypesService;
  let httpController: HttpTestingController;

  const postTypesUrl = '/wp/v2/types';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostTypesService],
    });
    service = TestBed.inject(PostTypesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getPostTypes', () => {
    it('should fetch post types', async () => {
      const mockPostTypes = [] as IPostType[];
      service.getPostTypes().then((data) => {
        expect(data).toEqual(mockPostTypes);
      });
      const req = httpController.expectOne(postTypesUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockPostTypes);
    });
  });
  describe('getPostType', () => {
    it('should fetch post type without query params when none are provided', async () => {
      const mockPostType = {} as IPostType;
      service.getPostType('post').then((data) => {
        expect(data).toEqual(mockPostType);
      });
      const req = httpController.expectOne(`${postTypesUrl}/post`);
      expect(req.request.method).toBe('GET');
      req.flush(mockPostType);
    });
    it('should fetch post type with query params when they are provided', async () => {
      const mockPostType = {} as IPostType;
      const mockQuery: IRetrievePostTypeQueryParams = { context: 'view' };
      service.getPostType('post', mockQuery).then((data) => {
        expect(data).toEqual(mockPostType);
      });
      const req = httpController.expectOne(`${postTypesUrl}/post?context=view`);
      expect(req.request.method).toBe('GET');
      req.flush(mockPostType);
    });
  });
});
