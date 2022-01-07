class SiteHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

    <div class="header">
    <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <a class="pure-menu-heading" href="">100 Things</a>

        <ul class="pure-menu-list">
            <li class="pure-menu-item"><a href="landing.html" class="pure-menu-link">Home</a></li>
            <li class="pure-menu-item"><a href="contact.html" class="pure-menu-link">Contact</a></li>
            <li class="pure-menu-item"><a href="signup.html" class="pure-menu-link">Sign Up</a></li>
        </ul>
    </div>
</div>
  
    `;
  }

}

// register component element/tag name
customElements.define('site-header-component', SiteHeader);


