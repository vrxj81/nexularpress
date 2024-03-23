import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IListTaxonomiesQueryParams,
  IRetrieveTaxonomyQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaxonomiesService {
  private taxonomiesUrl = '/wp/v2/taxonomies';

  constructor(private readonly http: HttpClient) {}

  getTaxonomies(query?: IListTaxonomiesQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) => `${key}=${query[key as keyof IListTaxonomiesQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(this.http.get(`${this.taxonomiesUrl}${params}`));
  }

  getTaxonomy(taxonomy: string, query?: IRetrieveTaxonomyQueryParams) {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) =>
              `${key}=${query[key as keyof IRetrieveTaxonomyQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get(`${this.taxonomiesUrl}/${taxonomy}${params}`)
    );
  }
}
