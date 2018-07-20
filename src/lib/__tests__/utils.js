import {
  camelize,
  underscore,
  isObject,
  deepMapKeys,
  difference,
} from '../utils';

/* strings */

describe('camelize', () => {
  it('converts "snake_case_string" to "snakeCaseString"', () => {
    expect(camelize('snake_case_string')).toBe('snakeCaseString');
  });

  it('doesn\'t modify "camelCaseString"', () => {
    expect(camelize('camelCaseString')).toBe('camelCaseString');
  });

  it('doesn\'t modify "bang!"', () => {
    expect(camelize('bang!')).toBe('bang!');
  });
});

describe('underscore', () => {
  it('converts "camelCaseString" to "camel_case_string"', () => {
    expect(underscore('camelCaseString')).toBe('camel_case_string');
  });

  it('doesn\'t modify "snake_case_string"', () => {
    expect(underscore('snake_case_string')).toBe('snake_case_string');
  });

  it('doesn\'t modify "bang!"', () => {
    expect(underscore('bang!')).toBe('bang!');
  });
});

/* objects */

describe('isObject', () => {
  const object = { a: 1, b: 2 };
  const notObjects = ['hello', [1, 2, 3], 42, '{}'];

  it('returns true for an object', () => {
    expect(isObject(object)).toBe(true);
  });

  it('returns false for things other than objects', () => {
    expect(notObjects.map(isObject)).not.toContain(true);
  });
});

describe('deepMapKeys', () => {
  let testObj = { hey: 'there', hows: { it: ['going?', 'good', 'bad?'] } };
  const expectedObj = {
    HEY: 'there',
    HOWS: { IT: ['going?', 'good', 'bad?'] }
  };
  const result = deepMapKeys(testObj, key => key.toUpperCase());

  it('applies a function to object keys recursively', () => {
    expect(result).toEqual(expectedObj);
  });

  it("doesn't mutate the original object", () => {
    expect(testObj).not.toEqual(expectedObj);
  });
});

