import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

class RemovalProvider {}

describe('Import hygiene - removal (fixture)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [RemovalProvider]
    });
  });

  it('dummy test', () => {
    expect(true).toBeTrue();
  });
});
