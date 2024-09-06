// let todoItemsContainer = document.getElementById("todoItemsContainer");
// let addstyle=document.getElementById("bt");
// let savebt=document.getElementById("saveid")

// function fromlocal(){
//   let getted = localStorage.getItem("todoList");
//   let parsed = JSON.parse(getted);

//   if(parsed === null){
//     return [];
//   }
//   else{
//     return parsed;
//   }
// }

// let todoList = fromlocal();


// addstyle.onclick=function(){
//     newadd();
// }

// savebt.onclick=function (){
//   localStorage.setItem("todoList",JSON.stringify(todoList));
// }

// function delTodo(todoId){
//     let del= document.getElementById(todoId);
//     todoItemsContainer.removeChild(del);
//     let delitems=todoList.findIndex(function (eachitem){
//       let todoindex= "todo"+eachitem.uniqueNo;
//       if(todoindex=== todoId){
//         return true;
//       }
//       else{
//         return false;
//       }
//     })
//     todoList.splice(delitems,1);
// }
// function checkedornot(labelId,todoId){
//     let labelcheck=document.getElementById(labelId)
//     labelcheck.classList.toggle("checked")
//     let objectindex=todoList.findIndex(function(){
//       let eachtodo = "todo"+newtodo.uniqueNo;
//       if(eachtodo === todoId){
//         return true;
//       }
//       else{
//         return false;
//       }
//     })
//     let todoObject = todoList[objectindex];

//     if(todoObject.isChecked === true){
//       todoObject.isChecked = false;
//     } else {
//       todoObject.isChecked = true;
//     }
// }
// function createAndAppendTodo(todo) {
//     let todoId="todo"+todo.uniqueNo;
//     let checkboxInput="checkbox"+todo.uniqueNo;
//     let labelId="label"+todo.uniqueNo;
//   let todoElement = document.createElement("li");
//   todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
//   todoElement.id=todoId;
//   todoItemsContainer.appendChild(todoElement);

//   let inputElement = document.createElement("input");
//   inputElement.type = "checkbox";
//   inputElement.id = checkboxInput;
//   inputElement.onclick=function(){
//     checkedornot(labelId,todoId);
//   }
//   inputElement.checked=todo.isChecked;
//   inputElement.classList.add("checkbox-input");
//   todoElement.appendChild(inputElement);

//   let labelContainer = document.createElement("div");
//   labelContainer.classList.add("label-container", "d-flex", "flex-row");
//   todoElement.appendChild(labelContainer);

//   let labelElement = document.createElement("label");
//   labelElement.setAttribute("for",checkboxInput);
//   labelElement.classList.add("checkbox-label");
//   labelElement.id=labelId;
//   labelElement.textContent = todo.text;
//   if (todo.isChecked === true) {
//     labelElement.classList.add("checked");
//   }
//   labelContainer.appendChild(labelElement);

//   let deleteIconContainer = document.createElement("div");
//   deleteIconContainer.classList.add("delete-icon-container");
//   labelContainer.appendChild(deleteIconContainer);

//   let deleteIcon = document.createElement("i");
//   deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
//   deleteIcon.onclick=function(){
//     delTodo(todoId);
//   }
//   deleteIconContainer.appendChild(deleteIcon);
// }
// function todoadd(){
//     let a=document.getElementById("todoUserInput").value;
//     todo.push({text:"a"});
//     createAndAppendTodo(todo);
// }
// function newadd(){
//     let uservalue=document.getElementById("todoUserInput").value;
//     let len1=todoList.length;
//     let newtodo={
//         text:uservalue,
//         uniqueNo:len1,
//         ischecked:false
//     }
//     todoList.push(newtodo);
//     createAndAppendTodo(newtodo);
//     uservalue.value=""
// }

// for (let todo of todoList) {
//   createAndAppendTodo(todo);
// }


let todoItemsContainer = document.getElementById("todoItemsContainer");
let addstyle = document.getElementById("bt");
let savebt = document.getElementById("saveid");

function fromlocal() {
  let getted = localStorage.getItem("todoList");
  let parsed = JSON.parse(getted);

  if (parsed === null) {
    return [];
  } else {
    return parsed;
  }
}

let todoList = fromlocal();

addstyle.onclick = function() {
  newadd();
}

savebt.onclick = function() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function delTodo(todoId) {
  let del = document.getElementById(todoId);
  todoItemsContainer.removeChild(del);
  let delitems = todoList.findIndex(function(eachitem) {
    let todoindex = "todo" + eachitem.uniqueNo;
    return todoindex === todoId;
  });
  todoList.splice(delitems, 1);
}

function checkedornot(labelId, todoId) {
  let labelcheck = document.getElementById(labelId);
  labelcheck.classList.toggle("checked");
  let objectindex = todoList.findIndex(function(eachtodo) {
    let eachTodoId = "todo" + eachtodo.uniqueNo;
    return eachTodoId === todoId;
  });
  let todoObject = todoList[objectindex];

  todoObject.isChecked = !todoObject.isChecked;
}

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxInput = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;
  
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxInput;
  inputElement.checked = todo.isChecked;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick = function() {
    checkedornot(labelId, todoId);
  };
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxInput);
  labelElement.classList.add("checkbox-label");
  labelElement.id = labelId;
  labelElement.textContent = todo.text;
  if (todo.isChecked === true) {
    labelElement.classList.add("checked");
  }
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIcon.onclick = function() {
    delTodo(todoId);
  };
  deleteIconContainer.appendChild(deleteIcon);
}

function newadd() {
  let uservalue = document.getElementById("todoUserInput").value;
  if (uservalue === "") return; // Prevent adding empty todos
  let len1 = todoList.length + 1; // Ensure uniqueNo is unique
  let newtodo = {
    text: uservalue,
    uniqueNo: len1,
    isChecked: false
  };
  todoList.push(newtodo);
  createAndAppendTodo(newtodo);
  document.getElementById("todoUserInput").value = ""; // Clear input field after adding
}

// Initial display of todos
for (let todo of todoList) {
  createAndAppendTodo(todo);
}
