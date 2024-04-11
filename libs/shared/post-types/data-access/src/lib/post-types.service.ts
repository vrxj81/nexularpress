import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRetrievePostTypeQueryParams } from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostTypesService {
  private postTypesUrl = '/wp/v2/types';

  constructor(private readonly http: HttpClient) {}

  getPostTypes() {
    return firstValueFrom(this.http.get(this.postTypesUrl));
  }

  getPostType(type: string, query?: IRetrievePostTypeQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IRetrievePostTypeQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get(`${this.postTypesUrl}/${type}${params}`)
    );
  }
}
