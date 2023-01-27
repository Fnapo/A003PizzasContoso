import { TestBed } from '@angular/core/testing';

import { IdentificarGuard } from './identificar.guard';

describe('IdentificarGuard', () => {
  let guard: IdentificarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IdentificarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
