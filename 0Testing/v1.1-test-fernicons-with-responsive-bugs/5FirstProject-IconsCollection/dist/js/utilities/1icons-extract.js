let faIconsJsonFile = "../data/icon-info-original/fa7-info/icons.json";
let faIconsFamilyJsonFile = "../data/icon-info-original/fa7-info/icon-families.json";
let faIconsSponsorJsonFile = "../data/icon-info-original/fa7-info/sponsors.json";

let test = true;
let testHighMem = false;

// (function () {
// document.addEventListener('DOMContentLoaded', () => {
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

async function fetchDataFAIcons() {
    let response = await fetchData(faIconsJsonFile);
    // let faIconsArrayObject = await JSON.parse(JSON.stringify(faIconsJsonAll.json()));
    // let faIconsArrayObject = await response.json();
    if (test) console.log('Response: ', response);

    let faIconsJsonAll = await response.json();
    // let fStringfaIconsArrayObject = JSON.stringify(faIconsJsonAll);
    // let f = JSON.parse(faIconsArrayObject);
    // let faIconsCount = faIconsArrayObject.length;
    // let fStringfaIconsArrayObject = Object.values(faIconsJsonAll);
    let fStringfaIconsArrayObject = Object.entries(faIconsJsonAll);
    let fStringfaIconsNames = Object.keys(faIconsJsonAll);

    for (let e of fStringfaIconsArrayObject) {
        e[1].name = e[0];
    }
    let fStringfaIconsArrayObjectMap = fStringfaIconsArrayObject.map(arrOfArr => arrOfArr[1])

    if (test) console.log("FAJSONFILE: ", faIconsJsonAll);
    // console.log("FAJSONFILE items count: ", faIconsCount);
    // console.log("FAJSONFILE items display: ", faIconsArrayObject);
    if (testHighMem) console.log("FAJSONFILE Array display: ", fStringfaIconsArrayObject);
    if (testHighMem) console.log("FAJSONFILE Array Keys: ", fStringfaIconsNames);
    if (testHighMem) console.log("FAJSONFILE Array Map: ", fStringfaIconsArrayObjectMap);

    // console.log("FAJSONFILE items Object.values: ", Object.values(faIconsArrayObject));
    return fStringfaIconsArrayObjectMap;
}

async function fetchDataFAIconsFamily() {
    let response = await fetchData(faIconsFamilyJsonFile);
    let faIconsFamily = await response.json();
    // let faIconsFamilyKeys = Object.keys(faIconsFamily);
    if (test) console.log("FA Icons Family:", faIconsFamily);
    // if (testHighMem) console.log("FA Icons Family:", faIconsFamilyKeys);
    let faArray = Object.entries(faIconsFamily);
    if (test) console.log("FA Icons Family Entries:", faArray);

    // let count = 0;
    for (let el of faArray) {
        
        // count++;
        // if (count>5)
        //     break;
        el[1].icongroup = 'font-awesome';
        el[1].name = el[0];
        el[1].searchterms = el[1].search.terms;
        el[1].iconfamily = (el[1].familyStylesByLicense.free)[0].family;
        let iconf = el[1].iconfamily ;
        el[1].iconstyle = (el[1].familyStylesByLicense.free)[0].style;
        let iconSty = el[1].iconstyle;
        el[1].svg = (((el[1].svgs)[iconf])[iconSty]).raw;
        el[1].classname = 'fa-' + `${iconSty} ` +`fa-`+`${el[0]}`;
        el[1].html = "<i class=\"" +  `${el[1].classname}`   + "\"></i>";
        // if (test)console.log(el);
    }
    let dataAll = faArray.map((el) => {
        let elAll = el[1];
        return elAll
    });

    let dataArrayObjects = dataAll.map(({ html, classname, icongroup, name, unicode, iconstyle, label, svg, searchterms, iconfamily }) => ({ html, classname,icongroup,name, unicode, iconstyle, label, svg, searchterms, iconfamily }));
    data = JSON.stringify(dataArrayObjects)
    // if (test) console.log(data);    

    return data; 
    // return faIconsFamilyKeys;

}
async function fetchDataFaIconSponsor() {
    let response = await fetchData(faIconsSponsorJsonFile);
    let faIconsSponsor = await response.json();
    let faIconsSponsorKeys = Object.keys(faIconsSponsor);
    if (test) console.log("FA Icons Sponsor:", faIconsSponsorKeys);
    sponsorsText = JSON.stringify(faIconsSponsorKeys);
    return sponsorsText;

}

async function createBlobURL(text) {
    let textFile = null;
    let data = new Blob([text], { type: 'text/plain' })
    if (textFile != null) {
        window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    return textFile;
}

async function downloadTextFile(filename, text) {
    let element = document.createElement('a');


    //Second option adding hrefcreate
    // element.setAttribute('href', 'data:text/plain;charset=utf-8,' +
    //     encodeURIComponent(text));


    element.href = await createBlobURL(text);


    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};



async function preprocessingData() {
    // let faIcons = await fetchDataFAIcons();
    // if (testHighMem) console.log("FA Icons:", faIcons);
    let faIconsFamily = await fetchDataFAIconsFamily();
    if (test) console.log("FA Icons Family Extract:", faIconsFamily);

    // const contentToSave = JSON.stringify(faIconsFamily);
    // const contentToSave = JSON.stringify(faIcons);        
    // if (testHighMem) console.log("FA Icons Family:", contentToSave);

    // let faIconsSponsor = await fetchDataFaIconSponsor();
    // const contentToSave = "Hello from the browser!";
    const contentToSave = faIconsFamily;
    // downloadTextFile('faIconsNames.json', contentToSave);

    downloadTextFile('faIconsExtract.json', contentToSave);
}

function preprocessingData1() {
    console.log("Anchor click Function enabled");
};

// preprocessingData();
// preprocessingData1();

// }) //DOM Content Loaded
// })();  //Function IIFE to avoid heap??