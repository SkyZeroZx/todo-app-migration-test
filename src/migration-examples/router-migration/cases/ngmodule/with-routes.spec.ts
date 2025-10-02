import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

const routes = [{ path: 'test', component: class TestComponent {} }];

describe('NgModule - RouterTestingModule.withRoutes (fixture)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [Location]
    });
  });

  it('dummy test', () => {
    expect(true).toBeTrue();
  });
});
