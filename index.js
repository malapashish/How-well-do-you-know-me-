let readlineSync = require('readline-sync');
const chalk = require('chalk');
let score = 0;

const highScore = [
  {
    name : 'Simon',
    personalScore : 5
  },
  {
    name : 'Jhosh',
    personalScore : 4
  }
]

// const questions = [
//   {
//     question : 'My favourite anime',
//     answer : 'Naruto'
//   },
//   {
//     question : 'My favourite food',
//     answer : 'Pav Bhaji'
//   },
//   {
//     question : 'My favourite movie',
//     answer : 'KGF'
//   },
//   {
//     question : 'My favourite sports',
//     answer : 'Football'
//   },
//   {
//     question : 'My favourite song',
//     answer : 'Baby'
//   },
//   {
//     question : 'My favourite color',
//     answer : 'Red'
//   }
// ]

// const quiz = () => {
//   for(let i = 0 ; i < questions.length ; i++){
//     checkAnswers(questions[i]);
//   }
// };

// const checkAnswers = (quizQuestions) => {
//   const userAnswer = readlinSync.question(chalk.yellowBright(quizQuestions.question + ' ')).toUpperCase();
//   if(userAnswer === quizQuestions.answer.toUpperCase()){
//     score++;
//     console.log(chalk.green('Your answer was right ‍'));
//   }else{
//     console.log(chalk.red('Your answer was wrong'));
//     console.log(chalk.cyanBright(`Right answer was ${quizQuestions.answer}`))
//   }
//   console.log(chalk.blue(`Current Score : ${score}`)); 
// }

// quiz();

// const checkHighScore = () => {
// for(let i = 0 ; i < highScore.length ; i++){
//   if(highScore[i].personalScore <= score){
//     console.log(chalk.greenBright(`Congratulations You have beaten ${highScore[i].name}'s highscore`));
//   }else{
//     console.log(chalk.white(`${highScore[i].name}'s highscore was ${highScore[i].personalScore}`))
//   } 
// }
// }

// checkHighScore();

console.log(chalk.bgGreenBright("Welcome to the quiz")) 
let userName = readlineSync.question(chalk.bgBlueBright("What's your Name: \n")); 
console.log(chalk.bgCyan(`Hello ${userName}. Let's start the quiz`));
console.log('\n');
console.log('Rules & Instructions: ');
console.log('1.',userName + ', There are 6 questions about to see how well do you know me');
console.log('2. You will get 1 points on each Right Answer.');
console.log('3. No Point will be deducted if the Answer is Wrong.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');
console.log('\n');

const questions = [
  { 
    answerArray : ['One Piece' , 'Naruto' , 'Bleach' , 'Demon Slayer'],
    question : 'My favourite anime',
    answer : 'Naruto'
  },
  {
    answerArray : ['Vada Pav' , 'Pav Bhaji' , 'Chicken Lollipop' , 'Momos'],
    question : 'My favourite food',
    answer : 'Pav Bhaji'
  },
  {
    answerArray : ['KGF' , 'Joker' , 'IT' , 'PK'],
    question : 'My favourite movie',
    answer : 'PK'
  },
  {
    answerArray : ['Cricket' , 'F1' , 'Football' , 'Vollyball'],
    question : 'My favourite sports',
    answer : 'Football'
  },
  {
    answerArray : ['Khairiyat' , 'Chana Mereya' , 'Life is Good' , 'Runaway'],
    question : 'My favourite song',
    answer : 'Life is Good'
  },
  {
    answerArray : ['Red' , 'Blue' , 'Pink' , 'Black'],
    question : 'My favourite color',
    answer : 'Red'
  }
]

const quiz = () => {
  for(var i = 0;i<questions.length;i++){
    console.log('\n');
    checkAnswers(questions[i].answerArray,questions[i].question,questions[i].answer);
    console.log('*******************************');
  }
}

const checkAnswers = (listOfAnswers , question , answer ) => {
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
    score++;
    console.log(chalk.green('Your answer was right ‍'));
  }else{
    console.log(chalk.red('Your answer was wrong'));
    console.log(chalk.cyanBright(`Right answer was ${answer}`))
  }
  console.log(chalk.blue(`Current Score : ${score}`)); 
}

quiz();


 const checkHighScore = () => {
for(let i = 0 ; i < highScore.length ; i++){
  if(highScore[i].personalScore <= score){
    console.log(chalk.greenBright(`Congratulations You have beaten ${highScore[i].name}'s highscore`));
  }else{
    console.log(chalk.white(`${highScore[i].name}'s highscore was ${highScore[i].personalScore}`))
  } 
}
}

checkHighScore();