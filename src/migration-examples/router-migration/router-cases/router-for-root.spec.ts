import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

describe('RouterModule.forRoot usage (fixture)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterModule.forRoot([])] });
  });

  it('dummy test', () => {
    expect(true).toBeTrue();
  });
});
