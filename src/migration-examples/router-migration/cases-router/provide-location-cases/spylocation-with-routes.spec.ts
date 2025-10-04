import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SpyLocation } from '@angular/common/testing';
import { TestComponent } from '../test.component';

const routes = [{path: 'test', component: TestComponent}];

describe('SpyLocation with routes + options', () => {
  let spy: SpyLocation;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes, { useHash: true })],
    });
    spy = TestBed.inject(SpyLocation as any);
    spy.urlChanges;
  });

  it('dummy', () => expect(true).toBeTrue());
});
