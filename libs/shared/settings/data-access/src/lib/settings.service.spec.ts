import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  let service: SettingsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SettingsService],
    });
    service = TestBed.inject(SettingsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getSettings', () => {
    it('should fetch settings', async () => {
      const mockSettings = {};
      service.getSettings().then((data) => {
        expect(data).toEqual(mockSettings);
      });
      const req = httpController.expectOne('/wp/v2/settings');
      expect(req.request.method).toBe('GET');
      req.flush(mockSettings);
    });
  });
});
