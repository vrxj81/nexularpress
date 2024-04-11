import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private settingsUrl = '/wp/v2/settings';

  constructor(private readonly http: HttpClient) {}

  getSettings() {
    return firstValueFrom(this.http.get(this.settingsUrl));
  }
}
