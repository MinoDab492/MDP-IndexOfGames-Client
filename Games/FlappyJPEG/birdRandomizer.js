let N = 2 // no of images
const imageBase='www.minodabproductions.cf/flappybird/';// relative or absolute url
if(N === '2') {
    document.querySelector(".img").src = `www.minodabproductions.cf/flappybird/bird2.png`
    console.log('bird2.png has been chosen, I should really all a title screen to make it say either Flappy JPEG or Flappy PNG. That would be kind of funny')
}
elif(N === '1') {
    document.querySelector(".img").src = `www.minodabproductions.cf/flappybird/bird1.jpg`
    console.log("Nothing is better than the original, bird1.jpeg has been chosen.")
}