import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@7.1.0/dist/fuse.mjs'

(function () {
    document.addEventListener("DOMContentLoaded", function () {

        //Function name assignment
        let log = console.log;
        log("Script file included");

        /* Use Console Log - if in test mode */
        let test = true;
        // test = false;
        let testHighMem = true;
        testHighMem = false;
        let status = 'initial';


        let lastInput = '';
        let currentInput = '';

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
            octiconsIconInitial
            /* The above code is a JavaScript comment block. It is used to add comments in the code for
            documentation purposes. Comments are ignored by the JavaScript interpreter and are not
            executed as code. */
            ;

        // let iconsLimit = 24;
        // let iconsLimit = 27;
        let iconsLimit = 32;
        // let searchStartLimit = 0;
        let searchStartLimit = 1;


        let libraryName = 'font-awesome';
        let faIconName = 'font-awesome';
        let faHeadingName = 'FONT AWESOME';
        let foundationIconName = 'foundation';
        let foundationHeadingName = 'FOUNDATION';

        let glyphIconName = 'glyphicons';
        let glyphHeadingName = 'GLYPHICONS';

        let icomoonIconName = 'icomoon';
        let icomoonHeadingName = 'ICOMOON';
        let ioniconsIconName = 'ionicons';
        let ioniconsHeadingName = 'IONICONS';
        let materialGoogleIconName = 'material';
        let materialGoogleHeadingName = 'GOOGLE-MATERIALS';
        let octiconsIconName = 'octicons';
        let octiconsHeadingName = 'OCTICONS';



        function selectAllElements(elements) {
            return document.querySelectorAll(elements);

        };
        function selectFirstElement(elements) {
            return document.querySelector(elements);

        };

        function addEventsForArrayOfElements(elementArray = [], event = 'click', callBackMethod = () => { }) {
            if (elementArray.length > 0) {
                for (let i = 0; i < elementArray.length; i++)
                    elementArray[i].addEventListener(event, (ev) => { callBackMethod(ev) });
            }
        };


        /* ------------------------------------------ */
        /* Get query data from the form */
        /* ------------------------------------------ */
        let form = document.querySelector('#search-form');
        let searchHeading = document.querySelector('#search-library-heading');
        let searchInput = document.querySelector('#search-input');
        let searchResults = document.querySelector('#search-results');
        let searchResultContainer = document.querySelector('#search-results-container');
        let totalCount = document.querySelector('#total-count');
        let bttnClose = document.querySelector('.bttn-close');
        let modalWindow = document.querySelector('.modal-section');
        let modalContent = document.querySelector('.modal-content');
        let bttnMore = document.querySelector('.bttn-more');
        let tabHeadings = selectAllElements('.tablink');
        let tabDetails = selectAllElements('.tabcontent');
        let modalDetailIconImage = selectFirstElement('#modal-detail-Iconimage')
        let modalDetailIconHeading = selectFirstElement('.modal-detail-image-name-heading')
        let modalDetailCloseButton = selectFirstElement('.modal-close-button')
        let iconcontainer = document.querySelector('.modal-detail-IconimageContainer');
        let iconDetailHtmlCode = document.querySelector('.icon-detail-html-code');
        let iconDetailgroupName = document.querySelector('.modal-detail-group-name');
        let iconDetailClassName = document.querySelector('.modal-detail-class-name');
        let iconDetailHex = document.querySelector('.modal-detail-hex');
        let iconDetailEntity = document.querySelector('.modal-detail-entity');
        let copyIcons = selectAllElements('.content-copy');
        let loadingSign = document.querySelector('.loading-modal');

        // if (test) console.log('Search Result Container: ', searchResultContainer);
        // if (test) console.log('Search Result Container: ', totalCount);
        // if (test) console.log('Form: ', form);
        // if (test) console.log('Form: ', searchInput);
        // if (test) console.log('Results: ', searchResults);
        // if (test) console.log('Heading: ', searchHeading);
        // if (test) console.log('Search Result Container: ', bttnClose);
        // if (test) console.log('Search Result Container: ', modalWindow);
        // if (test) console.log('Search Result Container: ', modalContent);

        /* ------------------------------------------ */
        /* Create HTML output for search result */
        /* ------------------------------------------ */

        /* function generatePostHTML(post) {
            return `
                <article>
                    <h2><a href="${post.item.href}">${post.item.title}</a></h2>
                    <p>${post.item.description} </p>
                    <a class-"btn" href='${post.item.href}'>Read Post</a> 
                </article>
            `
        } */

        function shortenName(name) {
            // let limit = 10;
            // let limit = 12;
            let limit = 14;
            let end = limit - 1;

            let shortName = name;

            if (name.length > limit) {
                shortName = name.slice(0, end) + '...';
                // shortName = name.slice(0, end) + '..';
            }
            /* else {
                shortName = name;
            } */
            return shortName;

        }

        function generatePostHTML(post) {
            return `
        <article>
            <div data-iconname="${post.item.name}" 
                 data-icongroup="${post.item._tags[0]}" 
                 data-iconunicode="${post.item.unicode}" 
                 data-iconclass="${post.item.class}"  
             
                       class="result-icon-container icon-element tooltip-container">
                <p class="result-icon-name icon-element">${shortenName(post.item.name)}</p> 
                <div class="result-icon icon-element" >${post.item.html}</div>
                <p class="result-unicode unicode icon-element">${post.item.unicode}</p>  
                <aside class="search-tips-container icon-result-tips-container">
                    <div class=" search-tips">
                        <p class="search-tips-heading">QUICK DETAILS</p>
                        <p class="search-tips-points icon-result-tips-heading">
                            <span class="search-tips-subheading">Group: </span>
                            ${post.item._tags[0]}
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
                            ${post.item.class} 
                        </p>
                        <p class="search-tips-subheading more-info">Click for More Info</p>
                    </div>
                </aside>    
            </div>
        </article>
       `
        }

        function generateInitialIconsHTML(post) {

            // if (test) console.log("the HML IS");

            return `
        <article>
            <div 
                data-iconname="${post.name}" 
                data-icongroup="${post._tags[0]}" 
                data-iconunicode="${post.unicode}" 
                data-iconclass="${post.class}"   
                class="result-icon-container tooltip-container">
                <p class="result-icon-name">${shortenName(post.name)}</p> 
                <div class="result-icon" >${post.html}</div>
                <p class="result-unicode unicode">${post.unicode}</p> 
                <aside class="search-tips-container icon-result-tips-container">
                    <div class=" search-tips">
                        <p class="search-tips-heading">QUICK DETAILS</p>

                       <p class="search-tips-points icon-result-tips-heading">
                            <span class="search-tips-subheading">Group: </span>
                            ${post._tags[0]}
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
                            ${post.class} 
                        </p>
                        <p class="search-tips-subheading more-info">Click for More Info</p>

                    </div> 
                </aside>

            </div>
        </article>
        `
        }

        /* function generatePostHTML(post) {
            return `
                <article>
                    <div class="result-icon-container">
                        <!-- <p class="result-icon-name">${post.item.name}</p> -->
                        <!-- <p>Tags: ${post.item.tags} </p> -->
                        <!-- <i class="${post.item.class}"></i> -->
                        <!-- <p class="unicode">Unicode: \&\#x${post.item.unicode};</p> -->
                        <!-- <p class="unicode">Unicode: ${post.item.unicode}</p>  -->
                        <p class="result-icon-name">${shortenName(post.item.name)}</p> 
                        <div class="result-icon" >${post.item.html}</div>
                        <p class="result-unicode unicode">${post.item.unicode}</p>  
                    </div>
                </article>
            `
        }
        
        function generateInitialIconsHTML(post) {
            return `
                <article>
                    <div class="result-icon-container">
                        <!-- <p>Tags: ${post.tags} </p> -->
                        <!-- <i class="${post.class}"></i> -->
                        <!-- <p class="unicode">Unicode: \&\#x${post.unicode};</p> -->
                        <!-- <p class="unicode">Unicode: ${post.unicode}</p>  -->
                        <p class="result-icon-name">${shortenName(post.name)}</p> 
                        <div class="result-icon" >${post.html}</div>
                        <p class="result-unicode unicode">${post.unicode}</p>  
                    </div>
                </article>
            `
        }
        
         */
        /* 
        function generateInitialIconsHTML(post) {
            return `
                <article>
                    <div class="result-icon-container">
                        <p class="result-icon-name">${post.name}</p> 
                        <!-- <p>Tags: ${post.tags} </p> -->
                        <!-- <i class="${post.class}"></i> -->
                        <div class="result-icon" >${post.html}</div>
                        <!-- <p class="unicode">Unicode: \&\#x${post.unicode};</p> -->
                        <!-- <p class="unicode">Unicode: ${post.unicode}</p>  -->
                        <p class="result-unicode unicode">${post.unicode}</p>  
                    </div>
                </article>
            `
        } */
        /* ------------------------------------------ */
        /* Get Serach Results */
        /* ------------------------------------------ */
        async function getPosts() {
            try {
                // const res = await fetch("./data/icon-names/icons-fontawesome.json");
                const res = await fetch("./data/icon-names/icons-all.json");
                if (test) console.log('ResponseJsonFetch: ', res);
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const data = await res.json();

                if (testHighMem) console.log('ResponseJson: ', data);

                return data;
            } catch (error) {
                if (test) console.log('Error: ', error);
                return error.message;
            }
        }

        /* Array with objects filter based on one element inside object */
        // async function filterPosts(dataArray, compareItem, compareValue) {
        //     let filteredArray = dataArray.filter((item, index, array) => {
        //         return item.${compareItem} == compareValue;
        //     });
        //     return filteredArray;
        // }

        async function filterPostsSearch(dataArray, compareString) {
            let filteredArray = await dataArray.filter((item, index, array) => {
                if (item.hasOwnProperty('_tags')) {// return item._tags.length == 0;
                    let temp = item._tags;
                    if (testHighMem) console.log('Temp: ', temp[0]);
                    return temp[0] == compareString;
                }
                else
                    return false;
                /* if (item._tags.length > 0){
                    console.log('Item: ', item);
                    return item._tags[0] == 'font-awesome';
                } */
            });
            return filteredArray;
        }
        async function filterPostsInitial(dataArray, compareString) {
            let filteredArray = await dataArray.filter((item, index, array) => {
                if (item.hasOwnProperty('_tags')) {// return item._tags.length == 0;
                    let temp = item._tags;
                    if (testHighMem) console.log('Temp: ', temp[0]);
                    return temp[0] == compareString;
                }
                else
                    return false;
                /* if (item._tags.length > 0){
                    console.log('Item: ', item);
                    return item._tags[0] == 'font-awesome';
                } */
            });
            return filteredArray;
        }




        /* async function grs_retrieveSearchResults(query) {
            const posts = await getPosts();
            console.log("Posts: ", posts);
        
                // 2. Set up the Fuse instance
               const fuse = new Fuse(books, {
                   keys: ['title', 'author.firstName']
               })
           
               // 3. Now search!
               fuse.search('jon')
           
               // Output:
               // [
               //   {
               //     item: {
               //       title: "Old Man's War",
               //       author: {
               //         firstName: 'John',
               //         lastName: 'Scalzi'
               //       }
               //     },
               //     refIndex: 0
               //   }
             // ] 
            const fuse = new Fuse(posts, { keys: ['title', 'description'] })
            let output = fuse.search(query);
            console.log('Output: ', output);
        
            output.forEach(item => {
                console.log("Item: ", item.item.title);
            })
        
        } */


        /* ------------------------------------------ */
        /* Use Fuse.js to search the data JSON*/
        /* ------------------------------------------ */
        async function retrieveSearchResults(query) {
            const posts = await getPosts();
            if (testHighMem) console.log("Posts: ", posts);

            /* Get the Individual Libraries */
            let faIconsArray = await filterPostsSearch(posts, faIconName);
            if (testHighMem) console.log("filtered FA ICons: ", faIconsArray);

            const fuse = new Fuse(posts,
                {
                    keys: ['_tags', 'name', 'tags', "class", "unicode"],
                    // keys: ['name', 'tags'],
                    includeScore: true,
                    shouldSort: true,
                    includeMatches: true,
                    // minMatchCharLength: 3,
                    threshold: 0.3

                })

            let searchResults = fuse.search(query);
            if (testHighMem) console.log('Output: ', searchResults);

            return searchResults;

        }



        form.addEventListener('submit', async (e) => {

            //     if (test) console.log('event', e);
            e.preventDefault();

            //     // Alternative: Create/Get FormData
            //     //          Get from form - queryselector
            //     //          Get from form - event(submit).currentTarget
            //     let formData = new FormData(e.currentTarget);
            //     //let formData = new FormData(form);
            //     if (test) console.log('Form Data: ', formData);

            //     //Alternative: 
            //     //          Get from Object Entries
            //     //          Get from FormData.get("name-attribute")
            //     let query = formData.get('search-query');
            //     // let query = Object.fromEntries([...formData])
            //     if (test) console.log('Query: ', query);

            //     //Get Search result data
            //     const postsToDisplay = await retrieveSearchResults(query);
            //     if (testHighMem) console.log('Post To Display: ', postsToDisplay);
            //     //const htmlPosts = postsToDisplay.map(generatePostHTML).join("");
            //     //console.log("HTML Posts: ", htmlPosts); 
            //     searchResults.innerHTML =
            //         postsToDisplay.length > 0
            //             ? postsToDisplay.map(generatePostHTML).join("")
            //             : "No Results Found";
            //     if (test) console.log(searchResults.innerHTML);
        })



        async function getAllIcons() {

            let allIcons = await getPosts();
            if (testHighMem) console.log('Initial Load Posts: ', allIcons);
            return allIcons;
        }

        async function getLibraryAllIcons(allIcons, libName) {
            /* Get the Individual Libraries */
            let libraryIconsArray = await filterPostsInitial(allIcons, libName);
            if (testHighMem) console.log("filtered FA ICons: ", libraryIconsArray);
            return libraryIconsArray;
        }

        async function getLibraryInitialIcons(libraryAllIcons, iconsLimit) {
            // let iconsHundred = await iconsInitial.slice(0, 117);
            let libraryIconsInitial = await libraryAllIcons.slice(0, iconsLimit);
            if (testHighMem) console.log(`Initial ${iconsLimit} Posts: `, libraryIconsInitial);
            return libraryIconsInitial;
        }

        async function publishHTMLResults(libHeadingName, libIconsInitial, libIconsCount, libIconName) {

            if (test) console.log('LibHeading Name: ', libHeadingName);
            if (testHighMem) console.log('libIconsInitial: ', libIconsInitial);

            /* Heading creation for icon divs */
            let heading = document.createElement('h3');
            heading.id = 'search-library-heading';
            heading.classList.add('search-library-heading');
            // searchHeading.innerHTML = 'Font Awesome';
            // heading.innerHTML = libHeadingName + ' ' + libIconsCount;
            heading.innerHTML = libHeadingName;

            let count = document.createElement('div');
            count.id = 'hd-count';
            count.classList.add('hd-count');
            count.innerText = libIconsCount.toLocaleString("en-US") + ' Items';



            let divHead = document.createElement('div');
            divHead.id = "head-container";
            // divHead.classList.add("container-around");
            // divHead.classList.add("container-between");
            divHead.classList.add("head-container");
            divHead.classList.add("container-start");

            divHead.appendChild(heading)
            divHead.appendChild(count)

            // if (testHighMem) console.log('heading: ', heading);
            if (test) console.log('heading: ', heading);


            /* Icon Section container */
            let section = document.createElement('section');
            section.id = "search-results";
            if (testHighMem) console.log('section: ', section);
            section.classList.add('container-evenly');
            section.classList.add('icon-results');


            section.innerHTML =
                libIconsInitial.length > 0
                    ? libIconsInitial.map(generateInitialIconsHTML).join("")
                    : "No Results Found";
            // console.log(searchResults.innerHTML);
            // searchResultContainer.appendChild(heading);


            let btnMore = document.createElement('button');
            // let btnMore = document.createElement('div');

            // btnMore.id = 'btn-more';
            btnMore.classList.add('bttn-blk');
            btnMore.classList.add('bttn-more');
            btnMore.dataset.icongroup = libIconName;
            btnMore.dataset.icongroupName = libHeadingName;

            // btnMore.innerHTML = `Show category Icons 
            btnMore.innerHTML = `SHOW ALL`
            //  <!-- <span><i class="fa-solid fa-caret-right"></i></span>
            // <span><i class="fa-solid fa-circle-right"></i></span>
            // <span><i class="fa-solid fa-angle-right"></i></span> -->
            // <span class='bttn-more'><i class="fa-solid fa-angles-right bttn-more bttn-more-icon"></i></span>
            // `;

            let btnMoreIcon = document.createElement('i');
            btnMoreIcon.classList.add('fa-solid', 'fa-angles-right');
            // btnMoreIcon.classList.add('bttn-more', 'bttn-more-icon');
            btnMoreIcon.classList.add('bttn-more-icon');

            btnMoreIcon.dataset.icongroup = libIconName;
            btnMoreIcon.dataset.icongroupName = libHeadingName;

            btnMore.appendChild(btnMoreIcon);


            let btnDiv = document.createElement('div');
            btnDiv.id = 'btn-div';
            btnDiv.classList.add('container-end');
            btnDiv.appendChild(btnMore);


            let resultDiv = document.createElement('div');
            resultDiv.id = 'search-result-library-div';
            resultDiv.classList.add('search-result-library-div')


            resultDiv.appendChild(divHead);
            resultDiv.appendChild(section);
            if (status == 'initial')
                resultDiv.appendChild(btnDiv);


            // Clear all nodes of Result container if input value is there
            // if (searchInput.value != '' && searchInput.value != undefined) {
            //     if (test) console.log('Inside replacement section');

            //     searchResultContainer.replaceChildren();
            //     // searchResults.replaceChildren();

            // }
            if (status != 'initial') {
                if (test) console.log('Inside replacement section');

                searchResultContainer.replaceChildren();
                // searchResults.replaceChildren();
            }
            //Find scenarios hen this ould cause issue clearing the page
            // searchResultContainer.replaceChildren();


            //Add nev content
            searchResultContainer.appendChild(resultDiv);
            // searchResults.appendChild(resultDiv);

        }
        /* 
            async function loadInitlibrary(libName,iconsAll) {
                
              
                faIconsAllArray = await getLibraryAllIcons(iconsAll, libName);
                if (test) console.log('All FA icons Inside: ', faIconsAllArray);
        
                faIconsInitial = await getLibraryInitialIcons(faIconsAllArray, iconsLimit)
        
                publishHTMLResults(faHeadingName, faIconsInitial);
                
            }; 
            */

        /* Icon Library Collection */
        let libraryOfIcons = {
            libName: 'font-awesome',
            libHeadName: 'FONT AWESOME',
            libAllIcons: [],
            libInitIcons: [],
            libCDNLink: '',
            libWebLink: ''
        }

        async function generateResultHTML(postsToDisplay) {
            return await postsToDisplay.length > 0
                ? postsToDisplay.map(generatePostHTML).join("")
                : "No Results Found";

        }

        /**
         * The function `createIconResultSectionHTML` generates HTML elements to display search results
         * for icons based on the input provided.
         * @param postsToDisplay - It looks like you were about to provide more information about the
         * `postsToDisplay` parameter in the `createIconResultSectionHTML` function. Could you please
         * provide the rest of the details so that I can assist you further?
         * @param currentInput - The `currentInput` parameter in the `createIconResultSectionHTML`
         * function represents the current search input value that is being used to filter and display
         * search results. It is used to show what the search results are for, such as a keyword or
         * phrase that the user has entered for the search.
         * @param postsCollected - The `createIconResultSectionHTML` function you provided seems to be
         * creating a section with search results based on the input and posts collected. However, it
         * looks like the `postsCollected` parameter is missing in the description. Could you please
         * provide the content that should be included in the `posts
         */
        function createIconResultSectionHTML(postsToDisplay, currentInput, postsCollected) {


            /* Icon Section container */
            let section = document.createElement('section');
            section.id = "search-results";
            if (testHighMem) console.log('section: ', section);
            section.classList.add('container-evenly');
            section.classList.add('icon-results');


            //=================== Input Heading
            /* Heading creation for icon divs */
            let heading = document.createElement('h3');
            heading.id = 'search-library-heading';
            heading.classList.add('search-library-heading');
            // searchHeading.innerHTML = 'Font Awesome';
            // heading.innerHTML = libHeadingName + ' ' + libIconsCount;
            heading.innerHTML = "RESULT";

            let count = document.createElement('div');
            count.id = 'hd-count';
            count.classList.add('hd-count');
            let libIconsCount = postsToDisplay.length;
            count.innerText = libIconsCount.toLocaleString("en-US") + ' Items';

            let resultFor = document.createElement('div');
            resultFor.classList.add('result-for');
            // let resultfilter = 'RESULT FOR: '+ currentInput;
            let resultfilter = currentInput;

            resultFor.innerHTML = resultfilter;


            let divHead = document.createElement('div');
            divHead.id = "head-container";
            // divHead.classList.add("container-around");
            // divHead.classList.add("container-between");
            divHead.classList.add("head-container");
            divHead.classList.add("container-start");

            divHead.appendChild(heading)
            divHead.appendChild(count)
            divHead.appendChild(resultFor)



            //=================== Input Heading

            // Clear all nodes of Result container if input value is there
            // if (searchInput.value != '' && searchInput.value != undefined) {
            if (currentInput != '' && currentInput != undefined) {

                if (test) console.log('Inside replacement section');
                searchResultContainer.replaceChildren();
            }

            section.innerHTML = postsCollected;

            searchResultContainer.appendChild(divHead);

            searchResultContainer.appendChild(section);
        }


        async function showTotalCount() {

            let countDiv = document.createElement('div');
            countDiv.id = 'total-count';
            countDiv.classList.add('total-count');


            let count = document.createElement('h3');
            // let count = document.createElement('div');
            count.innerText = iconsAllArray.length.toLocaleString('en-US') + ' Icons'
            countDiv.appendChild(count);

            // searchResultContainer.insertAdjacentHTML('beforeend', countDiv.outerHTML);
            searchResultContainer.insertAdjacentHTML('afterbegin', countDiv.outerHTML);


        }

        function openDetailedModalWindow(ev) {
            // if (test) console.log("Open Detailed Modal Window", ev, ev.currentTarget, ev.currentTarget.dataset.icongroup);
            // let modalW = document.querySelector('.modal-section');
            // modalW.style.display = 'relative';
            // modalW.style.display = 'block';
            // modalW.style.display = 'flex';
            // modalWindow.classList.add('container-center');

            // modalDetailIconImage.classList.add(ev.currentTarget.dataset.iconclass);
            let iconclass = ev.currentTarget.dataset.iconclass;
            let groupname = ev.currentTarget.dataset.icongroup;
            let iconname = ev.currentTarget.dataset.iconname;
            let unicode = ev.currentTarget.dataset.iconunicode;

            // let iconhex = ev.currentTarget.dataset.iconname;
            let entity = '&#x' + unicode + ';'

            //    document.querySelector('#modal-detail-Iconimage').remove();

            let iconimg = ev.currentTarget.querySelector('i').outerHTML;
            if (test) console.log("Selected Icon Image Child: ", iconimg);
            // let iconcontainer = document.querySelector('.modal-detail-IconimageContainer');
            iconcontainer.innerHTML = iconimg;
            iconcontainer.querySelector('i').setAttribute('id', 'modal-detail-Iconimage');
            iconDetailHtmlCode.innerText = iconimg;

            iconDetailClassName.innerHTML = `<code>${iconclass}</code>`;
            iconDetailgroupName.innerText = groupname.toUpperCase();
            iconDetailHex.innerText = unicode.toUpperCase();
            iconDetailEntity.innerText = entity.toUpperCase();



            // let iconClassArray = iconclass.split(' ');
            // //  modalDetailIconImage.classList.add(...iconClassArray);

            // modalDetailIconImage.className = '';
            // modalDetailIconImage.classList.add(...iconClassArray);

            // if (test) console.log("Open Detailed Modal Window", ev, ev.currentTarget, ev.currentTarget.dataset.icongroup);
            // if (test) console.log("Icon Class, Icon Array, IconArray Spread ", iconclass, iconClassArray, ...iconClassArray);



            modalDetailIconHeading.innerText = iconname.toUpperCase();

            // modalDetailIconImage.innerText = iconClassArray + ' ' + typeof (iconClassArray);

            modalWindow.classList.add('container-start', 'container-vertical');


            // modalContent.innertext = ev.currentTarget.toString;
            // modalContent.innerHTML = `<h1>This is a Test </h1>`;
            // modalContent.innerHTML += `<br><p>${ev.currentTarget} </p>`;
            // let modalText = ev.currentTarget.dataset.icongroup + ' ' + ev.currentTarget.dataset.iconname;
            // modalContent.innerHTML = modalText;

            // modalContent.addchild(ev.currentTarget.dataset.icongroup);
            // modalContent.innerText = `<h1>This is a Test </h1>`;
            // modalContent.appendChild = `<h1>This is a Test </h1>`;


        };

        function iconSectionClicked(ev) {
            if (test) console.log('ICON SECTION CLICKED-current Target', ev.currentTarget);
            if (test) console.log('ICON SECTION CLICKED-Target', ev.target);

            openDetailedModalWindow(ev);
            // The below is not required as i could get the element values from the 
            // the continer itself and not the element.
            /* 
            if (ev.currentTarget.classList.contains('icon-element')) {
                console.log('Icon Element Clicked');
            }; */
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
            if (test) console.log('inside click event');

            // searchResults.addEventListener('click', iconButtonClicked, true);
            //  searchResults.addEventListener('click',iconButtonClicked,false);
            // let searchSection = document.querySelectorAll('.icon-results');
            // let searchSection = document.querySelectorAll('.icon-results');
            let searchSection = document.querySelectorAll('.result-icon-container');

            searchSection.forEach((element, index) => {
                element.addEventListener('click', (e) => {
                    iconSectionClicked(e);
                }, false);

                element.addEventListener('mouseover', (e) => {
                    iconSectionHoveredIn(e);
                }, true);
                element.addEventListener('mouseout', (e) => {
                    iconSectionHoveredOut(e);
                }, true);

                /*     element.addEventListener('click', (e)=>{
                    iconSectionClicked(e)
                },true); */
            })
            if (testHighMem) console.log("Search Section after load: ", searchSection);
            // searchResultContainer.addEventListener('click',iconButtonClicked,false);
            // searchSection.addEventListener('click', iconButtonClicked, false);
        };

        function closeModalWindow(ev) {
            if (test) console.log('Inside Close Modal buttons: ');
            // modalWindow.classList.remove('container-center');
            modalWindow.classList.remove('container-start', 'container-vertical');
            // modalWindow.style.display = 'none';

        }

        function addEventCloseButtonClickClose() {
            // bttnClose.addEventListener('click', (ev) => { closeModalWindow(ev); });
            modalDetailCloseButton.addEventListener('click', (ev) => { closeModalWindow(ev); });

        }
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                // behavior: "smooth" // Optional: for smooth scrolling animation
            });
        }

        async function showmoreButtonClicked(ev) {
            if (test) console.log('Buttons clicked : ', ev);
            if (test) console.log('Buttons clicked -target: ', ev.target);
            if (test) console.log('Buttons clicked -Icongroup: ', ev.target.dataset.icongroup);
            let groupIconName = ev.target.dataset.icongroup;
            let groupHeadingName = ev.target.dataset.icongroupName;
            let iconsLimit = 10000;
            // searchPublishAddevents(ev.target.dataset.icongroup);
            status = 'showmore'
            await loadIconSection(groupIconName, groupHeadingName, iconsLimit);
            addClickEventSearchResultContainer();
            scrollToTop();

        };

        function addEventShowmoreButtonClickMore() {
            let bttnsMore = selectAllElements('.bttn-more');
            if (test) console.log('Buttons More: ', bttnsMore);

            for (let i = 0; i < bttnsMore.length; i++) {
                if (test) console.log('Buttons More: ', bttnsMore[i]);
                bttnsMore[i].addEventListener('click', (ev) => { showmoreButtonClicked(ev); });

            }

        };


        function addClickEventButtons() {
            if (test) console.log('Inside Clickevent buttons: ');

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

            if (test) console.log('Inside Key Pressed', ev, { ev });
            if (test) console.log('The Key Pressed:', ev.key, ev.code);
            // if (test) console.log('The Input Text:', searchInput,searchInput.innerHTML);
            if (test) console.log('The Input Text:', searchInput.value);

            lastInput = currentInput;
            // ==================================
            // Sanitize the input
            // ==================================
            // currentInput = searchInput.value;
            //.value returns string so toString is not needed.
            currentInput = searchInput.value
                .toString()
                .trim()
                .replace(/<[^>]*>?/gm, '')
                // .replace(/&/g, '&amp;')
                // .replace(/</g, '&lt;')
                // .replace(/>/g, '&gt;')
                // .replace(/"/g, '&quot;')
                // .replace(/'/g, '&#x27;')
                // .replace(/\//g, '&#x2F;')
                // .replace(/[^a-zA-Z0-9\s.,!?-]/g, '')
                .replace(/[^a-zA-Z0-9\s]/g, '')
                ;

            switch (ev.key) {
                case 'Enter':
                    ev.preventDefault();
                    if (test) console.log('Enter Key Pressed ');
                    break;
                // case 'Esc':  
                case 'Backspace':
                case 'Escape':

                    if (test) console.log('Escape Key Pressed -svvitch case section');
                    if ((currentInput == '' || currentInput == undefined) && currentInput != lastInput) {
                        // issue it is not loading all the headings
                        // if (searchInput.value != '' && searchInput.value != undefined) {
                        //     if (test) console.log('Inside replacement section');

                        searchResultContainer.replaceChildren();
                        // searchResults.replaceChildren();

                        // }
                        await initialIconsLoad();
                        return;
                    }
            }
            //Limit input length to 20 characters
            if (currentInput.length > 20 || currentInput.length == searchStartLimit) {
                console.log("Input is greater than 20 characters and less than vvord length start limit");
                return;
            }
            //==================================

            //If the not typeable ckey is pressed - input value is same
            // Do nothing if no character typable input
            //Just check the input change
            if (currentInput == lastInput) {
                if (test) console.log('Same Input', searchInput.value);
                return;
            } else if (currentInput.toLowerCase() == 'javascript' ||
                currentInput.toLowerCase() == 'javscript:') {
                return;
            }
            else if (currentInput == '' || currentInput == undefined) {
                // issue it is not loading all the headings
                // if (searchInput.value != '' && searchInput.value != undefined) {
                //     if (test) console.log('Inside replacement section');

                searchResultContainer.replaceChildren();
                // searchResults.replaceChildren();

                // }
                await initialIconsLoad();
                return;
            } else {
                searchPublishAddevents(currentInput);
                // let postsToDisplay = await retrieveSearchResults(currentInput);

                // let postsCollected = await generateResultHTML(postsToDisplay);

                // createIconResultSectionHTML(postsToDisplay, currentInput, postsCollected);

                // addClickEventSearchResultContainer();
            }
        }
        function addClickEventSearchKey() {
            if (test) console.log('Inside SearchKey functions');
            searchInput.addEventListener('keyup', (ev) => { keyPressed(ev) })

        }

        // function addSearchHoverHelpTips() {
        //     searchInput.addEventListener('mouseover', showSearchTips)
        // }

        async function loadIconSection(libraryName, libraryHeadingName, iconsLimit) {

            /* ------------------- */
            /* Font Awesome Icons - filter to initial list */
            /* ------------------- */
            if (test) console.log("Inside load Icon Selection Method");

            let groupIconsAllArray = await getLibraryAllIcons(iconsAllArray, libraryName);
            if (testHighMem) console.log('All FA icons Inside: ', groupIconsAllArray);

            let groupIconsInitial = await getLibraryInitialIcons(groupIconsAllArray, iconsLimit)

            await publishHTMLResults(libraryHeadingName, groupIconsInitial, groupIconsAllArray.length, libraryName);
            /* ------------------- */
        }


        function selectTabDetails(ev) {
            if (test) console.log('Tab Heading Clicked');
            for (let i = 0; i < tabDetails.length; i++)
                tabDetails[i].style.display = 'none';
            for (let j = 0; j < tabDetails.length; j++)
                tabHeadings[j].classList.remove('active');
            if (test) console.log('Event Clicked', ev, ev.target);
            // ev.target.style.display = 'block';
            let tabDetailid = ev.target.dataset.iconcode + '-detail';
            document.getElementById(tabDetailid).style.display = 'block';

            ev.target.classList.add('active');

        }

        async function copyToClipboard(clipboardText) {
            try {
                await navigator.clipboard.writeText(clipboardText);
                if (test) console.log('Copy to Clipboard Successful');

            } catch (error) {
                if (test) console.log('Copy to Clipboard Error ', error);
            }
        };

        function copyIconClicked(ev) {
            console.log('Copy Icon clicked', ev, ev.target, ev.target.nextElementSibling);
            let icon = ev.target;
            let clipboardText = '';
            if (icon.classList.contains('content-copy-code')) {
                if (test) console.log('Code div clicked');
                console.log(icon.parentElement.previousElementSibling.firstElementChild.innerText,
                    icon.classList.contains('content-copy-code'));
                clipboardText = icon.parentElement.previousElementSibling.firstElementChild.innerText;
            } else if (icon.classList.contains('content-icon-copy')) {
                if (test) console.log('Icon Details right section clicked', icon.previousElementSibling.innerText);
                clipboardText = icon.previousElementSibling.innerText
            }

            copyToClipboard(clipboardText);

            let copyTip = ev.target.nextElementSibling;
            copyTip.innerText = "Copied";
            copyTip.style.color = "chartreuse";
            setTimeout(() => {
                copyTip.innerText = 'Copy';
                copyTip.style.color = "gold";

                // // copyTip.style.display='none';
                // copyTip.style.visibility = 'hidden';

            }, 1000);
        }

        function addClickEventCopyTips() {
            addEventsForArrayOfElements(copyIcons, 'click', copyIconClicked)

        }

        function addClickEventModalDetail() {
            addEventsForArrayOfElements(tabHeadings, 'click', selectTabDetails)
        }

        function displayLoadingSign() {
            loadingSign.style.display = 'flex';
        };

        /**
         * The function `offLoadingSign` hides the loading sign by setting its display property to 'none'.
         */
        function offLoadingSign() {
            loadingSign.style.display = 'none';
        }


        async function fetchData(url) {
            try {
                // let resp = await fetch(url+1);
                let resp = await fetch(url);
                // let data = await resp.json();
                if (!resp.ok) {
                    throw new Error(resp.statusText);
                }
                return resp;
            }
            catch (error) {
                console.log("Fetch Error: ", error);
                // return error;
                return error.message;

            }
            // let faIconsJsonJson = (await fetch("../data/icon-info-original/fa7-info/icon.json")).json();
            // let faIconsJsonJsonThen = await fetch("../data/icon-info-original/fa7-info/icon.json")
            //                                     .then((res)=>JSON.parse(res))
            //                                     .catch(err){
            //                                     };
        }

        /**
         * The `initialIconsLoad` function asynchronously loads and displays various icon sections from
         * different libraries while also adding click events and handling search functionality.
         */

        async function initialIconsLoad() {
            status = 'initial';
            /* All icons of the library */
            displayLoadingSign();
            iconsAllArray = await getAllIcons();
            if (testHighMem) console.log('Get All Icons: ', iconsAllArray);

            await showTotalCount();
            // /* ------------------- */
            // /* Font Awesome Icons - filter to initial list */
            // /* ------------------- */
            // libraryName = libraryOfIcons.libName;
            // if (test) console.log('Obj Test FA Name: ', libraryName);

            // libraryOfIcons.libAllIcons = await getLibraryAllIcons(iconsAllArray, libraryName);
            // if (testHighMem) console.log('All FA icons Inside: ', libraryOfIcons.libAllIcons);

            // libraryOfIcons.libInitIcons = await getLibraryInitialIcons(libraryOfIcons.libAllIcons, iconsLimit)
            // if (testHighMem) console.log('GG Test Object() name: ', libraryOfIcons.libInitIcons);
            // // if (test) console.log('Obj Test FA Name: ', libraryName);

            // publishHTMLResults(libraryOfIcons.libHeadName, libraryOfIcons.libInitIcons, libraryOfIcons.libAllIcons.length);
            // /* ------------------- */

            // --------------------------------------
            await loadIconSection(faIconName, faHeadingName, iconsLimit);
            await loadIconSection(foundationIconName, foundationHeadingName, iconsLimit);
            await loadIconSection(glyphIconName, glyphHeadingName, iconsLimit);
            await loadIconSection(icomoonIconName, icomoonHeadingName, iconsLimit);
            await loadIconSection(ioniconsIconName, ioniconsHeadingName, iconsLimit);
            await loadIconSection(materialGoogleIconName, materialGoogleHeadingName, iconsLimit);
            await loadIconSection(octiconsIconName, octiconsHeadingName, iconsLimit);
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


})() //Calling Closure Function - keep it in stack??
