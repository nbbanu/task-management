const plusIcons = document.querySelectorAll(".plus");
const addCardAreas = document.querySelectorAll(".addCard");
const todoTaskList = document.querySelector("#doTaskList");
const doingTaskList = document.querySelector("#doingTaskList");
const doneTaskList = document.querySelector("#doneTaskList");

let todos = [];
let doings = [];
let dones = [];

document.addEventListener("DOMContentLoaded", loadAllTasksToUI);

plusIcons.forEach((plus, index) => {
  plus.addEventListener("click", () => openNewTaskCard(index));
});

function loadAllTasksToUI() {
  getTasksFromLocalStorage();

  addNewTaskToList(0);
  addNewTaskToList(1);
  addNewTaskToList(2);
}

function openNewTaskCard(index) {
  addCardAreas[index].innerHTML = `
    <form id="addCardForm">
              <input type="text" class="addCardInput" id="add_input_${index}" placeholder="Bu kart için başlık girin..." />
              <div class="buttons">
              <button class="addCardBtn" onclick="submitTask(event,${index})">Kart Ekle</button>
              <button class="closeBtn" onclick="closeAddBtn(event)">X</button>
        </div>
    </form>`;

  const input = document.querySelector("#add_input_" + index);
  const allInputs = document.querySelectorAll(
    `.addCardInput:not(#add_input_${index})`
  );

  allInputs.forEach((input) => {
    input.parentElement.remove();
  });

  input.focus();
}

function closeAddBtn(e) {
  e.preventDefault();

  const clickedCard = e.target.closest(".card");
  const addCard = clickedCard.querySelector("#addCardForm");
  addCard.remove();
}

function submitTask(e, index) {
  e.preventDefault();

  const addCardInput = document.querySelector("#add_input_" + index);

  if (addCardInput.value !== "") {
    const value = addCardInput.value;
    if (index == 0) {
      todos?.push(value);
      //   addTasksToLocalStoroge(value);
    } else if (index == 1) {
      doings?.push(value);
    } else {
      dones?.push(value);
    }
    addNewTaskToList(index);
    addTasksToLocalStoroge();
    addCardInput.focus();
  } else {
    alert("Lütfen bir task giriniz");
  }
  addCardInput.value = "";
}

function addNewTaskToList(index) {
  if (index == 0) {
    todoTaskList.innerHTML = "";
    todos?.map((todo) => {
      todoTaskList.innerHTML += `
        <li class="taskItem" draggable="true">${todo}
        <i class="fa-solid fa-minus"></i>
        </li>
        `;
    });
  } else if (index == 1) {
    doingTaskList.innerHTML = "";

    doings?.map((todo) => {
      doingTaskList.innerHTML += `
        <li class="taskItem" draggable="true">${todo}
        <i class="fa-solid fa-minus"></i>
        </li>
        `;
    });
  } else {
    doneTaskList.innerHTML = "";

    dones?.map((todo) => {
      doneTaskList.innerHTML += `
        <li class="taskItem" draggable="true">${todo}
        <i class="fa-solid fa-minus"></i>
        </li>
        `;
    });
  }
  addTasksToLocalStoroge();
}

function addTasksToLocalStoroge() {
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("doings", JSON.stringify(doings));
  localStorage.setItem("dones", JSON.stringify(dones));
}

function getTasksFromLocalStorage() {

  if(!localStorage.getItem("todos")){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  if(!localStorage.getItem("doings")){
    doings = [];
  }else{
    doings = JSON.parse(localStorage.getItem("doings"));
  }
  if(!localStorage.getItem("dones")){
    dones = [];
  }else{
    dones = JSON.parse(localStorage.getItem("dones"));
  }


  return { todos, doings, dones };
}
