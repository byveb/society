import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { PageConfigurationService } from '..';
declare var window: any;

@Injectable()
export class InitService {

  constructor(private pageConfig: PageConfigurationService) { }

  public init(): Observable<any> {
    return from(
      fetch('assets/app-config.json').then((response) => {
        return response.json();
      })
    )
      .pipe(
        map((config) => {
          window.config = config;
          return config;
        })
      );
  }
}
