import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('No-op scenarios (fixture)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
  });

  it('dummy test', () => {
    expect(true).toBeTrue();
  });
});
