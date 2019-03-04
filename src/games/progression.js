import engine from '..';
import generateNumber from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';

const greeting = 'What number is missing in the progression?';

const lengthProgression = 10;

const generateProgression = (start, step, length) => {
  let progression = '';
  let progressionElement;

  const hiddenElementPosition = generateNumber(1, lengthProgression);
  const hiddenElement = start + (hiddenElementPosition - 1) * step;

  for (let i = 1; i < length + 1; i += 1) {
    if (i === hiddenElementPosition) {
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

  const data = generateProgression(startOfProgression, stepOfProgression, lengthProgression);
  const question = car(data);
  const correctAnswer = String(cdr(data));

  return cons(question, correctAnswer);
};

export default () => engine(greeting, progressionData);
