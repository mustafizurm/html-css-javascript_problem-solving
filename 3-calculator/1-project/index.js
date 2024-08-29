const input = document.querySelector("input");
const result = document.querySelector(".result");
const remove = document.querySelector(".removeMe");
const removeONE = document.querySelector(".removeOne");


const all_keys = document.querySelectorAll(".key");

all_keys.forEach((key)=>{

    key.addEventListener("click", (e)=>{
       const press_key = e.target.innerText;
       input.value = input.value + press_key
    })
})


try {
    result.addEventListener("click", ()=>{
        const answer = eval(input.value)
        input.value = answer;
    })
    
    
} catch (error) {
    input.value = "Error";
}

remove.addEventListener("click", ()=>{
    input.value = "";
})



removeONE.addEventListener("click", ()=>{
    input.value = input.value.toString().slice(0,-1)
})


