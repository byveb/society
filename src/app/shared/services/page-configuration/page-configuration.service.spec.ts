import { TestBed } from '@angular/core/testing';

import { PageConfigurationService } from './page-configuration.service';

describe('PageConfigurationService', () => {
  let service: PageConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
