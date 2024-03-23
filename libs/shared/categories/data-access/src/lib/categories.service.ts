import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IListCategoriesQueryParams,
  IRetrieveCategoryQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categoriesUrl = '/wp/v2/categories';

  constructor(private readonly http: HttpClient) {}

  getCategories(query?: IListCategoriesQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) => `${key}=${query[key as keyof IListCategoriesQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(this.http.get(`${this.categoriesUrl}${params}`));
  }

  getCategory(id: number, query?: IRetrieveCategoryQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IRetrieveCategoryQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get(`${this.categoriesUrl}/${id}${params}`)
    );
  }
}
