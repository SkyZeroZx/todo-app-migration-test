import { TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';

describe('provideLocationMocks - mocked Location (case)', () => {
  let mockLocation: Location;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [{ provide: Location, useValue: { path: () => '/test' } }] });
  });

  it('dummy', () => expect(true).toBeTrue());
});
