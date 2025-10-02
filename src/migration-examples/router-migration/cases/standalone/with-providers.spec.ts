import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

const routes = [{ path: 'test', component: class TestComponent {} }];

describe('Standalone - with existing providers (fixture)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [class SomeService {}],
    });
  });

  it('dummy test', () => {
    expect(true).toBeTrue();
  });
});
