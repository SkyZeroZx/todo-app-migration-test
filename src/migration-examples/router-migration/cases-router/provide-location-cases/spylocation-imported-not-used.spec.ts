import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SpyLocation } from '@angular/common/testing';

describe('SpyLocation imported but not used', () => {
  let spyLocation: SpyLocation;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    spyLocation = TestBed.inject(SpyLocation as any);
  });

  it('dummy', () => expect(true).toBeTrue());
});
