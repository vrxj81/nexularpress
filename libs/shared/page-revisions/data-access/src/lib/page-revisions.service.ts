import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IListPageRevisionsQueryParams,
  IRetrievePageRevisionQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageRevisionsService {
  private pageRevisionsUrl = '/wp/v2/pages/<parent>/revisions';

  constructor(private readonly http: HttpClient) {}

  getPageRevisions(parent: number, query?: IListPageRevisionsQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IListPageRevisionsQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get(
        `${this.pageRevisionsUrl.replace(
          '<parent>',
          parent.toString()
        )}${params}`
      )
    );
  }

  getPageRevision(
    parent: number,
    id: number,
    query?: IRetrievePageRevisionQueryParams
  ) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IRetrievePageRevisionQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get(
        `${this.pageRevisionsUrl.replace(
          '<parent>',
          parent.toString()
        )}/${id}${params}`
      )
    );
  }
}
