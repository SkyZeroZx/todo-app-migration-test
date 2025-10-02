import { SomeService } from './some-service';

describe('SomeService (fixture)', () => {
  it('dummy: should be instantiable', () => {
    const s = new SomeService();
    expect(s.getValue()).toBe('some');
  });
});
