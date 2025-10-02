import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocationStrategy } from '@angular/common';

describe('provideLocationMocks - LocationStrategy imported (case)', () => {
  let mockLocationStrategy: LocationStrategy;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule] });
  });

  it('dummy', () => expect(true).toBeTrue());
});
