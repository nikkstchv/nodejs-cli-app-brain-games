import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};
const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
const iterMax = 3;

const engine = (gameGreeting, gameData) => {
  welcome();
  console.log(gameGreeting);
  const userName = askName();
  for (let iter = 0; iter < iterMax; iter += 1) {
    const question = car(gameData);
    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer}`);

    const correctAnswer = cdr(gameData);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default engine;
