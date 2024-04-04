import { TestBed } from '@angular/core/testing';

import { CassoniService } from './cassoni.service';

describe('CassoniService', () => {
  let service: CassoniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CassoniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
