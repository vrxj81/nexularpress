import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TaxonomiesService } from './taxonomies.service';
import {
  IListTaxonomiesQueryParams,
  IRetrieveTaxonomyQueryParams,
  ITaxonomy,
} from '@nexularpress/domain-interfaces';

describe('TaxonomiesService', () => {
  let service: TaxonomiesService;
  let httpController: HttpTestingController;

  const taxonomiesUrl = '/wp/v2/taxonomies';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaxonomiesService],
    });
    service = TestBed.inject(TaxonomiesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getTaxonomies', () => {
    it('should fetch taxonomies without query params when none are provided', async () => {
      const mockTaxonomies = [] as ITaxonomy[];
      service.getTaxonomies().then((data) => {
        expect(data).toEqual(mockTaxonomies);
      });

      const req = httpController.expectOne(`${taxonomiesUrl}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockTaxonomies);
    });
    it('should fetch taxonomies with query params when provided', async () => {
      const mockTaxonomies = [] as ITaxonomy[];
      const queryParams: IListTaxonomiesQueryParams = { type: 'post' };

      service.getTaxonomies(queryParams).then((data) => {
        expect(data).toEqual(mockTaxonomies);
      });

      const req = httpController.expectOne(`${taxonomiesUrl}?type=post`);
      expect(req.request.method).toBe('GET');
      req.flush(mockTaxonomies);
    });
  });
  describe('getTaxonomy', () => {
    it('should fetch taxonomy without query params when none are provided', async () => {
      const mockTaxonomy = {} as ITaxonomy;
      const taxonomy = 'category';

      service.getTaxonomy(taxonomy).then((data) => {
        expect(data).toEqual(mockTaxonomy);
      });

      const req = httpController.expectOne(`${taxonomiesUrl}/${taxonomy}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockTaxonomy);
    });
    it('should fetch taxonomy with query params when provided', async () => {
      const mockTaxonomy = {} as ITaxonomy;
      const taxonomy = 'category';
      const queryParams: IRetrieveTaxonomyQueryParams = { context: 'view' };

      service.getTaxonomy(taxonomy, queryParams).then((data) => {
        expect(data).toEqual(mockTaxonomy);
      });

      const req = httpController.expectOne(
        `${taxonomiesUrl}/${taxonomy}?context=view`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockTaxonomy);
    });
  });
});
