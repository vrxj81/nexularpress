import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IBlockType,
  IListBlockTypesQueryParams,
  IRetrieveBlockTypeQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlockTypesService {
  private blockTypesUrl = '/wp/v2/block-types';

  constructor(private http: HttpClient) {}

  getBlockTypes(query?: IListBlockTypesQueryParams): Promise<IBlockType[]> {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) => `${key}=${query[key as keyof IListBlockTypesQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get<IBlockType[]>(`${this.blockTypesUrl}${params}`)
    );
  }

  getBlockType(
    namespace: string,
    name?: string,
    query?: IRetrieveBlockTypeQueryParams
  ): Promise<IBlockType> {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IRetrieveBlockTypeQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get<IBlockType>(
        `${this.blockTypesUrl}/${namespace}${name ? `/${name}` : ''}${params}`
      )
    );
  }
}
