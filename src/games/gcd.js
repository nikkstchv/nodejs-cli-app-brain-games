import { engine } from '..';
import { cons } from 'hexlet-pairs';
import { generateNumber } from './utils';


const greeting = 'What is the result of the expression?';

const gcdData = () => {
  const num1 = generateNumber(1, 15);
  const num2 = generateNumber(1, 15);
  const question = `${num1} ${num2}`;
  const answer = (num1, num2) => {
    if (num2 > 0) {
      const r = num1 % num2;
      return answer(num2, r);
    }
    return num1;
  };
  return cons(question, String(answer));
};

export default () => engine(greeting, gcdData);
