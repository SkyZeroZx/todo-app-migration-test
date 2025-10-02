import { Location, LocationStrategy } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Module route', () => {
  let mockLocationStrategy: LocationStrategy;
  let mockLocation: Location;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: LocationStrategy,
          useValue: {
            path: () => {
              return '';
            },
          },
        },
        {
          provide: Location,
          useValue: {
            path: () => {
              return '';
            },
          },
        },
      ],
    });
  });

  it('dummy: should be true', () => {
    expect(true).toBeTrue();
  });
});
