import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IListTagsQueryParams,
  IRetrieveTagArgs,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private tagsUrl = `/wp/v2/tags`;

  constructor(private readonly http: HttpClient) {}

  getTags(query?: IListTagsQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map((key) => `${key}=${query[key as keyof IListTagsQueryParams]}`)
          .join('&')
      : '';
    return firstValueFrom(this.http.get(`${this.tagsUrl}${params}`));
  }

  getTag(id: number, query?: IRetrieveTagArgs) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map((key) => `${key}=${query[key as keyof IRetrieveTagArgs]}`)
          .join('&')
      : '';
    return firstValueFrom(this.http.get(`${this.tagsUrl}/${id}${params}`));
  }
}
