import { TestBed } from '@angular/core/testing';

import { TuplaLoginService } from './tupla-login.service';

describe('TuplaLoginService', () => {
  let service: TuplaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuplaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
