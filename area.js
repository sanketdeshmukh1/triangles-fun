const ht=document.querySelector(".height-class")
const bs=document.querySelector(".base-class")
const btn=document.querySelector(".submit-button");
const ans=document.querySelector(".answer");


function validatearea(){
const area=0.5*Number(ht.value)*Number(bs.value);
ans.innerText="Area of triangle is "+area;
}

btn.addEventListener("click",validatearea);
