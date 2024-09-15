let allbtns=document.querySelectorAll(".press")
console.log(allbtns)
let result=document.querySelector(".res")
console.log(result)

let equals=document.querySelector(".calc")
let clear=document.querySelector(".clr")

allbtns.forEach(button=>{
    button.addEventListener("click",()=>{
        let value=button.innerText
        result.value+=value;
    })
})


equals.addEventListener("click",()=>{
    try{   result.value=eval(result.value) }
    catch (e)
    {
        alert("error")
    }
 
})

clear.addEventListener("click",()=>{
    result.value=" "
})