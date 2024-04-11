import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IBlockRevision,
  IListBlockRevisionsQueryParams,
  IRetrieveBlockRevisionQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlockRevisionsService {
  private blockRevisionsUrl = '/wp/v2/blocks/<parent>/revisions';

  constructor(private readonly http: HttpClient) {}

  async getBlockRevisions(
    parent: number,
    query?: IListBlockRevisionsQueryParams
  ): Promise<IBlockRevision[]> {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IListBlockRevisionsQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get<IBlockRevision[]>(
        `${this.blockRevisionsUrl.replace(
          '<parent>',
          parent.toString()
        )}${params}`
      )
    );
  }

  async getBlockRevision(
    parent: number,
    id: number,
    query?: IListBlockRevisionsQueryParams
  ): Promise<IBlockRevision> {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IRetrieveBlockRevisionQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get<IBlockRevision>(
        `${this.blockRevisionsUrl.replace(
          '<parent>',
          parent.toString()
        )}/${id}${params}`
      )
    );
  }
}
