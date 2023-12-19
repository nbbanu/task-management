const cards = document.querySelectorAll(".card");

function onItemDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.target.classList.add("isDragging");
}
// nerden nereye neyi
cards.forEach((card) => {
  card.addEventListener("dragenter", (e) => {
    e.target.classList.remove("isDragging");
  });
  card.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  card.addEventListener("dragleave", (e) => {});
  card.addEventListener("drop", (e) => {
    // const data = e.dataTransfer.getData("text");
    // const source = document.getElementById(data);
    // e.target.appendChild(source);

    const id = e.dataTransfer.getData("text/plain");
    const draggable = document.getElementById(id);
    // console.log(draggable)
    if(!e.target.draggable && e.target.classList == "taskCardList"){
      e.target.appendChild(draggable);
    }
  
  });
});

