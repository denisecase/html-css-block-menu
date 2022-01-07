class SiteFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

    <div class="footer l-box is-center">
    
       <button class="pure-button">Demo</button>
       <button class="pure-button">Source</button>
       <button class="pure-button">Issues</button>
      
    </div>

  
    `;
  }

}

customElements.define('site-footer-component', SiteFooter);


