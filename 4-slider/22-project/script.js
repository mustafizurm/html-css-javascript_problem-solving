
const buttons = document.querySelectorAll(".buttons div");
const slider = document.querySelector(".slider");

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{

       const slide = document.querySelectorAll(".slide");

        if(btn.className === "next"){
            slider.appendChild(slide[0])
        } else{
            slider.prepend(slide[slide.length - 1])
        }
    })
})
