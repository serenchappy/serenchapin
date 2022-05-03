const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck);
//Functions
function addTodo(event){
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add ('todo-item');
  todoDiv.appendChild(newTodo);

  //check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML= '<i class= "fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML= '<i class= "fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append to list
  todoList.appendChild(todoDiv);

  //clear input value
  todoInput.value= "";
}

function deleteCheck(e){
  const item = e.target;
  if(item.classList [0] === "trash-btn"){
    const todo = item.parentElement;
    todo.remove();
  }
  if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//clock shit
function updateClock(){
  var now = new Date();
  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

console.log(dname);

    if(hou == 0){
      hou = 12;
    }
    if(hou > 12){
      hou = hou - 12;
      pe = "PM";
    }

    Number.prototype.pad = function(digits){
      for(var n = this.toString(); n.length < digits; n = 0 + n);
      return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var ids= ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname-1], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
    var testId =  document.getElementById("dayname");
    // testId.innerHTML= "HELLOOOOO";
    console.log("Test" + testId);
    document.getElementById("dayname").innerHTML = values[0];
    document.getElementById("month").innerHTML = values[1];
    document.getElementById("daynum").innerHTML = values[2];
    document.getElementById("year").innerHTML = values[3];
    document.getElementById("hour").innerHTML = values[4];
    document.getElementById("minutes").innerHTML = values[5];
    document.getElementById("seconds").innerHTML = values[6];
    document.getElementById("period").innerHTML = values[7];
    for(var i = 0; i < 8; i++){
      //console.log('"'+ ids[i] + '"' + i);
    // document.getElementById('"'+ ids[i] + '"').innerHTML = values[i];
  }
    //.firstChild.nodeValue = values [i];
}

function initClock(){
  updateClock();
  window.setInterval("updateClock()", 1);
}
