import { isPhone, isArray } from '../src';

describe('isPhone test', () => {
  it('works', () => {
    expect(isPhone('18380398257')).toEqual(true);
    expect(isPhone('1838039825')).toEqual(false);
  });
});

describe('array test', () => {
  it('works', () => {
    expect(isArray([1, 2])).toEqual(true);
    expect(isArray('11')).toEqual(false);
  });
});
