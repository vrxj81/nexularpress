import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IListThemesQueryParams,
  IRetrieveThemeQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private themesUrl = '/wp/v2/themes';

  constructor(private readonly http: HttpClient) {}

  getThemes(query?: IListThemesQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map((key) => `${key}=${query[key as keyof IListThemesQueryParams]}`)
          .join('&')
      : '';
    return firstValueFrom(this.http.get(`${this.themesUrl}${params}`));
  }

  getTheme(stylesheet: string, query?: IRetrieveThemeQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) => `${key}=${query[key as keyof IRetrieveThemeQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get(`${this.themesUrl}/${stylesheet}${params}`)
    );
  }
}
