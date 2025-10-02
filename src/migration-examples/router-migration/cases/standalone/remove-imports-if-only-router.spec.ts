import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

class MyService {}

describe('Standalone - remove imports when only RouterTestingModule (fixture)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [MyService],
    });
  });

  it('dummy test', () => {
    expect(true).toBeTrue();
  });
});
