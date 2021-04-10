let readlinSync = require('readline-sync');
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

const questions = [
  {
    question : 'My favourite anime',
    answer : 'Naruto'
  },
  {
    question : 'My favourite food',
    answer : 'Pav Bhaji'
  },
  {
    question : 'My favourite movie',
    answer : 'KGF'
  },
  {
    question : 'My favourite sports',
    answer : 'Football'
  },
  {
    question : 'My favourite song',
    answer : 'Baby'
  },
  {
    question : 'My favourite color',
    answer : 'Red'
  }
]

const quiz = () => {
  for(let i = 0 ; i < questions.length ; i++){
    checkAnswers(questions[i]);
  }
};

const checkAnswers = (quizQuestions) => {
  const userAnswer = readlinSync.question(chalk.yellowBright(quizQuestions.question + ' ')).toUpperCase();
  if(userAnswer === quizQuestions.answer.toUpperCase()){
    score++;
    console.log(chalk.green('Your answer was right'));
  }else{
    console.log(chalk.red('Your answer was wrong'));
    console.log(chalk.cyanBright(`Right answer was ${quizQuestions.answer}`))
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

