const positiveSum = require('../01-SumOfPositive');
const partlist = require('../02-PartsOfAList');
const removeChar = require('../03-RemoveFirstAndLastCharacter');
const countLanguages = require('../04-PrepareTheCountOfLanguages');

//test1

describe('Sum of positive', () => {
  let array;
  beforeAll(() => {
    array = [];
  });
  describe('general tests', () => {
    test('function returns 0 if an array is empty', () => {
      expect(positiveSum(array)).toBe(0);
    });
  });
  describe('functional tests', () => {
    test('function returns an array with sum of all positive numbers', () => {
      array.push(1, 2, 3, 4);
      expect(positiveSum(array)).toBe(10);
    });
    test('if array numbers are negative the function returns 0', () => {
      array = [-1, -2, -3];
      expect(positiveSum(array)).toBe(0);
    });
    test('function doesnt include negative numbers into a sum', () => {
      let array = [1, 2, 3, -3, 4];
      expect(positiveSum(array)).toBe(10);
    });
  });
});

//test 2
describe('partlist', () => {
  let array;
  beforeAll(() => {
    array = [];
  });
  describe('general tests', () => {
    test('function returns an array', () => {
      array = [];
      expect(Array.isArray(partlist(array))).toBe(true);
    });
  });
  describe('functional tests', () => {
    test('Each two non empty parts will be in a pair', () => {
      array = ['some', 'strings', 'of', 'array'];
      expect(partlist(array)).toEqual([
        ['some', 'strings of array'],
        ['some strings', 'of array'],
        ['some strings of', 'array'],
      ]);
    });
    test('Each part will be in a string', () => {
      array = [1, 2, 3, 4];
      expect(partlist(array)).toEqual([
        ['1', '2 3 4'],
        ['1 2', '3 4'],
        ['1 2 3', '4'],
      ]);
    });
    test('Elements of a pair must be in the same order as in the original array', () => {
      array = ['some', 'words', 'of', 'array'];
      expect(partlist(array)).toEqual([
        ['some', 'words of array'],
        ['some words', 'of array'],
        ['some words of', 'array'],
      ]);
    });
  });
});

//test 3:
describe('removeChar', () => {
  beforeAll(() => {
    let string = '';
  });
  describe('general tests', () => {
    test('function returns a string', () => {
      string = '';
      expect(removeChar(string)).toBe('');
    });
  });
  describe('functional tests', () => {
    beforeEach(() => {
      string = 'i am some string';
    });
    test('function returns a string even if the number is given in a string', () => {
      string = '12345';
      expect(removeChar(string)).toBe('234');
    });
    test('function returns empty string if the string with less than two characters is given', () => {
      string = 'm';
      expect(removeChar(string)).toBe('');
    });
    test('function deletes the first and the last character', () => {
      expect(removeChar(string)).toBe(' am some strin');
    });
    test('checkpoint with a bigger sentence', () => {
      string =
        'Come feed the rain, cuz i am thirsty for your love,dancing underneath the skies of lust';
      expect(removeChar(string)).toBe(
        'ome feed the rain, cuz i am thirsty for your love,dancing underneath the skies of lus'
      );
    });
  });
});

//test 4:
describe('countLanguages', () => {
  let participants;
  beforeAll(() => {
    participants = [{}];
  });
  describe('general tests', () => {
    test('function returns an object inside', () => {
      expect(typeof countLanguages(participants) === 'object').toBeTruthy();
    });
    test('function returns an empty array if the same is given', () => {
      participants = [];
      expect(countLanguages(participants)).toEqual({});
    });
  });
  describe('functional tests', () => {
    beforeEach(() => {
      participants = [];
    });
    test('The count value should be a valid number', () => {
      participants = [
        {
          firstName: 'Noah',
          lastName: 'M.',
          country: 'Switzerland',
          continent: 'Europe',
          age: 19,
          language: 'C',
        },
        {
          firstName: 'Anna',
          lastName: 'R.',
          country: 'Liechtenstein',
          continent: 'Europe',
          age: 52,
          language: 'JavaScript',
        },
        {
          firstName: 'Ramon',
          lastName: 'R.',
          country: 'Paraguay',
          continent: 'Americas',
          age: 29,
          language: 'Ruby',
        },
        {
          firstName: 'George',
          lastName: 'B.',
          country: 'England',
          continent: 'Europe',
          age: 81,
          language: 'C',
        },
      ];
      expect(countLanguages(participants)).toEqual({
        C: 2,
        JavaScript: 1,
        Ruby: 1,
      });
    });
  });
});
