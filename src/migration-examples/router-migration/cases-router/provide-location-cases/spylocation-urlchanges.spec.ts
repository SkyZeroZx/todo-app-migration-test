import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpyLocation } from '@angular/common/testing';

describe('SpyLocation with use urlChanges', () => {
  let spy: SpyLocation;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    spy = TestBed.inject(SpyLocation as any);
    spy.urlChanges;
  });

  it('dummy', () => expect(true).toBeTrue());
});
