import isValid from 'date-fns/isValid';

export function appendZeroIfOneDigit(value) {
  if (value < 10) {
    return `0${value}`;
  }
  return value.toString();
}

const calculateTimeLeft = targetDateTime => {
  try {
    if (isValid(targetDateTime)) {
      const difference = targetDateTime - new Date();

      if (difference > 0) {
        return {
          days: appendZeroIfOneDigit(
            Math.floor(difference / (1000 * 60 * 60 * 24))
          ),
          hours: appendZeroIfOneDigit(
            Math.floor((difference / (1000 * 60 * 60)) % 24)
          ),
          minutes: appendZeroIfOneDigit(
            Math.floor((difference / 1000 / 60) % 60)
          ),
          seconds: appendZeroIfOneDigit(Math.floor((difference / 1000) % 60)),
        };
      }

      return null;
    }

    throw new Error('Invalid Date!');
  } catch (error) {
    if (process.env.NODE_ENV !== 'test') {
      console.error(error);
    }
    return null;
  }
};

export default calculateTimeLeft;
