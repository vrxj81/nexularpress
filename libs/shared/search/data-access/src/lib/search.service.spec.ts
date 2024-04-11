import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { SearchService } from './search.service';
import {
  IListSearchResultsQueryParams,
  ISearchResult,
} from '@nexularpress/domain-interfaces';

describe('SearchService', () => {
  let service: SearchService;
  let httpController: HttpTestingController;

  const searchUrl = '/wp/v2/search';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService],
    });
    service = TestBed.inject(SearchService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('search', () => {
    it('should request search results without query params when none are provided', async () => {
      const expectedResults = [] as ISearchResult[];
      service.search().then((results) => {
        expect(results).toEqual(expectedResults);
      });

      const req = httpController.expectOne(searchUrl);
      req.flush(expectedResults);
    });
    it('should include query params in the request when provided', async () => {
      const expectedResults = [] as ISearchResult[];
      const queryParams: IListSearchResultsQueryParams = {
        search: 'Angular',
        page: 1,
      };
      service.search(queryParams).then((results) => {
        expect(results).toEqual(expectedResults);
      });

      const req = httpController.expectOne(
        `${searchUrl}?search=Angular&page=1`
      );
      req.flush(expectedResults);
    });
  });
});
