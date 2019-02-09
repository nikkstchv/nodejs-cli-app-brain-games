import readlineSync from 'readline-sync';

const askName = () => {

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

},

 const max = 100;
 const min = 1;

 evenNum = () => {

  const userName = askName();
  const iterMax = 3;
  for (let iter = 0; iter < iterMax; iter += 1) {
    const question = Math.round(min + (Math.random() * (max - min))),
    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer}`);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {

      console.log('Correct!');

    } else {

      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}`);

     }

    }

console.log(`Congratulations, ${userName}`);

};
export {askName, evenNum};
