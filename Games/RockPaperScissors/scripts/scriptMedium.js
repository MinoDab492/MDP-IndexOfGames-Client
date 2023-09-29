function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function play(userChoice) {
    const computer = computerChoice();
  
    if (userChoice === computer) {
      setResult('It\'s a tie!');
    } else if (
      (userChoice === 'rock' && computer === 'scissors') ||
      (userChoice === 'paper' && computer === 'rock') ||
      (userChoice === 'scissors' && computer === 'paper')
    ) {
      setResult(`You win! ${userChoice} beats ${computer}.`);
    } else {
      setResult(`You lose! ${computer} beats ${userChoice}.`);
    }
  }
  
  function setResult(message) {
    document.getElementById('result').innerText = message;
  }
  