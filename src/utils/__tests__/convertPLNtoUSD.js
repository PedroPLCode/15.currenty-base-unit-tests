import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
});

describe("TestNaNforPLNtoUSDinputString", () => {
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('1')).toBeNaN();
    expect(convertPLNToUSD('2')).toBeNaN();
    expect(convertPLNToUSD('20')).toBeNaN();
    expect(convertPLNToUSD('12')).toBeNaN();
  });
});

describe("TestNaNforPLNtoUSDinputEmpty", () => {
    it('should return NaN when input is empty', () => {
      expect(convertPLNToUSD()).toBeNaN();
    });
  });

describe("TestNaNforPLNtoUSDinputUndefined", () => {
  it('should return NaN when input is undefined', () => {
    expect(convertPLNToUSD(undefined)).toBeNaN();
  });
});

describe("TestErrorForPLNtoUSDinput", () => {
    it('should return "Error" when input is not a string and not a number', () => {
        expect(convertPLNToUSD([1, 2, 3])).toBe('Error');
        expect(convertPLNToUSD({Blablabla: 'Tralala'})).toBe('Error');
        expect(convertPLNToUSD(null)).toBe('Error');
        expect(convertPLNToUSD(function(e) {return e})).toBe('Error');
    });
  });

describe("TestForPLNtoUSDinputBelowOrEqualZero", () => {
  it('should return "$0.00" when input is lower than or equal 0', () => {
    expect(convertPLNToUSD(-0.0001)).toBe('$0.00');
    expect(convertPLNToUSD(-19)).toBe('$0.00');
    expect(convertPLNToUSD(-3)).toBe('$0.00');
    expect(convertPLNToUSD(0)).toBe('$0.00');
  });
});
