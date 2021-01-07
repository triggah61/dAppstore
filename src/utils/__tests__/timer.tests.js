import { parseISO } from 'date-fns';
import timer, { appendZeroIfOneDigit } from '../timer';

describe('Timer', () => {
  it('shoud return the remaining time', () => {
    const date = new Date(parseISO('2040-10-11', 1));

    const timeLeft = timer(date);

    expect(timeLeft).not.toBeNull();
  });

  it('should return null if time is up', () => {
    const date = new Date(parseISO('2011-10-11', 1));

    const timeLeft = timer(date);

    expect(timeLeft).toBeNull();
  });

  it('should thow and error if the date is invalid', () => {
    const date = 'NOT_VALID_DATE_VALUE';

    try {
      timer(date);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'Invalid Date!');
    }
  });

  describe('Append Zero', () => {
    it('should append zeo if value single digit', () => {
      const value = appendZeroIfOneDigit(8);

      expect(value).toBe('08');
    });

    it('should append zeo if value is double digits', () => {
      const value = appendZeroIfOneDigit(10);

      expect(value).toBe('10');
    });
  });
});
