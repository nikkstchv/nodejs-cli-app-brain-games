import { engine } from '..';
import { cons } from 'hexlet-pairs';

const greeting = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const generateNumber = (min, max) => {
  const result = Math.round(Math.random() * (max - min) + min);
  return result;
};

const evenData = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, String(correctAnswer));
};
export default () => engine(greeting, evenData);
