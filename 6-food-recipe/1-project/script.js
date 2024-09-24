
const btn = document.querySelector("#btn")
const food_show_container = document.querySelector(".food-show-container");
let input = document.querySelector("input")


const apiLoad = async () =>{
    let inputValue = input.value.toLocaleLowerCase();

    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= ${inputValue}`)
    .then(res => res.json())
    .then(data => {
     showData(data)
    })
}

const showData = (data) =>{
    food_show_container.innerHTML = ""
    try {
        data.meals.forEach((item)=>{
            let img = item.strMealThumb;
            food_show_container.innerHTML +=`
                <div onclick="${()=> handler}" class="item" >
                 <img src = ${img} alt="">
                  <h2>${item.strMeal}</h2i
                </div>
            `
        })
    } catch (error) {
        food_show_container.innerHTML = `
          <h1>Food Not Found</h1>
        `
    }
}

const handler = () =>{
      console.log("working");          
}

btn.addEventListener("click", ()=>{
    apiLoad()
   input.value = "";
})

input.addEventListener("input", ()=>{
    apiLoad()
})


