import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MediaService } from './media.service';
import {
  IMediaItem,
  IRetrieveMediaItemQueryParams,
} from '@nexularpress/domain-interfaces';

describe('MediaService', () => {
  let service: MediaService;
  let httpController: HttpTestingController;

  const mediaUrl = '/wp/v2/media';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MediaService],
    });
    service = TestBed.inject(MediaService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getMedia', () => {
    it('should fetch media without query params when none are provided', async () => {
      const mockMedia = [] as IMediaItem[];
      service.getMedia().then((data) => {
        expect(data).toEqual(mockMedia);
      });
      const req = httpController.expectOne(`${mediaUrl}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockMedia);
    });
    it('should fetch media with query params when provided', async () => {
      const mockMedia = [] as IMediaItem[];
      const queryParams = { per_page: 5 };
      service.getMedia(queryParams).then((data) => {
        expect(data).toEqual(mockMedia);
      });
      const req = httpController.expectOne(`${mediaUrl}?per_page=5`);
      expect(req.request.method).toBe('GET');
      req.flush(mockMedia);
    });
  });
  describe('getMediaItem', () => {
    it('should fetch media item without query params when none are provided', async () => {
      const mockMediaItem = {} as IMediaItem;
      const id = 1;
      service.getMediaItem(id).then((data) => {
        expect(data).toEqual(mockMediaItem);
      });
      const req = httpController.expectOne(`${mediaUrl}/${id}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockMediaItem);
    });
    it('should fetch media item with query params when provided', async () => {
      const mockMediaItem = {} as IMediaItem;
      const id = 1;
      const queryParams: IRetrieveMediaItemQueryParams = { context: 'edit' };
      service.getMediaItem(id, queryParams).then((data) => {
        expect(data).toEqual(mockMediaItem);
      });
      const req = httpController.expectOne(`${mediaUrl}/${id}?context=edit`);
      expect(req.request.method).toBe('GET');
      req.flush(mockMediaItem);
    });
  });
});
