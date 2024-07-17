const display = document.querySelector(".display").querySelector("input");

const buttons = document.querySelector(".buttons").querySelectorAll(".button");

const calculate = document.querySelector("#calculate");
const clear = document.querySelector("#clear");


buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const currectButtonData = e.target.dataset.name;
        display.value = display.value + currectButtonData;

    })
})

clear.addEventListener("click", ()=>{
    display.value = ""
})

calculate.addEventListener("click", ()=>{
    try {
        display.value = eval(display.value) 
    } catch (error) {
        display.value = error;
    }
})




