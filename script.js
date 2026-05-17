let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");
/*let todoList = [
  {
    text: "Learn HTML",
    uniqueNo: 1
  },
  {
    text: "Learn CSS",
    uniqueNo: 2
  },
  {
    text: "Learn JavaScript",
    uniqueNo: 3
  }
];*/ 

function getTodoListFromLocalStorage() {
  let stringifiedTodoList = localStorage.getItem("todoList");
  let parsedTodoList = JSON.parse(stringifiedTodoList);

  if (parsedTodoList === null) {
    return [];
  } else {
    return parsedTodoList;
  }
}

let todoList = getTodoListFromLocalStorage();

saveTodoButton.onclick = function () {
  localStorage.setItem("todoList", JSON.stringify(todoList));
  //alert("Tasks saved!");
};

let todosCount = todoList.length;

function onTodoStatusChange(checkboxId, labelId, todoId) {
  let labelElement = document.getElementById(labelId);
  labelElement.classList.toggle("checked");

  let todoObjectIndex = todoList.findIndex(function(eachTodo){
    
    let eachTodoId = "todo" + eachTodo.uniqueNo;
    
    if(eachTodoId === todoId){
      return true;
    }else{
      return false;
    }
  });
    let todoObject = todoList[todoObjectIndex];

    if(todoObject.is_checked === true){
      
      todoObject.is_checked = false;
    }else{

      todoObject.is_checked = true;
    }
}

function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);

  deleteIndex = todoList.findIndex(function(eachTodo){
      let eachTOdoId = "todo" + eachTodo.uniqueNo;

      if (eachTOdoId === todoId){

        return true;
      }else{

        return false;
      }
  });
  todoList.splice(deleteIndex , 1);   
}

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;

  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.checked = todo.is_checked;

  inputElement.onclick = function () {
    onTodoStatusChange(checkboxId, labelId, todoId);
  };

  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;

  if(todo.is_checked === true){
     
    labelElement.classList.add("checked");
  }
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  // FIX : fa-  is old icon -----------fa-regular new icon
  deleteIcon.classList.add("fa-regular", "fa-trash-can", "delete-icon");
  deleteIcon.onclick = function () {
    onDeleteTodo(todoId);
  };
  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;

  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }

  todosCount = todosCount + 1;

  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount,
    is_checked : false
  };

  todoList.push(newTodo);
  createAndAppendTodo(newTodo);
  userInputElement.value = "";
}

addTodoButton.onclick = function () {
  onAddTodo();
};