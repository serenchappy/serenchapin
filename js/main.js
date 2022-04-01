const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    if(btn.innerText === "Click Here!"){
        btn.innerText = "Yay";
    }
    else{
        btn.innerText= "Click Here!";
    }
});

const p = document.getElementById("p");

p.addEventListener("mouseover", () =>{
  if(p.style.color === 'black'){
      p.style.color = "#CE5E79";
  }
  else{
      p.style.color= 'black';
  }
})
