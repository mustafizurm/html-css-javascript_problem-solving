// let testSlide = document.querySelectorAll(".item");
// let dots = document.querySelectorAll(".dot");

// var counter = 0;

// function switchTest(currentTest){
//     console.log(currentTest);
//     currentTest.classList.add('active');
//     var testId = currentTest.getAttribute("attr");

//     if(testId > counter){
//         testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
//         counter = testId;
//         testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
//     } else if(testId == counter){
//         return ;
//     } else{
//         testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
//         counter = testId;
//         testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
//     }
// }







let testSlide = document.querySelectorAll(".item");
let dots = document.querySelectorAll(".dot");

var counter = 0;



function switchTest(currentTest){

    // const testId = currentTest.getAttribute("attr");
    // let slide = testSlide[testId]
    // testSlide.forEach((slide)=>{
    //     slide.classList.remove("active")
    // })
    // slide.classList.add("active")

    // // button
    // dots.forEach((dot)=>{
    //     dot.classList.remove("active")
    // })
    // currentTest.classList.add("active")
    

    


    dots.forEach((dot)=>{
        dot.classList.remove('active');
    })

    currentTest.classList.add('active');
    var testId = currentTest.getAttribute("attr");

    if(testId > counter){
        testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = testId;
        testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    } else if(testId == counter){
        return ;
    } else{
        testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = testId;
        testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
}
