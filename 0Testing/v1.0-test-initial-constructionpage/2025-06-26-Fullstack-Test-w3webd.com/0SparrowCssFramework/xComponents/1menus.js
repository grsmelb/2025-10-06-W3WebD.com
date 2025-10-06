



class SpMenuXham extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <script>
       /* @import url("../zMain/main.sparrow.css" );*/
        </script>
            <div class="w-200 h-200 m-20  bg-gray-1 t-align-center tx-font-15 color-gray-8">
                <div class="menu-container-1">
                    <div class="menu-button-1 m-l-4 m-r-4 m-t-4 p-10 p-top-20 b-lightgray-1">Custom Component</div>
                        <ul class="menu-list-1 m-l-4 m-r-4 p-10 list-remove-bullets  b-lightgray-1 z-2  ">
                            <li class="p-5">Item1</li>
                            <li class="p-5">Item2</li>
                            <li class="p-5">Item2</li>
                            <li class="p-5">Item2</li>
                            <li class="p-5">Item2</li>
                        </ul>
                </div>
            </div>
            <!-- slot not work on custom element, only  templates , web components? -->
            <p> <slot/> </p>
            <p> <slot name='menu-slot'/> </p>
        `;
        
    }
    connectedCallback(){
        // this.innerHTML=`Time to say Goodbye`;
        console.log("Console connected Call back working");
    }
}

window.customElements.define('sp-menu-xham', SpMenuXham);