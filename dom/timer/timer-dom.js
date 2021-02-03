// console.log("time to start the timer!");


// total amount of time 
const startingTime = 5;
//minutes * seconds 
let time = startingTime * 60;

//timer component: id = main id
const timerElement = document.getElementById('timer');

//calls the function every second
const intervalID = setInterval(updateTimer, 1000);

//function to update timer every second
function updateTimer() {
  //calculate the remaining time in minutes and seconds
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  timerElement.innerHTML = `${minutes}: ${seconds}`;
  //decreases time 
  time--;
}
function test() {
  console.log("clicked");
}

const startButton = document.querySelector('#start');
console.log(startButton);

const stopButton = document.querySelector('#stop');
console.log(stopButton);

const resetButton = document.querySelector('#reset');
console.log(resetButton);

console.log("time to start the timer!");
