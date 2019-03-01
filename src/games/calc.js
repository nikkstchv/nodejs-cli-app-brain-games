import { engine } from '..';
import { cons } from 'hexlet-pairs';

const greeting = 'What is the result of the expression?';

const generateNumber = (min, max) => {
  const result = Math.round(Math.random() * (max - min) + min);
  return result;
};

const calcData = () => {
  let question = '';
  let answer = 0;
  const num1 = generateNumber(1, 15);
  const num2 = generateNumber(1, 15);
  const randomNumber = generateNumber(1, 3);
  switch (randomNumber) {
    case 1: question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case 2: question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    default: question = `${num1} * ${num2}`;
      answer = num1 * num2;
  }
  return cons(question, String(answer));
};

export default () => engine(greeting, calcData);
