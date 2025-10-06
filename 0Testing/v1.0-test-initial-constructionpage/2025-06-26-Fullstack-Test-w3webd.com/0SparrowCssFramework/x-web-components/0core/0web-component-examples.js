/* <!-- ------------------------------------------- -->
<!--
    Program         : 0web-component-examples.js
    author          : GRS
    Date            : Initial: 2025-07-21 13:20:00 IST
    Purpose         : Sparrow CSS Framework
                      Templates of Web-components

    Details         : create at least 10 menu templates so i could use in 
                      my website and use in the framework components
                      
   
    To Do           : - Make 10s-100s of menu templates
                      - Simple-link-Menu, Apple-menu, google-menu , medium-menu,
                        flat-colorful-menu,  
                      - make it responsive for sm,md,xl,xxl etc like tailwind

    Wish            : - Can in include stylsheet inside a stylesheet like C cpp?
                      - Make it object oriented or one word magic building of menus
                      - Make GUI editor to get the code rather than rember so many 
                        user defined framework keywords like tailwinds
                   
    Question        :    

    Understanding   : 
    Log
    ------------------------------------------------- 
    2025-07-06      GRS     Initial Code
    -------------------------------------------------------              
    --> */

/* 
    Simple Webcompoent addition - Larning purpose
 */
class SpWCTitle extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h4> Custom Element using Javascript</h4>`;

    // this.innerHTML.concat(`${this.getAttribute('id')}`);
  }
}
class SpCard extends HTMLElement {
  constructor() {
    super();

    this.innerText = `
                <!-- main.html -->
                <div class="w-300 h-60 bg-gray-2 m-20 p-20 ">
                <!-- Web component User created. Check Javascript file -->
                    <sp-card>
                    </sp-card>
                </div>

                /*-------------------*/
                /*-----main.js-----*/
                /*-------------------*/
                class SpWCTitle extends HTMLElement {
                    constructor() {
                        super();
                        this.innerHTML = "<h4> Web Component using Javascript</h4>";
                    }
                }
                window.customElements.define("sp-card", SpWCTitle);
                /*-------------------*/
    `;
    // this.innerText.concat() = `name id of the element: ${this.getAttribute(name)}`;
  }
}

window.customElements.define("sp-card-title", SpWCTitle);
window.customElements.define("sp-card", SpCard);

/* 
    Simple Webcompoent addition - Larning purpose
 */
class SpWCTitle1 extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>
      h4{
        /* This affects all the Headings*/
        text-decoration:solid underline 1px;
      }
    </style>
    <h4> Getting name or id attribute</h4>
    `;

    // this.innerHTML.concat(`${this.getAttribute('id')}`);
  }
}
class SpCard1 extends HTMLElement {
  constructor() {
    super();

    this.innerText = `
                <!-- main.html -->
                <div class="w-300 h-60 bg-gray-2 m-20 p-20 ">
                <!-- Web component User created. Check Javascript file -->
                    <sp-card>
                    </sp-card>
                </div>

                /*-------------------*/
                /*-----main.js-----*/
                /*-------------------*/
                class SpWCTitle extends HTMLElement {
                    constructor() {
                        super();
                   this.innerHTML="\${this.getAttribute('id')}";                    }
                }
                window.customElements.define("sp-card1", SpWCTitle1);
                /*-------------------*/

                class SpWCTitle1 extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "
    <style>
      h4{
        /* This affects all the Headings*/
        text-decoration:solid underline 1px;
      }
    </style>
    <h4> Getting name or id attribute</h4>
    ";
    
   }
}
    `;
    // this.innerText.concat() = `name id of the element: ${this.getAttribute(name)}`;
  }
}

window.customElements.define("sp-card-title1", SpWCTitle1);
window.customElements.define("sp-card1", SpCard1);

const cardTemplate = document.createElement("template");
cardTemplate.innerHTML = `
    <style>
      .user-card{
        font-family: 'Arial',sans-serif;
        background: #f4f4f4;
        width: 500-x;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 10px;
        margin-bottom: 15px;
        border-bottom: solid 5px darkorchid ;
      }

     .user-card img{
        width: 100%;
     }

      .user-card   button{
        cursor: pointer;
        background: darkorchid;
        color: #fff;
        border: 0;
        border-radius: 5px;
        padding: 5px 10px;
        margin-bottom: 20px;
      }
      
      slot{
        display: inline-block;
      }

    </style>
    <div class='user-card'>
      <img/>
      <div>
         <h3> </h3>
         <div class='info'>
            <!-- This would display whatever in side tags using slot -->
            <!-- <p><slot/></p> -->
            <p><slot/></p>
            <p> Email: <span> <slot name="email"/> </span> </p>
            <p> Phone: <span> <slot name="phone"/> </span> </p>

         </div>
         <button id='toggle-info'>Hide Info</button>
      </div>

    </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    // create a shadow root - open
    this.attachShadow({ mode: "open" });
    // create a shadow root - closed
    // this.attachShadow({mode:'closed'});

    this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
    // Set the template value from html tag attributes
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }

  toggleInfo(){
    console.log("Sp: Button clicked - Toggle info");

    this.showInfo = !this.showInfo;
    const info = this.shadowRoot.querySelector('.info');
    const toggleBtn = this.shadowRoot.querySelector('#toggle-info');


    if(this.showInfo){
      info.style.visibility = 'visible';
      toggleBtn.innerText = "Hide Info";

    }else{

      info.style.visibility = 'hidden';
      toggleBtn.innerText = 'Show Info';

    }


  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('#toggle-info')
      .addEventListener('click', () => this.toggleInfo());
  }

  disconnectedCallback(){
    this.shadowRoot
    .querySelector('#toggle-info')
    .removeEventListener();
  }

}

window.customElements.define("user-card", UserCard);



/* 
    Simple Webcompoent addition - Larning purpose
 */
class SpWCTitle2 extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>
      h4{
        /* This affects all the Headings*/
        text-decoration:solid underline 1px;
      }
    </style>
    <h4> Web Component Intro Code</h4>
    `;

    // this.innerHTML.concat(`${this.getAttribute('id')}`);
  }
}
class SpCard2 extends HTMLElement {
  constructor() {
    super();

    this.innerText = `
    //==============================================
            <article class="b-solid b-weight-1 b-lightgray-1">
                <div class="w-300 h-60 bg-gray-2 m-20 p-20 b-lightgray-1">
                    <!-- Web component User created. Check Javascript file -->

                </div>
                <div class="w-500 h-min-400 h-100p bg-gray-1 m-20 p-20 b-lightgray-1 tx-font-11 font-monospace">
                    <!-- Web component User created. Check Javascript file -->
                    <user-card name="JOHN DOE " avatar="https://randomuser.me/api/portraits/men/1.jpg">
                        Man
                        <div slot="email">email@gmail.com</div>
                        <div slot="phone">+1-555-555-5555</div>

                    </user-card>
                    <user-card name="JANE DOE " avatar="https://randomuser.me/api/portraits/women/1.jpg">
                        Woman
                        <div slot="email">email@gmail.com</div>
                        <div slot="phone">+1-555-555-5555</div>
                    </user-card>
                </div>
            </article>
    
    //==============================================
          const cardTemplate = document.createElement("template");
            cardTemplate.innerHTML = "
              <style>
                .user-card{
                  font-family: 'Arial',sans-serif;
                  background: #f4f4f4;
                  width: 500-x;
                  display: grid;
                  grid-template-columns: 1fr 2fr;
                  grid-gap: 10px;
                  margin-bottom: 15px;
                  border-bottom: solid 5px darkorchid ;
                }

              .user-card img{
                  width: 100%;
              }

                .user-card   button{
                  cursor: pointer;
                  background: darkorchid;
                  color: #fff;
                  border: 0;
                  border-radius: 5px;
                  padding: 5px 10px;
                  margin-bottom: 20px;
                }
                
                slot{
                  display: inline-block;
                }

              </style>
              <div class='user-card'>
                <img/>
                <div>
                  <h3> </h3>
                  <div class='info'>
                      <!-- This would display whatever in side tags using slot -->
                      <!-- <p><slot/></p> -->
                      <p><slot/></p>
                      <p> Email: <span> <slot name="email"/> </span> </p>
                      <p> Phone: <span> <slot name="phone"/> </span> </p>

                  </div>
                  <button id='toggle-info'>Hide Info</button>
                </div>

              </div>
          ";
        //==============================================  
          class UserCard extends HTMLElement {
            constructor() {
              super();

              this.showInfo = true;

              // create a shadow root - open
              this.attachShadow({ mode: "open" });
              // create a shadow root - closed
              // this.attachShadow({mode:'closed'});

              this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
              // Set the template value from html tag attributes
              this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
              this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
            }

            toggleInfo(){
              console.log("Sp: Button clicked - Toggle info");

              this.showInfo = !this.showInfo;
              const info = this.shadowRoot.querySelector('.info');
              const toggleBtn = this.shadowRoot.querySelector('#toggle-info');


              if(this.showInfo){
                info.style.visibility = 'visible';
                toggleBtn.innerText = "Hide Info";

              }else{

                info.style.visibility = 'hidden';
                toggleBtn.innerText = 'Show Info';

              }
            }
            connectedCallback() {
              this.shadowRoot
                .querySelector('#toggle-info')
                .addEventListener('click', () => this.toggleInfo());
            }
            disconnectedCallback(){
              this.shadowRoot
              .querySelector('#toggle-info')
              .removeEventListener();
            }
          }
        //==============================================    
          window.customElements.define("user-card", UserCard);
        //==============================================  
    `;
    // this.innerText.concat() = `name id of the element: ${this.getAttribute(name)}`;
  }
}

window.customElements.define("sp-card-title2", SpWCTitle2);
window.customElements.define("sp-card2", SpCard2);