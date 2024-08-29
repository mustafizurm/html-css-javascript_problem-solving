const number = document.getElementById("number");

let endValue = 90;
let startValue = 0;
let speed = 10;

const progress = setInterval(()=>{
  startValue ++

  number.innerText = startValue + "%";

  if(startValue === endValue){
    clearInterval(progress)
  }

},speed)