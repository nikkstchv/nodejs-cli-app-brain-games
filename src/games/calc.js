import engine from '..';
import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';

const greeting = 'What is the result of the expression?';

const calcData = () => {
  let question;
  let correctAnswer;

  const num1 = generateNumber(1, 15);
  const num2 = generateNumber(1, 15);

  const generateOperation = generateNumber(1, 3);
  switch (generateOperation) {
    case 1: question = `${num1} + ${num2}`;
      correctAnswer = String(num1 + num2);
      break;
    case 2: question = `${num1} - ${num2}`;
      correctAnswer = String(num1 - num2);
      break;
    default: question = `${num1} * ${num2}`;
      correctAnswer = String(num1 * num2);
  }
  return cons(question, correctAnswer);
};

export default () => engine(greeting, calcData);
