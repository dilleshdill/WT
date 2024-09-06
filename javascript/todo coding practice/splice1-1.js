let div = document.getElementById("card");

let updatedlist = ["apple", "banana", "cherry"];

let heading= document.createElement("h1");
heading.textContent="Splice Playground";
div.appendChild(heading);

let div1=document.createElement("div");
div1.classList.add("maincard");
div.appendChild(div1);

let div2=document.createElement("div");
div2.classList.add("paragraph");
div1.appendChild(div2);

let para= document.createElement("p");
para.textContent="Start Index";
div2.appendChild(para);

let para1= document.createElement("p");
para1.textContent="Delete Count";
div2.appendChild(para1);

let para2= document.createElement("p");
para2.textContent="Item To Add";
div2.appendChild(para2);

let div3=document.createElement("div");
div3.classList.add("boxes")
div1.appendChild(div3);

let text1= document.createElement("input");
text1.type="text";
text1.classList.add("input");
text1.id="input1";
div3.appendChild(text1);

let text2= document.createElement("input");
text2.type="text";
text2.classList.add("input");
text2.id="input2";
div3.appendChild(text2);

let text3= document.createElement("input");
text3.type="text";
text3.classList.add("input");
text3.id="input3";
div3.appendChild(text3);

let bt1=document.createElement("button");
bt1.innerText="Splice";
bt1.classList.add("btn","custom-bt","btn-primary");
bt1.id="btinfo";
bt1.onclick=function(){
    toadd();
}
div1.appendChild(bt1);

let div4=document.createElement("div");
div4.classList.add("updated");
div1.appendChild(div4);

let he = document.createElement("h5");
he.textContent="Updated Array";
div4.appendChild(he);

let p1 = document.createElement("p");
p1.id="updatedArray";
p1.textContent=updatedlist;
div1.appendChild(p1);

function toadd(){
    let info1 = document.getElementById("input1").value;
    let info2 = document.getElementById("input2").value;
    let info3 = document.getElementById("input3").value;


    if(updatedlist=== null){
        return false;
    }
    else{
        updatedlist.splice(info1,info2,info3);

        document.getElementById("updatedArray").textContent = updatedlist.join(", ");
    }
}

document.getElementById("updatedArray").textContent = updatedlist.join(", ");
