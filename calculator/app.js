let disp=document.getElementById("display")
let btns=document.getElementsByTagName("button")

for(let item of btns){
    item.addEventListener("click",function(e){
        if (e.target.innerText=="AC")
        {disp.value=""}

        else  if (e.target.innerText=="=")
        {
            try{
            let ans=eval(disp.value)
            disp.value=ans
        }
        catch(error){
            disp.value="INVALID"
        }}

        else{ disp.value+= e.target.innerText;}
})
}