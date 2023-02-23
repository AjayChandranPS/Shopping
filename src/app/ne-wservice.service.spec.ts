import { TestBed } from '@angular/core/testing';

import { NeWServiceService } from './ne-wservice.service';

describe('NeWServiceService', () => {
  let service: NeWServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeWServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
