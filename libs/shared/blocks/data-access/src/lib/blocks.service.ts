import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IEditorBlock,
  IListEditorBlocksQueryParams,
  IRetrieveEditorBlockQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlocksService {
  private blocksUrl = '/wp/v2/blocks';

  constructor(private readonly http: HttpClient) {}

  getBlocks(query?: IListEditorBlocksQueryParams): Promise<IEditorBlock[]> {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IListEditorBlocksQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get<IEditorBlock[]>(`${this.blocksUrl}${params}`)
    );
  }

  getBlock(
    id: number,
    query?: IRetrieveEditorBlockQueryParams
  ): Promise<IEditorBlock> {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IRetrieveEditorBlockQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get<IEditorBlock>(`${this.blocksUrl}/${id}${params}`)
    );
  }
}
