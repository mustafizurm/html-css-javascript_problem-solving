







const slideContainer = document.querySelector(".container");
const slide = document.querySelector(".slides");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");

let index = 0;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone)
slide.prepend(lastClone)



const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index} px)`

const startSlide = () =>{
    setInterval(()=>{
        moveToNextSlide()
    }, 2000)
}



slide.addEventListener("transitionend", ()=>{
    if(index > 4){
        slide.style.transition = "none";
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
})


const moveToNextSlide = () =>{
    index ++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = ".4s"
}



startSlide()






