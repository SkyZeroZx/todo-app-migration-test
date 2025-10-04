import { TestBed } from '@angular/core/testing';
import { SpyLocation, provideLocationMocks } from '@angular/common/testing';
import { Location } from '@angular/common';

describe('SpyLocation with existing provideLocationMocks', () => {
  let mockLocation: Location;
  let spy: SpyLocation;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideLocationMocks()],
    });
    spy = TestBed.inject(SpyLocation as any);
    spy.urlChanges;
  });

  it('dummy', () => expect(true).toBeTrue());
});
