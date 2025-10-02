import { TestBed } from '@angular/core/testing';
import { LocationStrategy } from '@angular/common';

describe('provideLocationMocks - mocked LocationStrategy (case)', () => {
  let mockLocationStrategy: LocationStrategy;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [{ provide: LocationStrategy, useValue: { path: () => '/test' } }] });
  });

  it('dummy', () => expect(true).toBeTrue());
});
