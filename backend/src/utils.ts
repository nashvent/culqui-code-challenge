import Crypto from 'crypto';

export const generateRandomString = (size = 20) => {  
    return Crypto
      .randomBytes(size * 4)
      .toString('base64')
      .replace(/\+/g,'p1L2u3S')
      .replace(/\//g,'s1L2a3S4h')
      .replace(/=/g,'e1Q2u3A4l')
      .slice(0, size)
  }

  export const luhnCheck = (num: string) => {
    const arr = (num + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    const lastDigit = arr.shift();
    let sum = arr.reduce(
      (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)),
      0
    );
    sum += lastDigit;
    return sum % 10 === 0;
  };