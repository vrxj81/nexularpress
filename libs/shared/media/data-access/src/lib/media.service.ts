import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IListMediaQueryParams,
  IRetrieveMediaItemQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private mediaUrl = '/wp/v2/media';

  constructor(private http: HttpClient) {}

  getMedia(query?: IListMediaQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map((key) => `${key}=${query[key as keyof IListMediaQueryParams]}`)
          .join('&')
      : '';
    return firstValueFrom(this.http.get(`${this.mediaUrl}${params}`));
  }

  getMediaItem(id: number, query?: IRetrieveMediaItemQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IRetrieveMediaItemQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(this.http.get(`${this.mediaUrl}/${id}${params}`));
  }
}
