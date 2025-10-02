import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyService } from '../fixtures/my-service';

describe('Standalone - remove imports property (case)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [MyService]
    });
  });

  it('dummy', () => expect(true).toBeTrue());
});
