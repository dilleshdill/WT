let div=document.getElementById("divide");

function Addto(){
    let userval=document.getElementById("inId").value;
    let para=document.createElement("p");
    para.textContent=userval;
    div1.appendChild(para);
    userval.value=" ";
}

let h1Element= document.createElement("h1");
h1Element.textContent="Add to Cart";
h1Element.classList.add("heading");
div.appendChild(h1Element);

let input=document.createElement("input");
input.type="text";
input.id="inId";
input.classList.add("input");
div.appendChild(input);

let button = document.createElement("button")
button.classList.add("btn","btn-primary","bt");
button.textContent="Add"
button.onclick=function(){
    Addto();
}
div.appendChild(button);

let div1= document.createElement("div");
div1.classList.add("div");
div.appendChild(div1);

let para=document.createElement("p");
para.textContent="My Cart Items";
div1.appendChild(para);


