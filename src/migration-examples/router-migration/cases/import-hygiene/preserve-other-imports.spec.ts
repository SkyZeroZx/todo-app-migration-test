import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location, LocationStrategy } from '@angular/common';

describe('Import hygiene - preserve other imports (fixture)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: LocationStrategy, useValue: { path: () => '/test' } }],
    });
  });

  it('calls helper', () => {
    // simulate usage of setupTestingRouter

    expect(true).toBeTrue();
  });
});
