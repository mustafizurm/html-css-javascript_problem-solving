// const buttons = document.querySelectorAll("i");

// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const currentBtn = e.target.dataset.name;

//     const seconds = document.querySelectorAll(".second");
//     seconds.forEach((second) => {
//       const allSecond = second;
//       const perticulerSecond = allSecond.dataset.name;

//       if (currentBtn == perticulerSecond) {
//         allSecond.classList.toggle("hide");
//       }
//     });
//   });
// });

// practice-2

// const buttons = document.querySelectorAll("i");
// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const currentBtn = e.target.dataset.name;

//     // second step
//     const items = document.querySelectorAll(".second");
//     items.forEach((item) => {
//       const allItem = item;
//       const perticulerItem = allItem.dataset.name;


//       if (currentBtn == perticulerItem) {
//         allItem.classList.toggle("show");
//       }
//     });
//   });
// });


const buttons = document.querySelectorAll("i");
buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const currentBtn = e.target.dataset.name;
        const perticulerBtn = btn.dataset.name;
          
        if(currentBtn == perticulerBtn){
            btn.classList.toggle('rotate')
        }
        
        const items = document.querySelectorAll(".second");
        items.forEach((item)=>{
            const allItem = item;
            const perticulerItem = allItem.dataset.name;

            if(currentBtn == perticulerItem){
                allItem.classList.toggle('show');
            }
        })
    })
})