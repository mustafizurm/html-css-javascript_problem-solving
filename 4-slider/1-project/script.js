const wrapper = document.querySelector(".wrapper");
const slides = document.querySelector(".slides");
const slideAll = document.querySelectorAll(".slide");
const slideWidth = document.querySelector(".slide").offsetWidth + 25;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let count = 0;


    const slidePosition = () =>{
         slides.style.transform = `translateX(${-slideWidth * count}px)`
         slides.style.transition = ".5s"
    }

    slidePosition()

    const increment = () =>{
        count ++
        slidePosition()
    }

    const decrement = () =>{
        count --;
        slidePosition()
    }

    const destinationEnd = () =>{
        slides.addEventListener("transitionend", ()=>{
            if(count > 6){
                count = 0;
                slides.style.transform = `translateX(${-slideWidth * count}px)`
                slides.style.transition = "none"
            }
        })
    }

next.addEventListener("click", ()=>{
    increment()
    destinationEnd();
})

prev.addEventListener("click", ()=>{
    decrement()

    slides.addEventListener("transitionend", ()=>{
        if(count < 0){
            count = 4;
            slides.style.transform = `translateX(${-slideWidth * count}px)`
            slides.style.transition = "none"
        }
    })

})

const timing = () =>{
   timeInterval = setInterval(()=>{
       increment()
       destinationEnd();
    },2000)
}

timing()

wrapper.addEventListener("mouseenter", ()=>{
    clearInterval(timeInterval)
})

wrapper.addEventListener("mouseleave", ()=>{
    timing();
})