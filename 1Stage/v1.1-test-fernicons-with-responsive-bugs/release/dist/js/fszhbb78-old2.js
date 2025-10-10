import Fuse from "https://cdn.jsdelivr.net/npm/fuse.js@7.1.0/dist/fuse.mjs";


(function () {
  document.addEventListener("DOMContentLoaded", function () {
    //Function name assignment
    let log = console.log;
    log("Script file included");
    /* Use Console Log - if in test mode */
    let test = true;
    // test = false;
    let testHighMem = true;
    // testHighMem = false;
    let status = "initial";

    let lastInput = "";
    let currentInput = "";

    let iconsAllArray,
      iconsInitialArray,
      faIconsAllArray,
      faIconsInitial,
      foundationIconsAllArray,
      foundationIconsInitial,
      glyphIconsAllArray,
      glyphIconsInitial,
      icomoonIconsAllArray,
      icomoonIconsInitial,
      ioniconsIconsAllArray,
      ioniconsIconsInitial,
      materialGoogleIconAllArray,
      materialGoogleIconInitial,
      octiconsIconAllArray,
      octiconsIconInitial;
    /* The above code is a JavaScript comment block. It is used to add comments in the code for
            documentation purposes. Comments are ignored by the JavaScript interpreter and are not
            executed as code. */

    // let iconsLimit = 24;
    // let iconsLimit = 27;
    // let iconsLimit = 32;
    let iconsLimit = 98;

    let showmoreLimit = 10000;
    // let searchStartLimit = 0;
    let searchStartLimit = 1;

    // let faIconsFile = "./data/icon-groups/fa-icons.json";
    // let laIconsFile = "./data/icon-groups/la-iconsExtract.json";
    // let phIconsFile = "./data/icon-groups/phosphor-icons.json";

    // let allIconsFile = "./data/icon-groups/la-icons-extract.json";
    // let allIconsFile = phIconsFile;
    // let allIconsFile = "./data/icon-groups/all-icons";
    // let allIconsFile = "./data/icon-groups/allicn";
    let allIconsFile = "./dist/data/icon-groups/hhgtrd.json";

    let libraryName = "font-awesome";
    let faIconName = "font-awesome";
    let faHeadingName = "FONT AWESOME";
    let laIconName = "line-awesome";
    let laHeadingName = "LINE AWESOME";
    let phIconName = "phosphor-icons";
    let phHeadingName = "PHOSPHOR ICONS";

    let foundationIconName = "foundation";
    let foundationHeadingName = "FOUNDATION";
    let glyphIconName = "glyphicons";
    let glyphHeadingName = "GLYPHICONS";

    let icomoonIconName = "icomoon";
    let icomoonHeadingName = "ICOMOON";
    let ioniconsIconName = "ionicons";
    let ioniconsHeadingName = "IONICONS";
    let materialGoogleIconName = "material";
    let materialGoogleHeadingName = "GOOGLE-MATERIALS";
    let octiconsIconName = "octicons";
    let octiconsHeadingName = "OCTICONS";

    function selectAllElements(elements) {
      return document.querySelectorAll(elements);
    }

    function selectFirstElement(elements) {
      return document.querySelector(elements);
    }

    function addEventsForArrayOfElements(
      elementArray = [],
      event = "click",
      callBackMethod = () => { }
    ) {
      if (elementArray.length > 0) {
        for (let i = 0; i < elementArray.length; i++)
          elementArray[i].addEventListener(event, (ev) => {
            callBackMethod(ev);
          });
      }
    }

    /* ------------------------------------------ */
    /* Get query data from the form */
    /* ------------------------------------------ */
    let form = document.querySelector("#search-form");
    let searchHeading = document.querySelector("#search-library-heading");
    let searchInput = document.querySelector("#search-input");
    let searchResults = document.querySelector("#search-results");
    let searchResultContainer = document.querySelector(
      "#search-results-container"
    );
    let totalCount = document.querySelector("#total-count");
    let bttnClose = document.querySelector(".bttn-close");
    let modalWindow = document.querySelector(".modal-section");
    let modalContent = document.querySelector(".modal-content");
    let bttnMore = document.querySelector(".bttn-more");
    let tabHeadings = selectAllElements(".tablink");
    let tabDetails = selectAllElements(".tabcontent");
    let modalDetailIconImage = selectFirstElement("#modal-detail-Iconimage");
    let modalDetailIconHeading = selectFirstElement(
      ".modal-detail-image-name-heading"
    );
    let modalDetailCloseButton = selectFirstElement(".modal-close-button");
    let iconcontainer = document.querySelector(
      ".modal-detail-IconimageContainer"
    );
    let iconDetailHtmlCode = document.querySelector(".icon-detail-html-code");
    let iconDetailgroupName = document.querySelector(
      ".modal-detail-group-name"
    );
    let iconDetailClassName = document.querySelector(
      ".modal-detail-class-name"
    );
    let iconDetailHex = document.querySelector(".modal-detail-hex");
    let iconDetailEntity = document.querySelector(".modal-detail-entity");
    let iconDetailSvgCode = document.querySelector(".icon-detail-svg-code");
    let iconDetailReactCode = document.querySelector(".icon-detail-react-code");
    let iconDetailVueCode = document.querySelector(".icon-detail-vue-code");

    let copyIcons = selectAllElements(".content-copy");
    let loadingSign = document.querySelector(".loading-modal");

    let reactHeading = document.querySelector('#react-heading');
    let vueHeading = document.querySelector('#vue-heading');
    let iconclassHeading = document.querySelector('#iconclass-heading');
    let svgHeading = document.querySelector('#svg-heading');



    function shortenName(name) {
      let limit = 14;
      let end = limit - 1;
      let shortName = name;
      if (name.length > limit) {
        shortName = name.slice(0, end) + "...";
      }
      return shortName;
    }

    function displayLoadingSign() {
      if (test) console.log("Inside loading sign");
      loadingSign.style.display = "flex";
    }

    /**
     * The function `offLoadingSign` hides the loading sign by setting its display property to 'none'.
     */
    function offLoadingSign() {
      if (test) console.log("Inside offloading sign");
      loadingSign.style.display = "none";
    }

    function generatePostHTML(post) {
      return `
        <article>
            <div data-iconname="${post.item.name}" 
                 data-icongroup="${post.item.icongroup}" 
                 data-iconunicode="${post.item.unicode}" 
                 data-iconclass="${post.item.classname}"  
                 data-iconstyle="${post.item.iconstyle}"
                class="result-icon-container icon-element tooltip-container">
            
                <p class="result-icon-name icon-element">${shortenName(
        post.item.name
      )}</p> 
                <div class="result-icon icon-element" >${post.item.html}</div>
                <p class="result-unicode unicode icon-element">${post.item.unicode}</p>
                <div class ="display-none svg-img"> ${post.item.svg}</div>  
          <!--
                <aside class="search-tips-container icon-result-tips-container">
                    <div class=" search-tips">
                        <p class="search-tips-heading">QUICK DETAILS</p>
                        <p class="search-tips-points icon-result-tips-heading">
                            <span class="search-tips-subheading">Group: </span>
                            ${post.item.icongroup}
                        </p>
                        <p class="search-tips-points icon-result-tips-heading">
                            <span class="search-tips-subheading">Name: </span>
                            ${post.item.name} 
                        </p>
                        <p class="search-tips-points icon-result-tips-heading">
                            <span class="search-tips-subheading">Unicode: </span>
                            ${post.item.unicode} 
                        </p>
                         <p class="search-tips-points icon-result-tips-heading">
                            <span class="search-tips-subheading">Class: </span>
                            ${post.item.classname} 
                        </p>
                        <p class="search-tips-subheading more-info">Click for More Info</p>
                    </div>
                </aside>    
                -->
            </div>
        </article>
       `;
    }

    function generateInitialIconsHTML(post) {
      return `
        <article>
            <div 
                data-iconname="${post.name}" 
                data-icongroup="${post.icongroup}" 
                data-iconunicode="${post.unicode}" 
                data-iconclass="${post.classname}"   
                data-iconstyle="${post.iconstyle}"
                class="result-icon-container tooltip-container">
                <p class="result-icon-name">${shortenName(post.name)}</p> 
                <div class="result-icon" >${post.html}</div>
                <p class="result-unicode unicode">${post.unicode}</p> 
                <div class ="display-none svg-img"> ${post.svg}</div>  
      <!--
                <aside class="search-tips-container icon-result-tips-container">
                    <div class=" search-tips">
                       <p class="search-tips-heading">QUICK DETAILS</p>
                       <p class="search-tips-points icon-result-tips-heading">
                            <span class="search-tips-subheading">Group: </span>
                            ${post.icongroup}
                        </p>
                        <p class="search-tips-points icon-result-tips-heading">
                            <span class="search-tips-subheading">Name: </span>
                            ${post.name} 
                        </p>
                        <p class="search-tips-points icon-result-tips-heading">
                            <span class="search-tips-subheading">Unicode: </span>
                            ${post.unicode} 
                        </p>
                         <p class="search-tips-points icon-result-tips-heading">
                            <span class="search-tips-subheading">Class: </span>
                            ${post.classname} 
                        </p>
                        <p class="search-tips-subheading more-info">Click for More Info</p>
                    </div> 
                </aside>
                -->
            </div>
        </article> 
        `;
    }

    /* ------------------------------------------ */
    /* Get Serach Results */
    /* ------------------------------------------ */
    async function getPosts() {
      try {
        const res = await fetch(allIconsFile);
        if (testHighMem) console.log("ResponseJsonFetch: ", res);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        if (testHighMem) console.log("ResponseJson: ", data);
        return data;
      } catch (error) {
        if (test) console.log("Error: ", error);
        return error.message;
      }
    }

    async function filterPostsSearch(dataArray, compareString) {
      let filteredArray = await dataArray.filter((item, index, array) => {
        if (item.hasOwnProperty("icongroup")) {
          // return item._tags.length == 0;
          let temp = item.icongroup;
          // if (testHighMem) console.log('Temp: ', temp);
          return temp == compareString;
        } else return false;
      });
      return filteredArray;
    }

    async function filterPostsInitial(dataArray, compareString) {
      let filteredArray = await dataArray.filter((item, index, array) => {
        if (item.hasOwnProperty("icongroup")) {
          let temp = item.icongroup;
          // if (testHighMem) console.log('Temp: ', temp);
          return temp == compareString;
        } else return false;
      });
      return filteredArray;
    }

    /* ------------------------------------------ */
    /* Use Fuse.js to search the data JSON*/
    /* ------------------------------------------ */
    async function retrieveSearchResults(query) {
      const posts = await getPosts();
      if (testHighMem) console.log("Posts: ", posts);

      /* Get the Individual Libraries */
      // let faIconsArray = await filterPostsSearch(posts, faIconName);
      // if (testHighMem) console.log("filtered FA ICons: ", faIconsArray);

      const fuse = new Fuse(posts, {
        keys: ["icongroup", "name", "searchterms", "classname", "unicode"],
        includeScore: true,
        shouldSort: true,
        includeMatches: true,
        // minMatchCharLength: 3,
        threshold: 0.3,
      });
      let searchResults = fuse.search(query);
      if (testHighMem) console.log("Output: ", searchResults);
      return searchResults;
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
    });

    async function getAllIcons() {
      let allIcons = await getPosts();
      if (testHighMem) console.log("Initial Load Posts: ", allIcons);
      return allIcons;
    }

    async function getLibraryAllIcons(allIcons, libName) {
      /* Get the Individual Libraries */
      let libraryIconsArray = await filterPostsInitial(allIcons, libName);
      if (testHighMem) console.log("filtered FA ICons: ", libraryIconsArray);
      return libraryIconsArray;
    }

    async function getLibraryInitialIcons(libraryAllIcons, iconsLimit) {
      let libraryIconsInitial = await libraryAllIcons.slice(0, iconsLimit);
      if (testHighMem)
        console.log(`Initial ${iconsLimit} Posts: `, libraryIconsInitial);
      return libraryIconsInitial;
    }

    async function publishHTMLResults(
      libHeadingName,
      libIconsInitial,
      libIconsCount,
      libIconName
    ) {
      if (test) console.log("LibHeading Name: ", libHeadingName);
      if (testHighMem) console.log("libIconsInitial: ", libIconsInitial);
      /* Heading creation for icon divs */
      let heading = document.createElement("h3");
      heading.id = "search-library-heading";
      heading.classList.add("search-library-heading");
      heading.innerHTML = libHeadingName;
      let count = document.createElement("div");
      count.id = "hd-count";
      count.classList.add("hd-count");
      count.innerText = libIconsCount.toLocaleString("en-US") + " Items";
      let divHead = document.createElement("div");
      divHead.id = "head-container";
      divHead.classList.add("head-container");
      divHead.classList.add("container-start");
      divHead.appendChild(heading);
      divHead.appendChild(count);
      if (test) console.log("heading: ", heading);
      /* Icon Section container */
      let section = document.createElement("section");
      section.id = "search-results";
      if (testHighMem) console.log("section: ", section);
      section.classList.add("container-evenly");
      section.classList.add("icon-results");
      section.innerHTML =
        libIconsInitial.length > 0
          ? libIconsInitial.map(generateInitialIconsHTML).join("")
          : // ? libIconsInitial.map((el)=>{
          //     // if(test) console.log("SVG : ",el.svg);
          //     generateInitialIconsHTML(el);
          //     }).join("")

          "No Results Found";
      let btnMore = document.createElement("button");
      btnMore.classList.add("bttn-blk");
      btnMore.classList.add("bttn-more");
      btnMore.dataset.icongroup = libIconName;
      btnMore.dataset.icongroupName = libHeadingName;
      btnMore.innerHTML = `SHOW ALL`;
      let btnMoreIcon = document.createElement("i");
      btnMoreIcon.classList.add("fa-solid", "fa-angles-right");
      btnMoreIcon.classList.add("bttn-more-icon");
      btnMoreIcon.dataset.icongroup = libIconName;
      btnMoreIcon.dataset.icongroupName = libHeadingName;
      btnMore.appendChild(btnMoreIcon);
      let btnDiv = document.createElement("div");
      btnDiv.id = "btn-div";
      btnDiv.classList.add("container-end");
      btnDiv.appendChild(btnMore);
      let resultDiv = document.createElement("div");
      resultDiv.id = "search-result-library-div";
      resultDiv.classList.add("search-result-library-div");
      resultDiv.appendChild(divHead);
      resultDiv.appendChild(section);
      if (status == "initial") resultDiv.appendChild(btnDiv);
      if (status != "initial") {
        if (test) console.log("Inside replacement section");
        searchResultContainer.replaceChildren();
      }
      //Add nev content
      searchResultContainer.appendChild(resultDiv);
    }
    /* Icon Library Collection */
    let libraryOfIcons = {
      libName: "font-awesome",
      libHeadName: "FONT AWESOME",
      libAllIcons: [],
      libInitIcons: [],
      libCDNLink: "",
      libWebLink: "",
    };
    async function generateResultHTML(postsToDisplay) {
      return (await postsToDisplay.length) > 0
        ? postsToDisplay.map(generatePostHTML).join("")
        : "No Results Found";
    }

    function createIconResultSectionHTML(
      postsToDisplay,
      currentInput,
      postsCollected
    ) {
      /* Icon Section container */
      let section = document.createElement("section");
      section.id = "search-results";
      if (testHighMem) console.log("section: ", section);
      section.classList.add("container-evenly");
      section.classList.add("icon-results");
      //=================== Input Heading
      /* Heading creation for icon divs */
      let heading = document.createElement("h3");
      heading.id = "search-library-heading";
      heading.classList.add("search-library-heading");
      heading.innerHTML = "RESULT";
      let count = document.createElement("div");
      count.id = "hd-count";
      count.classList.add("hd-count");
      let libIconsCount = postsToDisplay.length;
      count.innerText = libIconsCount.toLocaleString("en-US") + " Items";
      let resultFor = document.createElement("div");
      resultFor.classList.add("result-for");
      let resultfilter = currentInput;
      resultFor.innerHTML = resultfilter;
      let divHead = document.createElement("div");
      divHead.id = "head-container";
      divHead.classList.add("head-container");
      divHead.classList.add("container-start");
      divHead.appendChild(heading);
      divHead.appendChild(count);
      divHead.appendChild(resultFor);
      //=================== Input Heading
      // Clear all nodes of Result container if input value is there
      if (currentInput != "" && currentInput != undefined) {
        if (test) console.log("Inside replacement section");
        searchResultContainer.replaceChildren();
      }
      section.innerHTML = postsCollected;
      searchResultContainer.appendChild(divHead);
      searchResultContainer.appendChild(section);
    }

    async function showTotalCount() {

      let countContainer = document.createElement("div");
      countContainer.classList.add('count-container');
      let countDiv = document.createElement("div");
      countDiv.id = "total-count";
      countDiv.classList.add("total-count");
      let count = document.createElement("h3");
      count.innerText = iconsAllArray.length.toLocaleString("en-US") + " Icons";
      countDiv.appendChild(count);
      countContainer.appendChild(countDiv);
      searchResultContainer.insertAdjacentHTML(
        "afterbegin",
        countContainer.outerHTML
      );
    }

    function activateAllDetailTabs() {
      reactHeading.style.display = 'block';
      vueHeading.style.display = 'block';
      iconclassHeading.style.display = 'block';
      svgHeading.style.display = 'block';
      // reactHeading.style.display = 'block';
    }

    function openDetailedModalWindow(ev) {
      if (test) console.log('Event Detail current target:  ', ev.currentTarget)

      let iconclass = ev.currentTarget.dataset.iconclass;
      let groupname = ev.currentTarget.dataset.icongroup;
      let iconname = ev.currentTarget.dataset.iconname;
      let unicode = ev.currentTarget.dataset.iconunicode;

      let weight = ev.currentTarget.dataset.iconstyle;
      let entity = "&#x" + unicode + ";";
      let iconimg = ev.currentTarget.querySelector("i").outerHTML;
      let svgcode = ev.currentTarget.querySelector("svg").outerHTML;
      let reactcode = '';
      let vuecode = '';

      switch (groupname) {
        case 'font-awesome':
          if (test) console.log('font-awesome tab clicked case statement')
          activateAllDetailTabs();
          let fastyle = ((iconclass.split(' ')[0]).split('-')[1]).charAt(0);
          reactcode = `<FontAwesomeIcon icon={byPrefixAndName.fa${fastyle}['${iconname}']} />`;

          // reactcode = `<FontAwesomeIcon icon={byPrefixAndName.fas['${iconname}']} />`;
          vuecode = `<FontAwesomeIcon :icon="byPrefixAndName.fa${fastyle}['${iconname}']" />`;
          break;
        case 'line-awesome':
          if (test) console.log('line-awesome tab clicked case statement')

          reactHeading.style.display = 'none';
          vueHeading.style.display = 'none';
          break;
        case 'phosphor-icons':
          activateAllDetailTabs();
          if (test) console.log('Phosphor tab clicked case statement')
          let namesplit = iconname.split('-');
          let capital = namesplit.map((el) => {
            return el = el.charAt(0).toUpperCase() + el.slice(1)
          })
          let namejoined = capital.join('');

          let weightcode = '';

          if (weight != 'regular') {
            weightcode = `weight="${weight}"`;
          }

          reactcode = `<${namejoined} size={32} ${weightcode}/>`
          vuecode = `<Ph${namejoined} :size="32" ${weightcode}/>`
          break;
        default:
          if (test) console.log('default tab clicked case statement')
          activateAllDetailTabs();
          reactcode = '';
          vuecode = '';

      }

      if (test) console.log("Selected Icon Image Child: ", iconimg);
      iconcontainer.innerHTML = iconimg;
      iconcontainer
        .querySelector("i")
        .setAttribute("id", "modal-detail-Iconimage");
      iconDetailHtmlCode.innerText = iconimg;
      iconDetailSvgCode.innerText = svgcode;
      iconDetailReactCode.innerText = reactcode;
      iconDetailVueCode.innerText = vuecode;

      iconDetailClassName.innerHTML = `<code>${iconclass}</code>`;
      iconDetailgroupName.innerText = groupname.toUpperCase();
      iconDetailHex.innerText = unicode.toUpperCase();
      iconDetailEntity.innerText = entity.toUpperCase();
      modalDetailIconHeading.innerText = iconname.toUpperCase();
      modalWindow.classList.add("container-start", "container-vertical");
    }

    function iconSectionClicked(ev) {
      if (test)
        console.log("ICON SECTION CLICKED-current Target", ev.currentTarget);
      if (test) console.log("ICON SECTION CLICKED-Target", ev.target);
      openDetailedModalWindow(ev);
    }

    function iconSectionHoveredIn(e) {
      // if (e.target.classList.contains('result-icon-container'))
      //     if (test) console.log('Icon Container Hovered - In');
    }
    function iconSectionHoveredOut(e) {
      // if (e.target.classList.contains('result-icon-container'))
      //     if (test) console.log('Icon Container Hovered - Out');
    }

    function addClickEventSearchResultContainer() {
      if (test) console.log("inside click event");
      let searchSection = document.querySelectorAll(".result-icon-container");
      searchSection.forEach((element, index) => {
        element.addEventListener(
          "click",
          (e) => {
            iconSectionClicked(e);
          },
          false
        );
        // element.addEventListener('mouseover', (e) => {
        //     iconSectionHoveredIn(e);
        // }, true);
        // element.addEventListener('mouseout', (e) => {
        //     iconSectionHoveredOut(e);
        // }, true);
      });
      if (testHighMem)
        console.log("Search Section after load: ", searchSection);
    }

    function closeModalWindow(ev) {
      if (test) console.log("Inside Close Modal buttons: ");
      modalWindow.classList.remove("container-start", "container-vertical");
      iconclassHeading.click();
    }

    function addEventCloseButtonClickClose() {
      modalDetailCloseButton.addEventListener("click", (ev) => {
        closeModalWindow(ev);
      });
    }
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        // behavior: "smooth" // Optional: for smooth scrolling animation
      });
    }

    async function showmoreButtonClicked(ev) {
      if (test) console.log("Buttons clicked : ", ev);
      if (test) console.log("Buttons clicked -target: ", ev.target);
      if (test)
        console.log(
          "Buttons clicked -Icongroup: ",
          ev.target.dataset.icongroup
        );
      let groupIconName = ev.target.dataset.icongroup;
      let groupHeadingName = ev.target.dataset.icongroupName;
      let iconsLimit = showmoreLimit;
      status = "showmore";
      displayLoadingSign();
      await loadIconSection(groupIconName, groupHeadingName, iconsLimit);
      addClickEventSearchResultContainer();
      scrollToTop();
      offLoadingSign();
    }

    function addEventShowmoreButtonClickMore() {
      let bttnsMore = selectAllElements(".bttn-more");
      if (test) console.log("Buttons More: ", bttnsMore);
      for (let i = 0; i < bttnsMore.length; i++) {
        if (test) console.log("Buttons More: ", bttnsMore[i]);
        bttnsMore[i].addEventListener("click", (ev) => {
          showmoreButtonClicked(ev);
        });
      }
    }

    function addClickEventButtons() {
      if (test) console.log("Inside Clickevent buttons: ");
      addEventCloseButtonClickClose();
      addEventShowmoreButtonClickMore();
    }

    async function searchPublishAddevents(currentInput) {
      displayLoadingSign();
      let postsToDisplay = await retrieveSearchResults(currentInput);
      let postsCollected = await generateResultHTML(postsToDisplay);
      createIconResultSectionHTML(postsToDisplay, currentInput, postsCollected);
      addClickEventSearchResultContainer();
      scrollToTop();
      offLoadingSign();
    }

    async function keyPressed(ev) {
      // if (ev.key === 'Enter') {
      //     ev.preventDefault();
      //     if (test) console.log('Enter Key Pressed ');
      // }
      if (test) console.log("Inside Key Pressed", ev, { ev });
      if (test) console.log("The Key Pressed:", ev.key, ev.code);
      // if (test) console.log('The Input Text:', searchInput,searchInput.innerHTML);
      if (test) console.log("The Input Text:", searchInput.value);
      lastInput = currentInput;
      // ==================================
      // Sanitize the input
      // ==================================
      //.value returns string so toString is not needed.
      currentInput = searchInput.value
        .toString()
        .trim()
        .replace(/<[^>]*>?/gm, "")
        // .replace(/&/g, '&amp;')
        // .replace(/</g, '&lt;')
        // .replace(/>/g, '&gt;')
        // .replace(/"/g, '&quot;')
        // .replace(/'/g, '&#x27;')
        // .replace(/\//g, '&#x2F;')
        // .replace(/[^a-zA-Z0-9\s.,!?-]/g, '')
        .replace(/[^a-zA-Z0-9\s]/g, "");

      switch (ev.key) {
        case "Enter":
          ev.preventDefault();
          if (test) console.log("Enter Key Pressed ");
          break;
        // case 'Esc':
        case "Backspace":
        case "Escape":
          if (test) console.log("Escape Key Pressed -svvitch case section");
          if (
            (currentInput == "" || currentInput == undefined) &&
            currentInput != lastInput
          ) {
            searchResultContainer.replaceChildren();
            await initialIconsLoad();
            return;
          }
      }
      //Limit input length to 20 characters
      if (currentInput.length > 20 || currentInput.length == searchStartLimit) {
        console.log(
          "Input is greater than 20 characters and less than vvord length start limit"
        );
        return;
      }
      //==================================
      //If the not typeable ckey is pressed - input value is same
      // Do nothing if no character typable input
      //Just check the input change
      if (currentInput == lastInput) {
        if (test) console.log("Same Input", searchInput.value);
        return;
      } else if (
        currentInput.toLowerCase() == "javascript" ||
        currentInput.toLowerCase() == "javscript:"
      ) {
        return;
      } else if (currentInput == "" || currentInput == undefined) {
        searchResultContainer.replaceChildren();
        await initialIconsLoad();
        return;
      } else {
        searchPublishAddevents(currentInput);
      }
    }

    function windowKeyPressed(ev) {
      ev.preventDefault();
      if (test) console.log("Key pressed in VVindovvslevel: ", ev.key, ev.code);
    }
    function documentKeyPressedUp(ev) {
      ev.preventDefault();
      if (test) console.log("Key pressed in Documentlevel: ", ev.key, ev.code);
    }
    async function documentKeyPressedDown(ev) {
      // ev.preventDefault();
      if (test)
        console.log("Key pressed down in Documentlevel: ", ev, ev.key, ev.code);
      if (test)
        console.log(
          "Key pressed down in Documentlevel-CTRL Value: ",
          ev.ctrlKey
        );

      let key = ev.key;
      let ctrl = ev.ctrlKey;

      // if (ctrl && key == 'Control') {
      //     ev.preventDefault();
      //     if (test) console.log("Ctrl Key pressed");
      // }

      // ==========================Bug
      // switch(key){
      //     case 'Escape':
      //         lastInput = currentInput;
      //         currentInput = searchInput.innerText ;
      //         if ((currentInput != '' || currentInput != undefined) && currentInput == lastInput)
      //         searchInput.focus();
      //         searchInput.innerText = '';
      //         searchResultContainer.replaceChildren();
      //         await initialIconsLoad();
      //         return;
      // }
      // ==========================Bug

      if (ctrl && (key == "g" || key == "G")) {
        ev.preventDefault();
        if (test) console.log("Key pressed down Ctrl+k");
        searchInput.focus();
      }
    }

    function addClickEventSearchKey() {
      // window.addEventListener('keyup', (ev) => { windowKeyPressed(ev) });
      // document.addEventListener('keyup', (ev) => { documentKeyPressedUp(ev) });
      document.addEventListener("keydown", (ev) => {
        documentKeyPressedDown(ev);
      });

      if (test) console.log("Inside SearchKey functions");
      searchInput.addEventListener("keyup", (ev) => {
        keyPressed(ev);
      });
    }

    async function loadIconSection(
      libraryName,
      libraryHeadingName,
      iconsLimit
    ) {
      /* ------------------- */
      /* Font Awesome Icons - filter to initial list */
      /* ------------------- */
      if (test) console.log("Inside load Icon Selection Method");
      let groupIconsAllArray = await getLibraryAllIcons(
        iconsAllArray,
        libraryName
      );
      if (testHighMem) console.log("All FA icons Inside: ", groupIconsAllArray);
      let groupIconsInitial = await getLibraryInitialIcons(
        groupIconsAllArray,
        iconsLimit
      );
      if (test) console.log("Intial Icons list : ", groupIconsInitial);
      await publishHTMLResults(
        libraryHeadingName,
        groupIconsInitial,
        groupIconsAllArray.length,
        libraryName
      );
      /* ------------------- */
    }

    function selectTabDetails(ev) {
      if (test) console.log("Tab Heading Clicked");
      for (let i = 0; i < tabDetails.length; i++)
        tabDetails[i].style.display = "none";
      for (let j = 0; j < tabDetails.length; j++)
        tabHeadings[j].classList.remove("active");
      if (test) console.log("Event Clicked", ev, ev.target);
      let tabDetailid = ev.target.dataset.iconcode + "-detail";
      document.getElementById(tabDetailid).style.display = "block";
      ev.target.classList.add("active");
    }

    async function copyToClipboard(clipboardText) {
      try {
        await navigator.clipboard.writeText(clipboardText);
        if (test) console.log("Copy to Clipboard Successful");
      } catch (error) {
        if (test) console.log("Copy to Clipboard Error ", error);
      }
    }

    function copyIconClicked(ev) {
      console.log(
        "Copy Icon clicked",
        ev,
        ev.target,
        ev.target.nextElementSibling
      );
      let icon = ev.target;
      let clipboardText = "";
      if (icon.classList.contains("content-copy-code")) {
        if (test) console.log("Code div clicked");
        console.log(
          icon.parentElement.previousElementSibling.firstElementChild.innerText,
          icon.classList.contains("content-copy-code")
        );
        clipboardText =
          icon.parentElement.previousElementSibling.firstElementChild.innerText;
      } else if (icon.classList.contains("content-icon-copy")) {
        if (test)
          console.log(
            "Icon Details right section clicked",
            icon.previousElementSibling.innerText
          );
        clipboardText = icon.previousElementSibling.innerText;
      }
      copyToClipboard(clipboardText);
      let copyTip = ev.target.nextElementSibling;
      copyTip.innerText = "Copied";
      copyTip.style.color = "chartreuse";
      setTimeout(() => {
        copyTip.innerText = "Copy";
        copyTip.style.color = "gold";
      }, 1000);
    }

    function addClickEventCopyTips() {
      addEventsForArrayOfElements(copyIcons, "click", copyIconClicked);
    }

    function addClickEventModalDetail() {
      addEventsForArrayOfElements(tabHeadings, "click", selectTabDetails);
    }

    async function fetchData(url) {
      try {
        let resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        return resp;
      } catch (error) {
        console.log("Fetch Error: ", error);
        return error.message;
      }
    }

    /**
     * The `initialIconsLoad` function asynchronously loads and displays various icon sections from
     * different libraries while also adding click events and handling search functionality.
     */
    async function initialIconsLoad() {
      status = "initial";
      /* All icons of the library */
      displayLoadingSign();
      iconsAllArray = await getAllIcons();
      // if (testHighMem) console.log("Get All Icons: ", iconsAllArray);
      if (test) console.log("Get All Icons: ", iconsAllArray);

      await showTotalCount();
      // --------------------------------------
      await loadIconSection(faIconName, faHeadingName, iconsLimit);
      await loadIconSection(laIconName, laHeadingName, iconsLimit);
      await loadIconSection(phIconName, phHeadingName, iconsLimit);

      // await loadIconSection(foundationIconName, foundationHeadingName, iconsLimit);
      // await loadIconSection(glyphIconName, glyphHeadingName, iconsLimit);
      // await loadIconSection(icomoonIconName, icomoonHeadingName, iconsLimit);
      // await loadIconSection(ioniconsIconName, ioniconsHeadingName, iconsLimit);
      // await loadIconSection(materialGoogleIconName, materialGoogleHeadingName, iconsLimit);
      // await loadIconSection(octiconsIconName, octiconsHeadingName, iconsLimit);
      // --------------------------------------
      addClickEventSearchResultContainer();
      addClickEventButtons();
      addClickEventSearchKey();
      addClickEventModalDetail();
      // addSearchHoverHelpTips();
      addClickEventCopyTips();
      offLoadingSign();
    }
    // Disabled to Test - Getting ne data from Icon Groups
    initialIconsLoad();
  });
})(); //Calling Closure Function - keep it in stack??
