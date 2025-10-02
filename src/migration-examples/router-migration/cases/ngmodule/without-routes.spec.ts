import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

class ProviderStub {}

describe('NgModule - RouterTestingModule (fixture)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule , CommonModule],
      providers: [ProviderStub]
    });
  });

  it('dummy test', () => {
    expect(true).toBeTrue();
  });
});
