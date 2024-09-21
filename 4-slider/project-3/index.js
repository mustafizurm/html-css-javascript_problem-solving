const container = document.querySelector(".container")
const wrapper = document.querySelector(".wrapper")
const slides = document.querySelector(".slides")
const allslides = document.querySelectorAll(".slide")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const slideWidth = document.querySelector(".slide").offsetWidth;




let count = 0;

slides.style.transform = `translateX(${-slideWidth * count}px)`

const carouselChildrens = [...slides.children];



const increment = () =>{
    count ++
    startEnd()
    slides.style.transform = `translateX(${-400 * count}px)`
    slides.style.transition = '.5s';

}

const decrement = () =>{
    count --
    startEnd()
    slides.style.transform = `translateX(${-400 * count}px)`
    slides.style.transition = '.5s';
}





const startEnd = () =>{
    slides.addEventListener("transitionend", ()=>{
        if(count > 4){
            count = 0;
            slides.style.transform = `translateX(${-400 * count}px)`;
            slides.style.transition = 'none';
        } else if(count < 0){
            count = 4;
            slides.style.transform = `translateX(${-400 * count}px)`;
            slides.style.transition = 'none';
        }
    })
}



next.addEventListener("click", ()=>{
    increment()
})

prev.addEventListener("click", ()=>{
    decrement()
})













// carouselChildrens.slice(3).reverse().forEach(slide => {
//     slides.insertAdjacentHTML("afterbegin", slide.outerHTML);
//   });
  
//   carouselChildrens.slice(0, 3).forEach((slide) => {
//   slides.insertAdjacentHTML("beforeend", slide.outerHTML);
//   });
