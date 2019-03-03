import engine from '..';
import generateNumber from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';

const greeting = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  let progression = '';
  let progressionElement = 0;
  let hiddenElement = 0;
  const missingElement = generateNumber(1, 10);

  for (let i = 1; i < length + 1; i += 1) {
    if (i === missingElement) {
      hiddenElement = start + (i - 1) * step;
      progressionElement = '..';
    } else {
      progressionElement = start + (i - 1) * step;
    }
    progression += `${progressionElement} `;
  }
  return cons(progression, hiddenElement);
};

const progressionData = () => {
  const startOfProgression = generateNumber(1, 10);
  const stepOfProgression = generateNumber(1, 3);
  const lengthProgression = 10;

  const progression = generateProgression(startOfProgression, stepOfProgression, lengthProgression);
  const question = car(progression);
  const correctAnswer = cdr(progression);

  return cons(question, String(correctAnswer));
};

export default () => engine(greeting, progressionData);
