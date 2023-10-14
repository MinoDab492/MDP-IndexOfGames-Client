function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function play(userChoice) {
    computer = computerChoice();

    if(userChoice === 'scissors') {
        computer = 'rock'
        }
    if(userChoice === 'paper') {
        computer = 'scissors'
        }
    if(userChoice === 'rock') {
        computer = 'paper'
        }
  
    if (
      (userChoice === 'rock' && computer === 'paper') ||
      (userChoice === 'paper' && computer === 'scissors') ||
      (userChoice === 'scissors' && computer === 'rock')
    ) {
      setResult(`You lose! ${computer} beats ${userChoice}.`);
    } else if (userChoice === computer) {
      setResult('It\'s a tie!');
    } else {
      setResult(`You win! ${userChoice} beats ${computer}.`);
    }
  }
  
  function setResult(message) {
    document.getElementById('result').innerText = message;
  }
  