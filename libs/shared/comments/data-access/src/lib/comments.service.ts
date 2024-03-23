import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IComment,
  IListCommentsQueryParams,
  IRetrieveCommentQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private commentsUrl = '/wp/v2/comments';

  constructor(private readonly http: HttpClient) {}

  getComments(query?: IListCommentsQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) => `${key}=${query[key as keyof IListCommentsQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get<IComment[]>(`${this.commentsUrl}${params}`)
    );
  }

  getComment(id: number, query?: IRetrieveCommentQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) => `${key}=${query[key as keyof IRetrieveCommentQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get<IComment>(`${this.commentsUrl}/${id}${params}`)
    );
  }
}
