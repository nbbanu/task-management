const cards = document.querySelectorAll(".cards");

function onItemDragStart(e) {
    console.log("start");
    // dragStartTodoIndex = index;
  
    e.target.classList.add("isDragging");
  }
  function onItemDragEnter() {
    console.log("enter");
  }
  function onItemDragEnd(e) {
    console.log("end");
    e.target.classList.remove("isDragging");
  }
  cards.forEach((card) => {
    card.addEventListener("dragover", (e) => {
      e.preventDefault();
      console.log("over");
    });
    card.addEventListener("drop", (dropIndex) => {
      console.log("drop");
      console.log(dropIndex);
    });
  });
  function onItemDragDrop(e, dropDoneIndex) {
    console.log("drop", dropDoneIndex);
  }