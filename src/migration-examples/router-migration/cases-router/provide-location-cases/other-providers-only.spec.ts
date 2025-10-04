import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location, ViewportScroller } from '@angular/common';

describe('test - other providers only', () => {
  let mockLocation: Location;
  let mockViewportScroller: ViewportScroller;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ViewportScroller],
    });
    mockLocation = TestBed.inject(Location);
  });

  it('uses onUrlChange', () => {
    expect(mockLocation.onUrlChange).toBeDefined();
  });
});
