import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from './test.component';
import { SomeService } from '../fixtures/some-service';

const routes = [{path: 'test', component: TestComponent}];

describe('Standalone - with providers (case)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [SomeService]
    });
  });

  it('dummy', () => expect(true).toBeTrue());
});
