import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IListUsersQueryParams,
  IRetrieveUserQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersUrl = '/wp/v2/users';

  constructor(private readonly http: HttpClient) {}

  getUsers(query?: IListUsersQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map((key) => `${key}=${query[key as keyof IListUsersQueryParams]}`)
          .join('&')
      : '';
    return firstValueFrom(this.http.get(`${this.usersUrl}${params}`));
  }

  getUser(id: number, query?: IRetrieveUserQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) => `${key}=${query[key as keyof IRetrieveUserQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(this.http.get(`${this.usersUrl}${id}${params}`));
  }

  getActiveUser(query?: IRetrieveUserQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) => `${key}=${query[key as keyof IRetrieveUserQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(this.http.get(`${this.usersUrl}/me${params}`));
  }
}
