import { TestBed } from '@angular/core/testing';

import { CountrysingleService } from './countrysingle.service';

describe('CountrysingleService', () => {
  let service: CountrysingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrysingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
