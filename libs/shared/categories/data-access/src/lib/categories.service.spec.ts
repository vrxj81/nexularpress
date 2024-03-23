import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CategoriesService } from './categories.service';
import {
  ICategory,
  IListCategoriesQueryParams,
  IRetrieveCategoryQueryParams,
} from '@nexularpress/domain-interfaces';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpController: HttpTestingController;

  const categoriesUrl = '/wp/v2/categories';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriesService],
    });

    service = TestBed.inject(CategoriesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify(); // Ensure that no requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCategories', () => {
    it('should fetch categories without query params when none are provided', async () => {
      const mockCategories = [] as ICategory[];

      service.getCategories().then((data) => {
        expect(data).toEqual(mockCategories);
      });

      const req = httpController.expectOne(`${categoriesUrl}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockCategories);
    });

    it('should fetch categories with query params when provided', async () => {
      const mockCategories = [] as ICategory[];
      const queryParams: IListCategoriesQueryParams = { per_page: 5 };

      service.getCategories(queryParams).then((data) => {
        expect(data).toEqual(mockCategories);
      });

      const req = httpController.expectOne(`${categoriesUrl}?per_page=5`);
      expect(req.request.method).toBe('GET');
      req.flush(mockCategories);
    });
  });

  describe('getCategory', () => {
    it('should fetch a single category without query params when none are provided', async () => {
      const mockCategory = { id: 1, name: 'Test Category' };
      const categoryId = 1;

      service.getCategory(categoryId).then((data) => {
        expect(data).toEqual(mockCategory);
      });

      const req = httpController.expectOne(`${categoriesUrl}/${categoryId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockCategory);
    });

    it('should fetch a single category with query params when provided', async () => {
      const mockCategory = { id: 1, name: 'Test Category' };
      const categoryId = 1;
      const queryParams: IRetrieveCategoryQueryParams = { context: 'view' };

      service.getCategory(categoryId, queryParams).then((data) => {
        expect(data).toEqual(mockCategory);
      });

      const req = httpController.expectOne(
        `${categoriesUrl}/${categoryId}?context=view`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockCategory);
    });
  });
});
