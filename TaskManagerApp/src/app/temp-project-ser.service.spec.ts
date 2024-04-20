import { TestBed } from '@angular/core/testing';

import { TempProjectSerService } from './temp-project-ser.service';

describe('TempProjectSerService', () => {
  let service: TempProjectSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempProjectSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
