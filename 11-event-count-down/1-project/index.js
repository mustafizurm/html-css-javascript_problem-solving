// var countDownDate = new Date("oct 23, 2024 00:00:00").getTime()



// var x = setInterval(()=>{
//     var now = new Date().getTime();
//     var distance = countDownDate - now;

//     var days = Math.floor(distance / (1000 * 60 * 60 *24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000  * 60)) / 1000);

// },1000)


const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

function countDown(){
   const futureDate = new Date("15 jun 2024");
   const currentDate = new Date();
   const myDate = futureDate - currentDate;

   var day = Math.floor(myDate / (1000 * 60 * 60 *24))

   var hour = Math.floor((myDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

   var minute = Math.floor((myDate %  (1000 * 60 * 60)) / (1000 * 60));

   var second = Math.floor((myDate % (1000  * 60)) / 1000);

   days.innerHTML = day;
   hours.innerHTML = hour;
   minutes.innerHTML = minute
   seconds.innerHTML = second;
   
}

setInterval(countDown, 1000)