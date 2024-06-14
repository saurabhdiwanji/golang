const dropZone = document.querySelector("#dropZone");
dropZone.addEventListener("drop", dropHandler);
dropZone.addEventListener("dragover", dragOverHandler);

const myCard = document.querySelectorAll("my-card");

for (i = 0; i < myCard.length; i++) {
  myCard[i].addEventListener("dragstart", dragStartHandler);
}

function dragStartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(`dragging ${ev.target.id}`);
}

function dragOverHandler(ev) {
  ev.preventDefault();
  //ev.dataTransfer.dropEffect = "copy";
  console.log(`dragging Over`);
}

function dropHandler(ev) {
  console.log("event = ", ev)
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  console.log("data = ", data)
  ev.target.appendChild(document.getElementById(data));
}
