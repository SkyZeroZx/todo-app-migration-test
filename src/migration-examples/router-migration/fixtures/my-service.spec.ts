import { MyService } from './my-service';

describe('MyService (fixture)', () => {
  it('dummy: should be instantiable', () => {
    const s = new MyService();
    expect(s.doSomething()).toBeTrue();
  });
});
