import readlineSync from 'readline-sync';

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const gameName = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
};

const isEven = number => number % 2 === 0;
const iterMax = 3;
const max = 100;
const min = 1;

:const evenNum = () => {
  const userName = askName();
  for (let iter = 0; iter < iterMax; iter += 1) {
    const question = Math.round(min + (Math.random() * (max - min)));
    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer}`);

    const correctAnswer = isEven(question) ? 'yes' : 'no';
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
export { askName, evenNum };
