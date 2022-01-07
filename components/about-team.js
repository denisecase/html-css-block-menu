class AboutTeam extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML=`
    <div class="ribbon l-box-lrg pure-g">
    <div class="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
      <img width="300" alt="File Icons" class="pure-img-responsive" src="/img/common/file-icons.png">
    </div>
    <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

      <h2 class="content-head content-head-ribbon">Laboris nisi ut aliquip.</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor.
      </p>
    </div>
  </div>
    `;
    
  }
}

customElements.define("about-team-component",AboutTeam);