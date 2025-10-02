import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location, ViewportScroller } from '@angular/common';

describe('provideLocationMocks - existing providers (case)', () => {
  let mockLocation: Location;
  let mockViewportScroller: ViewportScroller;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ViewportScroller]
    });
  });

  it('dummy', () => expect(true).toBeTrue());
});
