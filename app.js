const angles=document.querySelectorAll('.angles-class');
const submitbtn=document.querySelector('.submit-button');
const ans=document.querySelector('.answer');


function calsum(angel1,angel2,angel3){
    const tempsum=angel1+angel2+angel3;
    return tempsum;
}

function checktraingle(){

    const sum=calsum( Number(angles[0].value),Number(angles[1].value),Number(angles[2].value));

    if(sum===180){
        ans.innerText="Traingle it is!!!";
    }else{
        ans.innerText="Heyy,its not a Traingle !!!";
    }
    
}

submitbtn.addEventListener("click", checktraingle);

