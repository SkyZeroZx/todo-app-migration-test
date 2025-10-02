import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location, LocationStrategy } from '@angular/common';

describe('provideLocationMocks - both imported (case)', () => {
  let mockLocation: Location;
  let mockLocationStrategy: LocationStrategy;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule] });
  });

  it('dummy', () => expect(true).toBeTrue());
});
