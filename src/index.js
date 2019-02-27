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

const isEven = number => number % 2 === 0;

const generateNumber = (min, max) => {
  const result = Math.round(Math.random() * (max - min) + min);
  return result;
};

const randomExpression = () => {
  let exp;
  const num1 = generateNumber(1, 15);
  const num2 = generateNumber(1, 15);
  const randomNumber = generateNumber(1, 4);
  switch (randomNumber) {
    case 1: exp = `${num1} + ${num2}`;
      break;
    case 2: exp = `${num1} - ${num2}`;
      break;
    case 3: exp = `${num1} * ${num2}`;
      break;
    default: break;
  }
  return exp;
};

const evenNum = () => {
  welcome();
  const userName = askName();
  for (let iter = 0; iter < iterMax; iter += 1) {
    const question = generateNumber(1, 100);
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

// решил пока написать функцию отдельно, т.к. пока даже она не работает
const calc = () => {
  welcome();
  const userName = askName();
  for (let iter = 0; iter < iterMax; iter += 1) {
    const question = randomExpression();
    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer}`);

    const correctAnswer = Number(question); // возвращает NaN не пойму как сделать
    console.log(correctAnswer);
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
