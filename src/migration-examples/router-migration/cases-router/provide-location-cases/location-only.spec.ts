import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

describe('test - Location only', () => {
  let mockLocation: Location;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [Location],
    });
    mockLocation = TestBed.inject(Location);
  });

  it('uses onUrlChange', () => {
    expect(mockLocation.onUrlChange).toBeDefined();
  });
});
