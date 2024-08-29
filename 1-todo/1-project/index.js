
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const todos = document.querySelector("#todos");





btn.addEventListener("click", ()=>{


    if(input.value.length == 0){
        alert("Please enter a task")
    } else{
      todos.innerHTML += `
      
      <div class="todo">
        <span>${input.value}</span>
        <i class="fa-solid fa-trash delete"></i>
      </div>
      
      `    
    }
    input.value = "";

    const dbtns = document.querySelectorAll(".delete");

    dbtns.forEach((dbtn)=>{
        // dbtn.addEventListener("click", (e)=>{
        //   const currentBtn = e.target;
        //   console.log(currentBtn.parentNode.remove());
        //     // dbtn.parentNode.remove();
        // })
        // console.log(dbtn);
        dbtn.addEventListener("click",(e)=>{
          // e.preventDefault()
          // console.log(e.target);
          if(e.target.classList.contains('delete')){
            let deleteItem = e.target.parentNode.remove();
            // deleteItem.parentNode.remove()
          }
        })
    })

})






