import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

const appRoutes = [{ path: 'test', component: class TestComponent {} }];

describe('Edge - routes as identifier (fixture)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule.withRoutes(appRoutes)] });
  });

  it('dummy test', () => {
    expect(true).toBeTrue();
  });
});
