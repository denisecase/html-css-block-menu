class AboutApp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div class="content">
    <h2 class="content-head is-center">Excepteur sint occaecat cupidatat.</h2>

    <div class="pure-g">
      <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

        <h3 class="content-subhead">
          <i class="fa fa-rocket"></i>
          Get Started Quickly
        </h3>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
        </p>
      </div>
      <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
        <h3 class="content-subhead">
          <i class="fa fa-mobile"></i>
          Responsive Layouts
        </h3>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
        </p>
      </div>
      <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
        <h3 class="content-subhead">
          <i class="fa fa-th-large"></i>
          Modular
        </h3>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
        </p>
      </div>
      <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
        <h3 class="content-subhead">
          <i class="fa fa-check-square-o"></i>
          Plays Nice
        </h3>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
        </p>
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define("about-app-component",AboutApp)