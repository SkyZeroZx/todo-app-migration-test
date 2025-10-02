import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Multiple TestBed calls (case)', () => {
  it('test 1', () => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule] });
    expect(true).toBeTrue();
  });

  it('test 2', () => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule.withRoutes([])] });
    expect(true).toBeTrue();
  });
});
