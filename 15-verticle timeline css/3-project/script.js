const buttons = document.querySelectorAll(".first");
const seconds = document.querySelectorAll(".second");
console.log(seconds);

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(btn.innerHTML == 1){
            console.log(btn);
            buttons[0].style.backgroundColor = "red";
        } else if(btn.innerHTML== 2){
            buttons[1].style.backgroundColor = "red";
            seconds[0].style.backgroundColor = "red";
        }
        else if(btn.innerHTML== 3){
            buttons[2].style.backgroundColor = "red";
            seconds[1].style.backgroundColor = "red";
        }
        else if(btn.innerHTML== 4){
            buttons[3].style.backgroundColor = "red";
            seconds[2].style.backgroundColor = "red";
        }
        else if(btn.innerHTML== 5){
            buttons[4].style.backgroundColor = "red"; 
            seconds[3].style.backgroundColor = "red";
        }
    })
})