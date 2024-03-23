import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TagsService } from './tags.service';
import { IRetrieveTagArgs, ITag } from '@nexularpress/domain-interfaces';

describe('TagsService', () => {
  let service: TagsService;
  let httpController: HttpTestingController;

  const tagsUrl = '/wp/v2/tags';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TagsService],
    });
    service = TestBed.inject(TagsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify(); // Ensure that no requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTags', () => {
    it('should fetch tags without query params when none are provided', async () => {
      const mockTags = [] as ITag[];

      service.getTags().then((data) => {
        expect(data).toEqual(mockTags);
      });

      const req = httpController.expectOne(`${tagsUrl}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockTags);
    });

    it('should fetch tags with query params when provided', async () => {
      const mockTags = [] as ITag[];
      const queryParams = { per_page: 5 };

      service.getTags(queryParams).then((data) => {
        expect(data).toEqual(mockTags);
      });

      const req = httpController.expectOne(`${tagsUrl}?per_page=5`);
      expect(req.request.method).toBe('GET');
      req.flush(mockTags);
    });
  });
  describe('getTag', () => {
    it('should fetch tag without query params when none are provided', async () => {
      const mockTag = {} as ITag;
      const tagId = 1;

      service.getTag(tagId).then((data) => {
        expect(data).toEqual(mockTag);
      });

      const req = httpController.expectOne(`${tagsUrl}/${tagId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockTag);
    });

    it('should fetch tag with query params when provided', async () => {
      const mockTag = {} as ITag;
      const tagId = 1;
      const queryParams: IRetrieveTagArgs = { context: 'view' };

      service.getTag(tagId, queryParams).then((data) => {
        expect(data).toEqual(mockTag);
      });

      const req = httpController.expectOne(`${tagsUrl}/${tagId}?context=view`);
      expect(req.request.method).toBe('GET');
      req.flush(mockTag);
    });
  });
});
