import { TestBed } from '@angular/core/testing';

import { QualifiersApiService } from './qualifiers-api.service';

describe('QualifiersApiService', () => {
  let service: QualifiersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualifiersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
