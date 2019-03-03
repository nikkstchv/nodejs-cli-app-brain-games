import engine from '..';
import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';

const greeting = 'Find the greatest common divisor of given numbers.';

const correctAnswer = (num1, num2) => { // find the greatest common divisor of given numbers
  if (num2 > 0) {
    const r = num1 % num2;
    return correctAnswer(num2, r);
  }
  return num1;
};

const gcdData = () => {
  const num1 = generateNumber(1, 15);
  const num2 = generateNumber(1, 15);
  const question = `${num1} ${num2}`;
  return cons(question, String(correctAnswer));
};

export default () => engine(greeting, gcdData);
