import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IBlockDirectoryItem,
  IListBlockDirectoryItemsQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlockDirectoryItemsService {
  private blockDirectoryItemsUrl = '/wp/v2/block-directory/search';

  constructor(private readonly http: HttpClient) {}

  getBlockDirectoryItems(
    query?: IListBlockDirectoryItemsQueryParams
  ): Promise<IBlockDirectoryItem[]> {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${
                query[key as keyof IListBlockDirectoryItemsQueryParams]
              }`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get<IBlockDirectoryItem[]>(
        `${this.blockDirectoryItemsUrl}${params}`
      )
    );
  }
}
