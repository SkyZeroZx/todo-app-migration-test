import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocationStrategy } from '@angular/common';
import { Location } from '@angular/common';

describe('test - LocationStrategy only', () => {
  let mockLocationStrategy: LocationStrategy;
  let location: Location;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LocationStrategy],
    });
    mockLocationStrategy = TestBed.inject(LocationStrategy);
    location = TestBed.inject(Location);
  });

  it('uses urlChanges', () => {
    expect(location).toBeDefined();
  });
});
