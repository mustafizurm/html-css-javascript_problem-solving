// window.addEventListener("scroll",()=>{

//     const items = document.querySelectorAll(".item");
//     items.forEach((item)=>{
//         const windowHeight = window.innerHeight;
//         const itemTop = item.getBoundingClientRect().top;

//         if(itemTop < windowHeight - 200){
//             item.classList.add('active');
//         } else{
//             item.classList.remove('active');
//         }
//     })

// })

// home

console.log(window.innerHeight);

window.addEventListener("scroll", () => {
  const foodItem = document.querySelectorAll(".food-item");

  foodItem.forEach((fItem) => {
    const windowHeight = window.innerHeight;

    const itemTop = fItem.getBoundingClientRect().top;
    console.log(itemTop);
    console.log(windowHeight);

    if (itemTop < windowHeight - 120) {
      fItem.classList.add("active");
    } else {
      fItem.classList.remove("active");
    }
  });

  // home

});


window.addEventListener("scroll",()=>{
    const foodHeading = document.querySelector(".details");

    const detailsTop = foodHeading.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (detailsTop < windowHeight - 400) {
      foodHeading.classList.add("headingActive");
    }else{
      foodHeading.classList.remove("headingActive")
    }
})

// counter

window.addEventListener("scroll",()=>{
    

const studentIntervel = setInterval(students, 0.1);
var StudentCount = 0;

function students (){
    StudentCount ++;
    const student = document.querySelector(".student");
    student.innerHTML = StudentCount;

    if(StudentCount == 1000){
        clearInterval(studentIntervel)
    }

}


const examInterVel = setInterval(exam, 40);
var examCount = 0;
function exam(){
    examCount ++;
    const exam = document.querySelector(".exam");
    exam.innerHTML = examCount;

    if(examCount == 100){
        clearInterval(examInterVel)
    }

}



const teacherInterVel = setInterval(teacher, 10);
var teacherCount = 0;
function teacher(){
    teacherCount ++;
    const teacher = document.querySelector(".teacher");
    teacher.innerHTML = teacherCount;

    if(teacherCount == 500){
        clearInterval(teacherInterVel)
    }

}
})