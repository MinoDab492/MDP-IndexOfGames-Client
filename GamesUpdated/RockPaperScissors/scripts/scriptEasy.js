function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function play(userChoice) {
    computer = computerChoice();
  
    if(userChoice === 'scissors') {
        computer = 'paper'
        }
    if(userChoice === 'paper') {
        computer = 'rock'
        }
    if(userChoice === 'rock') {
        computer = 'scissors'
        }
    

    if (
      (computer === 'rock' && userChoice === 'scissors') ||
      (computer === 'paper' && userChoice === 'rock') ||
      (computer === 'scissors' && userChoice === 'paper')
    ) {
      setResult(`You win! ${userChoice} beats ${computer}.`);
    } else if (userChoice === computer) {
      setResult('You win! paper beats rock.');
    } else {
      setResult(`You win! ${computer} is beaten by ${userChoice}.`);
    }
  }
  
  function setResult(message) {
    document.getElementById('result').innerText = message;
  }
  