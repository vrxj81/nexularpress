import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListSearchResultsQueryParams } from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchUrl = '/wp/v2/search';

  constructor(private readonly http: HttpClient) {}

  search(query?: IListSearchResultsQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IListSearchResultsQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(this.http.get(`${this.searchUrl}${params}`));
  }
}
