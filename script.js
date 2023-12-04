const taskList = document.querySelector(".taskCardList");
const taskItems = document.querySelectorAll(".taskItem");
const addCardArea = document.querySelector(".addCard");

function addNewCard() {
  addCardArea.innerHTML = `
    <form id="addCardForm">
              <input type="text" class="addCardInput" placeholder="Bu kart için başlık girin..." />
            </form>
            <div class="buttons">
                <button class="addCardBtn" >Kart Ekle</button>
                <button class="closeBtn" onclick="closeAddBtn()">X</button>
            </div>
    `;
}

function closeAddBtn() {
  addCardArea.innerHTML = "";
}

// function addTaskToTaskList() {
// //   const addCardBtn = document.querySelector(".addCardBtn");
//   const addCardInput = document.querySelector(".addCardInput");

//   let value = addCardInput.value();
//   console.log(value);
// }
