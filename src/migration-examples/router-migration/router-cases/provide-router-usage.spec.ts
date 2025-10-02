import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

describe('provideRouter usage (fixture)', () => {
  beforeEach(() => {
    // simulate provider usage
    TestBed.configureTestingModule({ providers: [provideRouter([]) as any] });
  });

  it('dummy test', () => {
    expect(true).toBeTrue();
  });
});
