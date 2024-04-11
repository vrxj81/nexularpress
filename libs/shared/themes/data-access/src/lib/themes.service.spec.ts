import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ThemesService } from './themes.service';
import {
  IListThemesQueryParams,
  IRetrieveThemeQueryParams,
  ITheme,
} from '@nexularpress/domain-interfaces';

describe('ThemesService', () => {
  let service: ThemesService;
  let httpController: HttpTestingController;

  const themesUrl = '/wp/v2/themes';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ThemesService],
    });
    service = TestBed.inject(ThemesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getThemes', () => {
    it('should fetch themes without query params when none are provided', async () => {
      const mockThemes = [] as ITheme[];
      service.getThemes().then((data) => {
        expect(data).toEqual(mockThemes);
      });

      const req = httpController.expectOne(`${themesUrl}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockThemes);
    });
    it('should fetch themes with query params when provided', async () => {
      const mockThemes = [] as ITheme[];
      const queryParams: IListThemesQueryParams = { status: 'active' };

      service.getThemes(queryParams).then((data) => {
        expect(data).toEqual(mockThemes);
      });

      const req = httpController.expectOne(`${themesUrl}?status=active`);
      expect(req.request.method).toBe('GET');
      req.flush(mockThemes);
    });
  });
  describe('getTheme', () => {
    it('should fetch theme without query params when none are provided', async () => {
      const mockTheme = {} as ITheme;
      const theme = 'twentytwenty';

      service.getTheme(theme).then((data) => {
        expect(data).toEqual(mockTheme);
      });

      const req = httpController.expectOne(`${themesUrl}/${theme}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockTheme);
    });
    it('should fetch theme with query params when provided', async () => {
      const mockTheme = {} as ITheme;
      const queryParams: IRetrieveThemeQueryParams = {
        stylesheet: 'twentytwenty',
      };
      const stylesheet = 'twentytwenty';

      service.getTheme(stylesheet, queryParams).then((data) => {
        expect(data).toEqual(mockTheme);
      });

      const req = httpController.expectOne(
        `${themesUrl}/${stylesheet}?stylesheet=twentytwenty`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockTheme);
    });
  });
});
