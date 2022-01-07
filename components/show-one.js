// import default object with a local camelCase name
import thingsArray from '../data/things.js';

class ShowOne extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let thing =  thingsArray[Math.floor(Math.random()*thingsArray.length)];

    this.innerHTML = `

    <div class="splash-container">
    <div class="splash">
      <h1 class="splash-head">` + thing.Title + `</h1>
      <p class="splash-subhead">` + thing.SubTitle + `</p>
      <p class="splash-description-custom">` + thing.Description + `</p>

      <p>
        <a href="landing.html" class="pure-button pure-button-primary">&#9664</a>
        <a href="landing.html" class="pure-button pure-button-primary">Random</a>
        <a href="landing.html" class="pure-button pure-button-primary">&#9654</a>
      </p>
    </div>
  </div>


    `;

 

  }
}

customElements.define("show-one-component",ShowOne);
