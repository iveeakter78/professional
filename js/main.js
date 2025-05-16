let me = document.querySelector(".me");
let bg_menu = document.querySelector(".bg_menu");
let text = document.querySelector(".text");
let ser_main = document.querySelector(".ser_main");
let appointment = document.querySelector(".appointment")
let type = me.innerHTML;
me.innerHTML = "";
let typeArr = type.split("");
//  console.log(typeArr);

let typing = 0;
function typejs(){
    //  console.log("ami",typing);
    if(typing < type.length){
        typing++
        me.innerHTML += type.charAt(typing)
        // console.log(typing);
    }else{
         typeArr.pop()
         typeArr.join("");
         me.innerHTML = typeArr.join("");
         if(typeArr.length == 0){
            typing = 0
         }   
    }
}

setInterval(()=>{
    typejs()
},250)

appointment.addEventListener("click", ()=>{
    alert("ami")
    
})



// back2top
let back2top = document.querySelector(".back2top");

back2top.addEventListener("click",() =>{
    // console.log("ami",window);
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
window.addEventListener("scroll",function(){
    let scrolling = window.scrollY;
    if(scrolling > 150){
        back2top.style.display = "block"
    //    console.log("ami achi");
    }else{
        back2top.style.display = "none"
    }
    if(bg_menu && scrolling > 200){
        // console.log("ami nil");
        bg_menu.classList.add("nkjhkh")
    }else{
        bg_menu.classList.remove("nkjhkh")
    }
    if(text && scrolling > 2300){
       text.style.display = "block"  
    }
})


