import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location, LocationStrategy } from '@angular/common';

describe('test - both providers', () => {
  let mockLocation: Location;
  let mockLocationStrategy: LocationStrategy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LocationStrategy, Location],
    });
    mockLocationStrategy = TestBed.inject(LocationStrategy);
    mockLocation = TestBed.inject(Location);
  });

  it('uses onUrlChange', () => {
    expect(mockLocation.onUrlChange).toBeDefined();
  });
});
