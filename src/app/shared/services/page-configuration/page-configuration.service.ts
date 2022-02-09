import { Injectable } from '@angular/core';
import { AppHttpClientService } from '..';
import { map, Observable } from 'rxjs';
import { AppEndpoints } from '@app/config';
import { AppResponse, PageConfigurations } from '@app/models';

@Injectable()
export class PageConfigurationService {
  private _endpoints = AppEndpoints;
  constructor(protected client: AppHttpClientService) { }

  public Get(): Observable<PageConfigurations> {
    let url = this._endpoints.base.concat(this._endpoints.configs.page);
    return this.client.Get<AppResponse<PageConfigurations>>(url).pipe(map
      ((x: AppResponse<PageConfigurations>) => x.data));
  }

  public GetVersion(): Observable<string> {
    let url = this._endpoints.base.concat(this._endpoints.configs.version);
    return this.client.Get<{ version: string }>(url).pipe(map(x => x.version));
  }

  public ValidateVersion(version: string): Observable<boolean> {
    return this.GetVersion().pipe(map(v => v == version))
  }
}