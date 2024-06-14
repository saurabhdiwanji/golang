const dropZone = document.querySelector("#dropZone");
dropZone.addEventListener("drop", dropHandler);
dropZone.addEventListener("dragover", dragOverHandler);

const myCard = document.querySelectorAll("my-card");

for (i = 0; i < myCard.length; i++) {
  console.log(myCard[i]); 
  myCard[i].addEventListener("dragstart", dragStartHandler);
}

function dragStartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(`dragging ${ev.target.id}`);
  ev.dataTransfer.dropEffect = "copy"; 
  console.log(`event = ${ev}`)  
}

function dragOverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  console.log("drop event = ", ev)
  ev.dataTransfer.dropEffect = "copy";
  const data = ev.dataTransfer.getData("text");
  console.log("from dropEvent data = ", data)
  ev.target.appendChild(document.getElementById(data).cloneNode(true));
}
