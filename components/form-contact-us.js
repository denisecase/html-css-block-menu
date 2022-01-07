class FormContactUs extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

    <div class="content">

    <h2 class="content-head  is-center move-down-1">Contact Us to Learn More</h2>

    <div class="pure-g">
      <div class="l-box-lrg pure-u-1 pure-u-md-2-5">
        <form class="pure-form pure-form-stacked">
          <fieldset>

            <label for="name">Your Name</label>
            <input id="name" type="text" placeholder="Your Name">


            <label for="email">Your Email</label>
            <input id="email" type="email" placeholder="Your Email">

            <label for="password">Your Password</label>
            <input id="password" type="password" placeholder="Your Password">

            <button type="submit" class="pure-button">Sign Up</button>
          </fieldset>
        </form>
      </div>

      <div class="l-box-lrg pure-u-1 pure-u-md-3-5">
        <h4>Contact Us</h4>
        <p>
          We have a team of developers that can help get your content on the web.
        </p>

        <h4>More Information</h4>
        <p>
          We have backend options built with Node, Deno, Java, C#, Python, and Go.
          We have frontend options built with Angular, React, Vue, and VanillaJS.
          For responsive design, we use PureCSS, Bootstrap, Bootstrap Material Design, and more. 
          We host APIs and serverless functions on Heroku, Begin.com, AWS Lambda, and more. 
          We host client-side apps on GitHub Pages. 
        </p>
      </div>
    </div>

  </div>

  
    `;
  }

}

customElements.define('form-contact-us-component', FormContactUs);


