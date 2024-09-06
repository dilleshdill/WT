let timer=document.getElementById("para");
let button1=document.getElementById("bt1");
let button2=document.getElementById("bt2");
let button3=document.getElementById("bt3");
let button4=document.getElementById("bt4");
button1.onclick=function(){
    counter=21
    let uniqueid=setInterval(function(){
        counter=counter-1
        timer.textContent=counter
        if(counter==0){
            clearInterval(uniqueid)
            timer.textContent="done"
        }
    },1000)
}
button2.onclick=function(){
    counter=31
    let uniqueid=setInterval(function(){
        counter=counter-1
        timer.textContent=counter
        if(counter==0){
            clearInterval(uniqueid)
            timer.textContent="done"
        }
    },1000)
}
button3.onclick=function(){
    counter=41
    let uniqueid=setInterval(function(){
        counter=counter-1
        timer.textContent=counter
        if(counter==0){
            clearInterval(uniqueid)
            timer.textContent="done"
        }
    },1000)
}
button4.onclick=function(){
    counter=61
    let uniqueid=setInterval(function(){
        counter=counter-1
        timer.textContent=counter
        if(counter==0){
            clearInterval(uniqueid)
            timer.textContent="done"
        }
    },1000)
}