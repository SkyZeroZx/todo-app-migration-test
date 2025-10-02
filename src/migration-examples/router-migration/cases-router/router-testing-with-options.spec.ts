import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from './test.component';

const routes = [{ path: 'opt', component: TestComponent }];

describe('RouterTestingModule.withRoutes with options (case)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes, { initialNavigation: 'enabledBlocking' })],
    });
  });

  it('dummy', () => {
    expect(true).toBeTrue();
  });
});
