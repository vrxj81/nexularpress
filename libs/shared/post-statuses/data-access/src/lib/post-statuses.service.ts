import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRetrievePostStatusQueryParams } from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostStatusesService {
  private postStatusUrl = '/wp/v2/statuses';

  constructor(private readonly http: HttpClient) {}

  fetchPostStatuses() {
    return firstValueFrom(this.http.get(this.postStatusUrl));
  }

  fetchPostStatus(status: string, query?: IRetrievePostStatusQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IRetrievePostStatusQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get(`${this.postStatusUrl}/${status}${params}`)
    );
  }
}
