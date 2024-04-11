import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostTypesService {
  private postTypesUrl = '/wp/v2/types';

  constructor(private readonly http: HttpClient) {}

  getPostTypes() {
    return this.http.get(this.postTypesUrl);
  }

  getPostType(type: string) {
    return this.http.get(`${this.postTypesUrl}/${type}`);
  }
}
