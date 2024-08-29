// const buttons = document.querySelectorAll("li");

// buttons.forEach((btn)=>{

//     btn.addEventListener("click", (e)=>{
//         const currentBtn = e.target.dataset.name;
//         console.log(currentBtn);

//         // first step

//         const allBtn = btn;
//         const perticulerBtn = btn.dataset.name;
        
//         const active = document.querySelector(".active");
//         active.classList.remove("active")

//         if(currentBtn == perticulerBtn){
//             allBtn.classList.add("active")
//         }


//         // change data

//         const describes = document.querySelectorAll(".describe");


//         describes.forEach((describe)=>{
//             describe.classList.add('hidden')
//             const allDescribe = describe;
//             const currentDescribe = describe.dataset.name;


//             allDescribe.classList.add('hidden')
            
//             if(currentBtn == currentDescribe){
//                 allDescribe.classList.remove('hidden')

//             }
//         })
   
//     })

    
// })


// const describes = document.querySelectorAll(".describe");

// describes.forEach((describe)=>{
//     describe.classList.add('hidden')

// })


const buttons = document.querySelectorAll("li");
        buttons.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
        const currentBtn = e.target.dataset.name;
        
        // step-2
const describes = document.querySelectorAll('.describe');
        describes.forEach((describe)=>{
            describe.classList.remove('actives')
        const allDescribe = describe;
        const perticulerDescribe = allDescribe.dataset.name;

    // step-3
    
      describe.classList.remove('hidden')
      describe.classList.add('hide')

       if(currentBtn == perticulerDescribe){
        describe.classList.remove('hide')
       }
})
    })
})




// 




const tabButtons = document.querySelectorAll("li");
tabButtons.forEach((tabBtn)=>{

    tabBtn.addEventListener("click", (e)=>{

        const active = document.querySelector('.active').classList.remove('active')

        const currentBtn = e.target.dataset.name;
 
        const allTabBtn = tabBtn;
        const perticulerBtn = allTabBtn.dataset.name;

        if(currentBtn == perticulerBtn){
            allTabBtn.classList.add('active');
        }
        
    })
})