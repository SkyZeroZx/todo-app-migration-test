import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Location } from '@angular/common';

describe('provideLocationMocks - other imports preserved (case)', () => {
  let mockLocation: Location;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule, RouterTestingModule] });
  });

  it('dummy', () => expect(true).toBeTrue());
});
