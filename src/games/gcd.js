import engine from '..';
import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';

const greeting = 'Find the greatest common divisor of given numbers.';

const greatestDivisor = (num1, num2) => {
  if (num2 > 0) {
    const r = num1 % num2;
    return greatestDivisor(num2, r);
  }
  return num1;
};


const gcdData = () => {
  const num1 = generateNumber(1, 15);
  const num2 = generateNumber(1, 15);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(greatestDivisor(num1, num2));
  return cons(question, correctAnswer);
};

export default () => engine(greeting, gcdData);
