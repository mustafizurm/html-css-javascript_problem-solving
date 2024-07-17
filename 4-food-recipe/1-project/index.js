const foodZoom = document.querySelector("#food-zoom");

function getItem(item){
    console.log(item);
    foodZoom.innerHTML += `
    
    <div class="food-item">
        <span><i class="fa-solid fa-x" id="cross"></i></span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, adipisci unde? Placeat, nobis doloremque! Eligendi molestias dicta voluptates molestiae temporibus veritatis, ut quos natus in reiciendis qui laboriosam quidem architecto.</p>
        <div class="images">
            <img src="/images/download (4).jpeg" alt="">
        </div>
   </div>
    
    `

    const cross = document.querySelector("#cross");
    
    cross.addEventListener("click", (e)=>{
        const buttonParent = e.target.parentNode;
        const item = buttonParent.parentNode;
        item.remove();
    })

    const body = document.querySelector("body");
    
    body.style.backdropFilter= blur("200px");
}


const details = document.querySelectorAll(".details");
details.forEach((detail)=>{
   const buttons = detail.querySelectorAll("button");
   buttons.forEach((btn)=>{
       
      btn.addEventListener("click", (e)=>{
        const buttonParent = e.target.parentNode;
        const item = buttonParent.parentNode;
        getItem(item)
          foodZoom.style.display = "block";
      })
   })
})
