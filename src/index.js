import readlineSync from 'readline-sync';

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const calcGreeting = () => {
  console.log('What is the result of the expression?');
};

const evenGreeting = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
};

const iterMax = 3;
const max = 100;
const min = 1;
const isEven = number => number % 2 === 0;
const randomNum = Math.round(min + (Math.random() * (max - min)));
const getRandomInt = (miN, maX) => Math.floor(Math.random() * (maX - miN)) + miN;
const randomOperator = () => {
  let operator;
  const randomNumber = getRandomInt(1, 4);
  switch (randomNumber) {
    case 1: operator = '+';
      break;
    case 2: operator = '-';
      break;
    case 3: operator = '*';
      break;
    default: break;
  }
  return operator;
};

const evenNum = () => {
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

const calc = () => {
  const userName = askName();
  for (let iter = 0; iter < iterMax; iter += 1) {
    const question = `${randomNum} ${randomOperator()} ${randomNum}`;
    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer}`);

    const correctAnswer = Number(question);
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

export {
  welcome, evenGreeting, calcGreeting, askName, evenNum, calc,
};
