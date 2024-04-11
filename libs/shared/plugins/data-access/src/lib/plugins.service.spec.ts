import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PluginsService } from './plugins.service';
import {
  IListPluginsQueryParams,
  IPlugin,
  IRetrievePluginQueryParams,
} from '@nexularpress/domain-interfaces';

describe('PluginsService', () => {
  let service: PluginsService;
  let httpController: HttpTestingController;

  const pluginsUrl = '/wp/v2/plugins';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PluginsService],
    });
    service = TestBed.inject(PluginsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getPlugins', () => {
    it('should fetch plugins without query params when none are provided', async () => {
      const mockPlugins = [] as IPlugin[];
      service.getPlugins().then((data) => {
        expect(data).toEqual(mockPlugins);
      });
      const req = httpController.expectOne(pluginsUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockPlugins);
    });
    it('should fetch plugins with query params when provided', async () => {
      const mockPlugins = [] as IPlugin[];
      const queryParams: IListPluginsQueryParams = { context: 'view' };
      service.getPlugins(queryParams).then((data) => {
        expect(data).toEqual(mockPlugins);
      });
      const req = httpController.expectOne(`${pluginsUrl}?context=view`);
      expect(req.request.method).toBe('GET');
      req.flush(mockPlugins);
    });
  });
  describe('getPlugin', () => {
    it('should fetch plugin without query params when none are provided', async () => {
      const mockPlugin = {} as IPlugin;
      service.getPlugin('plugin').then((data) => {
        expect(data).toEqual(mockPlugin);
      });
      const req = httpController.expectOne(`${pluginsUrl}/plugin`);
      expect(req.request.method).toBe('GET');
      req.flush(mockPlugin);
    });
    it('should fetch plugin with query params when provided', async () => {
      const mockPlugin = {} as IPlugin;
      const queryParams: IRetrievePluginQueryParams = { context: 'view' };
      service.getPlugin('plugin', queryParams).then((data) => {
        expect(data).toEqual(mockPlugin);
      });
      const req = httpController.expectOne(`${pluginsUrl}/plugin?context=view`);
      expect(req.request.method).toBe('GET');
      req.flush(mockPlugin);
    });
  });
});
