import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IListPluginsQueryParams,
  IPlugin,
  IRetrievePluginQueryParams,
} from '@nexularpress/domain-interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PluginsService {
  private pluginsUrl = '/wp/v2/plugins';

  constructor(private readonly http: HttpClient) {}

  getPlugins(query?: IListPluginsQueryParams): Promise<IPlugin[]> {
    const params = query
      ? '?' +
        Object.keys(query)
          .map((key) => `${key}=${query[key as keyof IListPluginsQueryParams]}`)
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get<IPlugin[]>(`${this.pluginsUrl}${params}`)
    );
  }

  getPlugin(
    plugin: string,
    query?: IRetrievePluginQueryParams
  ): Promise<IPlugin> {
    const params = query
      ? '?' +
        Object.keys(query)
          .map(
            (key) => `${key}=${query[key as keyof IRetrievePluginQueryParams]}`
          )
          .join('&')
      : '';
    return firstValueFrom(
      this.http.get<IPlugin>(`${this.pluginsUrl}/${plugin}${params}`)
    );
  }
}
