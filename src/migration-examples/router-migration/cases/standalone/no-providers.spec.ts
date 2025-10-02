import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

class DummyProvider {}

describe('Standalone - no providers (fixture)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [DummyProvider],
    });
  });

  it('dummy test', () => {
    expect(true).toBeTrue();
  });
});
