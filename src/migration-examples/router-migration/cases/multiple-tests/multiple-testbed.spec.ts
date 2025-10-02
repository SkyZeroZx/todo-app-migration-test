import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

class DummyService {}

describe('Multiple TestBed calls (fixture)', () => {
  it('test 1', () => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule], providers: [DummyService] });
    expect(true).toBeTrue();
  });

  it('test 2', () => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule.withRoutes([])], providers: [DummyService] });
    expect(true).toBeTrue();
  });
});
