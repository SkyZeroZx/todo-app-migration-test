import { TestBed } from '@angular/core/testing';
import { provideLocationMocks } from '@angular/common/testing';
import { Location } from '@angular/common';

describe('provideLocationMocks - already provided (case)', () => {
  let mockLocation: Location;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideLocationMocks()] });
  });

  it('dummy', () => expect(true).toBeTrue());
});
