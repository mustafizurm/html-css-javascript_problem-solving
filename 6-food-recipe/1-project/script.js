// const btn = document.querySelector("#btn");
// const food_show_container = document.querySelector(".food-show-container");
// let input = document.querySelector("input");

// const apiLoad = async () => {
//   let inputValue = input.value.toLocaleLowerCase();

//   await fetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s= ${inputValue}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       showData(data);
//     });
// };

// const showData = (data) => {
//   food_show_container.innerHTML = "";
//   try {
//     data.meals.forEach((item) => {
//       let img = item.strMealThumb;
//       food_show_container.innerHTML += `
//                 <div onclick="handler('${encodeURIComponent(JSON.stringify(item))}')" class="item" >
//                     <img src = ${img} alt="">
//                     <h2>${item.strMeal}</h2i
//                 </div>
//             `;
//     });
//   } catch (error) {
//     food_show_container.innerHTML = `
//           <h1>Food Not Found</h1>
//         `;
//   }
// };

// const handler = (item) => {
// //   console.log(JSON.parse(decodeURIComponent(item)));

  // fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const meal = data.meals[0];
  //     console.log("Clicked Meal:", meal); // Log meal details
  //   });
// };

// btn.addEventListener("click", () => {
//   apiLoad();
//   input.value = "";
// });

// input.addEventListener("input", () => {
//   apiLoad();
// });







// const btn = document.querySelector("#btn");
// const food_show = document.querySelector(".food-show");
// let input = document.querySelector("input");

// const apiLoad = async () => {
//   let inputValue = input.value.toLocaleLowerCase();

//   await fetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s= ${inputValue}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       showData(data);
//     });
// };

// const showData = (data) => {
//   food_show.innerHTML = "";
//   try {
//     data.meals.forEach((item) => {
//       let img = item.strMealThumb;
//       food_show_container.innerHTML += `
//                 <div class="item" id=${item.idMeal}>
//                     <img src = ${img} alt="">
//                     <h2>${item.strMeal}</h2i
//                 </div>
//             `;
//     });

//   } catch (error) {
//     food_show.innerHTML = `
//           <h1>Food Not Found</h1>
//         `;
//   }



//   const items = document.querySelectorAll(".item");

//   items.forEach((item)=>{
//     item.addEventListener("click", (e)=>{
//       window.scrollTo(100,100)
//       const item = e.target.parentNode;
//       const img = item.querySelector("img").src;
//       const name = item.querySelector("h2").innerHTML;

//       const foodDetails_container = document.querySelector(".food-details-container")

//       foodDetails_container.innerHTML = `
      
//             <div class="card">
//                 <img src=${img} alt="">
//                 <h4>${name}</h4>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eius, ea adipisci quam ducimus impedit modi praesentium quas et molestiae earum totam, laborum dolore architecto officia accusamus sit aperiam cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab aliquam suscipit? Corporis velit nisi impedit exercitationem natus similique, labore laudantium laborum quaerat, eaque cum, dolorum blanditiis adipisci vitae! Dignissimos! ;Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque nulla nisi consequuntur impedit non omnis, aspernatur sed porro est minima quae laborum repudiandae veritatis corporis recusandae facilis. Porro, fugit.</p>
//                 <button class="removebtn">+</button>
//             </div>
      
//       `

      
//       foodDetails_container.classList.add("active")
//       food_show_container.classList.add("blur-active")

//       const rbtn = document.querySelector(".removebtn");
//        rbtn.addEventListener("click",()=>{
//       foodDetails_container.classList.remove("active")
//       food_show_container.classList.remove("blur-active")

//        })
//     })
//   })

// };



// // rbtn.addEventListener("click", ()=>{
// //   // foodDetails_container.classList.remove("active")
// //   console.log('remove');
// // })

// // const foodDetails_container = document.querySelector(".food-details-container");



// btn.addEventListener("click", () => {
//   apiLoad();
//   input.value = "";
// });

// input.addEventListener("input", () => {
//   apiLoad();
// });


const input = document.querySelector("input");
const food_show = document.querySelector(".food-show");
const food_detail = document.querySelector(".food-detail");


// crossBtn.addEventListener("click", ()=>{
//   food_detail.classList.remove("active")
// })


const getInputValue = (e) =>{
   const inputValue = e.target.value.toLowerCase()
   food_detail.classList.remove("active")
   const dataFetch = async () =>{
     await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= ${inputValue}`)
     .then(res => res.json())
     .then(data => {
      showData(data.meals)
     })
   }
   dataFetch();
   food_show.innerHTML = ""
}

const showData = (data) =>{
try {
  data.forEach((item)=>{
    const img = item.strMealThumb
    food_show.innerHTML += `
          <div class="item" id=${item.idMeal}>
              <img src=${img} alt="">
              <div class="item-details">
                  <h3 class="item-title">${item.strMeal}<h3>
              </div>
          </div>
    `
    foodDetails();
})

} catch (error) {
    food_show.innerHTML = `
        <h1 class="error">Sorry, Food Not Found</h1>
  `
}
  
}




const foodDetails = () =>{
      const items = document.querySelectorAll(".item")
      items.forEach((item)=>{
        item.addEventListener("click", ()=>{
          food_detail.classList.add("active")
          window.scrollTo(0,0)
          const itemId = item.id;
          const detailsDataFetch = async () =>{
              fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`)
              .then(res => res.json())
              .then(data => {
                showDetailData(data.meals)
              })

          }

  

          detailsDataFetch()
        })
      }) 
      
      const showDetailData = (data) =>{
            data.forEach((item)=>{
              console.log(item);
             const img = item.strMealThumb
              food_detail.innerHTML = `
              <div class="item">
                   <i class="fa-solid fa-xmark remove-btn"></i>
                    <img src=${img} alt="">
                      <h2 class="title">${item.strMeal}</h2>
                       <hr>
                    <div class="item-details">
                       <h3>Meal Ingredients</h3>
                          <div class="itdt">
                              <i class="fa-solid fa-check"></i>
                              <p>${item.strMeasure1}</p>
                          </div>
                           <div class="itdt">
                              <i class="fa-solid fa-check"></i>
                              <p>${item.strMeasure2}</p>
                          </div>
                          <div class="itdt">
                              <i class="fa-solid fa-check"></i>
                              <p>${item.strMeasure3}</p>
                          </div>
                            <div class="itdt">
                              <i class="fa-solid fa-check"></i>
                              <p>${item.strMeasure4}</p>
                            </div>
                             <div class="itdt">
                              <i class="fa-solid fa-check"></i>
                              <p>${item.strMeasure5}</p>
                            </div>
                             <div class="itdt">
                              <i class="fa-solid fa-check"></i>
                              <p>${item.strMeasure6}</p>
                            </div>
                    </div>
                </div>
              `

             selectRemoveBtn()

            })
      }
}

const selectRemoveBtn = () =>{
 
  const remove_btn = document.querySelector(".remove-btn")
  remove_btn.addEventListener("click", ()=>{
   food_detail.classList.remove("active")
  })
  
}


input.addEventListener("input", getInputValue)