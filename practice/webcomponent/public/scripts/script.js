const dropZone = document.querySelector("#dropZone");
dropZone.addEventListener("drop", dropHandler);
dropZone.addEventListener("dragover", dragOverHandler);

const myCard = document.querySelectorAll("my-card");

for (i = 0; i < myCard.length; i++) {
  myCard[i].addEventListener("dragstart", dragStartHandler);
}

function dragStartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragOverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "copy";
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data).cloneNode(true));
}
