import readlineSync from 'readline-sync';

const askName = () => {

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

},

 evenNum = () => {

  const userName = askName();
  for (let iter = 0; iter < 3; iter += 1) {
    const max = 100;
    const min = 1;
    const number = Math.round(min + (Math.random() * (max - min))),
    answer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${answer}`);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {

      console.log('Correct!');

} else {

      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\r\nLet's try again, ${userName}`);

}

}

return console.log(`Congratulations, ${userName}`);

};
export {askName, evenNum};
