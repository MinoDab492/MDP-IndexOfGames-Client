// Function to generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to check if a number is odd
  function isOdd(num) {
    return num % 2 !== 0;
  }
  
  // Function to redirect to the appropriate page based on whether the number is odd or even
  function redirectToPage() {
    const randomNumber = getRandomNumber(1, 6);
    const redirectUrl = isOdd(randomNumber) ? 'FlappyPNG.html' : 'FlappyJPEG.html';
    window.location.href = redirectUrl;
  }
  
  // Call the function to initiate the process
  redirectToPage();
  