import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IListPostRevisionsQueryParams,
  IRetrievePostRevisionQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostRevisionsService {
  private postRevisionsUrl = '/wp/v2/posts/<parent>/revisions';

  constructor(private readonly http: HttpClient) {}

  getPostRevisions(parent: number, query?: IListPostRevisionsQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IListPostRevisionsQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get(
        `${this.postRevisionsUrl.replace(
          '<parent>',
          parent.toString()
        )}${params}`
      )
    );
  }

  getPostRevision(
    parent: number,
    id: number,
    query?: IRetrievePostRevisionQueryParams
  ) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IRetrievePostRevisionQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get(
        `${this.postRevisionsUrl.replace(
          '<parent>',
          parent.toString()
        )}/${id}${params}`
      )
    );
  }
}
