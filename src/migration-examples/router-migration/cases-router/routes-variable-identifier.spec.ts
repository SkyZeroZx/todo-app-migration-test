import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from './test.component';

const appRoutes = [{path: 'test', component: TestComponent}];

describe('routes as identifier (case)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes)]
    });
  });

  it('dummy', () => expect(true).toBeTrue());
});
