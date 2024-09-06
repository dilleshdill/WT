let para1 = document.getElementById("para");

let bt = document.getElementById("but");
bt.onclick=function(){
    let input1 = document.getElementById("inp").value;
    let input2 = document.getElementById("inp1").value;
    para1.textContent=input1*3600 + input2*60+ " seconds"
}