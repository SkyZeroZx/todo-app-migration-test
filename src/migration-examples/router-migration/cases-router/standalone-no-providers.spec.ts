import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Standalone - no providers (case)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: []
    });
  });

  it('dummy', () => expect(true).toBeTrue());
});
