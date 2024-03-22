import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IPost,
  IPostsQueryParams,
  IRetrievePostQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postsUrl = '/wp/v2/posts';

  constructor(private readonly http: HttpClient) {}

  getPosts(query?: IPostsQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map((key) => `${key}=${query[key as keyof IPostsQueryParams]}`)
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get<IPost[]>(`${this.postsUrl}${params}`)
    );
  }

  getPost(id: number, query?: IRetrievePostQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) => `${key}=${query[key as keyof IRetrievePostQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get<IPost>(`${this.postsUrl}/${id}${params}`)
    );
  }
}
