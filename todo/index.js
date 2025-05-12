// const Data = [];

// const input = document.querySelector("input");
// const submitBtn = document.querySelector("button");
// const tasks_area = document.querySelector(".tasks_area");

// submitBtn.addEventListener("click", () => {
//   const inputValue = input.value.trim();

//   if (inputValue === "") return; // prevent adding empty tasks

//   const item = {
//     id: Data.length + 1,
//     name: inputValue
//   };

//   Data.push(item);
//   input.value = "";
//   renderTasks();
//   console.log(Data)
// });

// function renderTasks() {
//   let html = '';
//   Data.forEach((data) => {
//     html += `
//       <div class="task">
//         <input type="checkbox">
//         <input type="text" value="${data.name}" readonly>
//         <i class="fa-solid fa-ellipsis-vertical"></i>
//         <div class="dailogBox">
//           <div class="edit">
//             <i class="fa-solid fa-pen"></i>
//             <span>Edit</span>
//           </div>
//           <div class="delete">
//             <i class="fa-solid fa-trash"></i>
//             <span>Delete</span>
//           </div>
//         </div>
//       </div>
//     `;
//   });
//   tasks_area.innerHTML = html;
// }

const Data = [

]

const input = document.querySelector("input");
const submitBtn = document.querySelector("button");
const tasks_area = document.querySelector(".tasks_area")

submitBtn.addEventListener("click", ()=> {
  let inputValue = input.value;
  const item = {
    id: Data.length + 1,
    name: inputValue
  }
  if(input.value === ""){
    alert("Plz say somthing")
    return
  }
  Data.push(item)
  console.log(Data)
  input.value = "";

  tasks_area.innerHTML =  ""

  Data.forEach((data)=> {
    tasks_area.innerHTML  += `
                <div class="task">
                    <input type="checkbox" name="" id="">
                    <input type="text" value="${data.name}" readonly>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                    <div class="dailogBox">
                        <div class="edit">
                            <i class="fa-solid fa-pen"></i>
                            <span>Edit</span>
                        </div>
                        <div class="delete">
                            <i class="fa-solid fa-trash"></i>
                            <span>Delete</span>
                        </div>
                    </div>
                </div>
    `
  })
})










// const addTaskBtn = document.querySelector(".addTaskBtn");
// const todoInput = document.querySelector(".todoInput");
// let todosContainer = document.querySelector(".todos");

// let todos = [];

// addTaskBtn.addEventListener("click", () => {
//   const inputValue = todoInput.value;
//   const todo = { plan: inputValue };

//   if (inputValue == "") {
//     alert("Please Enter todo");
//   } else {
//     todos.push(todo);
//     todoInput.value = "";
//   }

//   todosContainer.innerHTML = "";

//   todos.forEach((todo) => {
//     todosContainer.innerHTML += `
//      <div class="todo">
//         <input class="title" type="text" value="${todo.plan}" readonly>
//         <button class="editBtn">Edit</button>
//         <button class="deleteBtn">Delete</button>
//     </div> 
    
    
//     `;
//   });





//   // deleteBtn

//   const deleteBtns = document.querySelectorAll(".deleteBtn");

//   deleteBtns.forEach((dbtn) => {
//     dbtn.addEventListener("click", (e) => {
//       const todo = e.target.parentElement;

//       const tag = todo.querySelector(".title").value;

//       todos = todos.filter((p) => p.plan !== tag);

//       console.log(todos);

//       todo.remove();
//     });
//   });


//   // editbtn

//   const editBtns = document.querySelectorAll(".editBtn")

//   editBtns.forEach((ebtn)=>{
//     ebtn.addEventListener("click", (e)=>{
//        const parentElement = e.target.parentElement;
//        const tag = parentElement.querySelector(".title")

//        if(ebtn.innerText == "Edit"){
//         tag.removeAttribute("readonly")
//         tag.focus()
//         ebtn.innerText = "Save"
//        } else{
//         tag.setAttribute("readonly", "readonly");
//         ebtn.innerText = "Edit";
//        }

//     })
//   })





// });









//     allCart.innerHTML = listProduct.map(
//       (product) =>
//         `

//      `
//     );
