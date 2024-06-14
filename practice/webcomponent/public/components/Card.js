export default class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // fetch attributes
    const title = this.getAttribute("title");
    const content = this.getAttribute("content");
    this.setAttribute('draggable', true); 
    // shadow dom

    if (!this.shadowRoot) { 
    this.attachShadow({ mode: "open"});
    }   
    // card container
    let divCardContainer = document.createElement("div");
    divCardContainer.classList.add("card-container_01");

    // card title
    const divCardTitle = document.createElement("div");
    const h3Heading = document.createElement("h3");
    h3Heading.innerText = title;
    divCardTitle.appendChild(h3Heading);
    divCardContainer.appendChild(divCardTitle);

    // card content
    const divCardContent = document.createElement("div");
    divCardContent.innerText = content;
    divCardContainer.appendChild(divCardContent);

    // adding card container to shadowroot.
    this.shadowRoot.appendChild(divCardContainer);
  }
  disconnectedCallback() {}
}
