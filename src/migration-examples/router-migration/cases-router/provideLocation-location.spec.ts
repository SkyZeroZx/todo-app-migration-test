import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

describe('provideLocationMocks - Location imported (case)', () => {
  let mockLocation: Location;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule] });
  });

  it('dummy', () => expect(true).toBeTrue());
});
