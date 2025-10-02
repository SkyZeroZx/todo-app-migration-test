import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from './test.component';

const routes = [{path: 'test', component: TestComponent}];

describe('NgModule - RouterTestingModule.withRoutes (case)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)]
    });
  });

  it('dummy', () => expect(true).toBeTrue());
});
