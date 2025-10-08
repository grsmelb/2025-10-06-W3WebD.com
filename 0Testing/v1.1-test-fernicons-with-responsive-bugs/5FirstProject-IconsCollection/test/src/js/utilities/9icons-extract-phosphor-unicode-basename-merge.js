import { phosphorUnicodeRaw } from "./zData/phosphor-icons-unicode-raw.js";

let faIconsJsonFile =
  "../data/icons-wip/icon-info-original/fa7-info/icons.json";
let faIconsFamilyJsonFile =
  "../data/icons-wip/icon-info-original/fa7-info/icon-families.json";
let faIconsSponsorJsonFile =
  "../data/icons-wip/icon-info-original/fa7-info/sponsors.json";

let laUnicodeFile =
  "../data/icons-wip/icons-collection/la-icons/1la-awesome-unicode-iconname.json";
let laSvgFile =
  "../data/icons-wip/icons-collection/la-icons/1la-iconslist-svg.json";

// const phosphorIconFile =
// "../data/icons-wip/icons-collection/phosphor-icons/phosphor-baseinfo.json";
const phosphorIconBaseFile =
  "../data/icon-groups/phosphor-icons-no-unicodes.json";

const phosphorIconUnicodeFile =
  "../data/icons-wip/icons-collection/phosphor-icons/phosphor-icons-unicode-1513-needfix.json";

let test = true;
let testHighMem = false;

let classnames = document.querySelectorAll(".icons__item");

let iconobjectarray = [];
let iconobject = {
  name: "",
  classname: "",
};
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
  } catch (error) {
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
  if (test) console.log("Response: ", response);

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
  let fStringfaIconsArrayObjectMap = fStringfaIconsArrayObject.map(
    (arrOfArr) => arrOfArr[1]
  );

  if (test) console.log("FAJSONFILE: ", faIconsJsonAll);
  // console.log("FAJSONFILE items count: ", faIconsCount);
  // console.log("FAJSONFILE items display: ", faIconsArrayObject);
  if (testHighMem)
    console.log("FAJSONFILE Array display: ", fStringfaIconsArrayObject);
  if (testHighMem) console.log("FAJSONFILE Array Keys: ", fStringfaIconsNames);
  if (testHighMem)
    console.log("FAJSONFILE Array Map: ", fStringfaIconsArrayObjectMap);

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
    el[1].icongroup = "font-awesome";
    el[1].name = el[0];
    el[1].searchterms = el[1].search.terms;
    el[1].iconfamily = el[1].familyStylesByLicense.free[0].family;
    let iconf = el[1].iconfamily;
    el[1].iconstyle = el[1].familyStylesByLicense.free[0].style;
    let iconSty = el[1].iconstyle;
    el[1].svg = el[1].svgs[iconf][iconSty].raw;
    el[1].classname = "fa-" + `${iconSty} ` + `fa-` + `${el[0]}`;
    el[1].html = '<i class="' + `${el[1].classname}` + '"></i>';
    // if (test)console.log(el);
  }
  let dataAll = faArray.map((el) => {
    let elAll = el[1];
    return elAll;
  });

  let dataArrayObjects = dataAll.map(
    ({
      html,
      classname,
      icongroup,
      name,
      unicode,
      iconstyle,
      label,
      svg,
      searchterms,
      iconfamily,
    }) => ({
      html,
      classname,
      icongroup,
      name,
      unicode,
      iconstyle,
      label,
      svg,
      searchterms,
      iconfamily,
    })
  );
  data = JSON.stringify(dataArrayObjects);
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
async function fetchDataPhosphor() {
  let response = await fetchData(phosphorIconFile);
  let phosphorDataJson = await response.json();
  let phosphorIconsKeys = Object.keys(phosphorDataJson);
  if (test) console.log("phosphor icons count:", phosphorIconsKeys.length);
  // sponsorsText = JSON.stringify(faIconsSponsorKeys);
  return phosphorDataJson;
}
async function createBlobURL(text) {
  let textFile = null;
  let data = new Blob([text], { type: "text/plain" });
  if (textFile != null) {
    window.URL.revokeObjectURL(textFile);
  }
  textFile = window.URL.createObjectURL(data);
  return textFile;
}

async function downloadTextFile(filename, text) {
  let element = document.createElement("a");

  //Second option adding hrefcreate
  // element.setAttribute('href', 'data:text/plain;charset=utf-8,' +
  //     encodeURIComponent(text));

  element.href = await createBlobURL(text);

  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

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

  downloadTextFile("faIconsExtract.json", contentToSave);
}

function preprocessingData1() {
  console.log("Anchor click Function enabled");
}

async function getUnicodeInfo() {
  let unicodefileresp = await fetchData(laUnicodeFile);
  // if (test) console.log("uniue file: ", unicodefileresp);
  let unicodedata = await unicodefileresp.json();
  if (test)
    console.log("uniue file resp count: ", unicodedata.length, unicodedata);

  return unicodedata;
}
async function getSvgInfo() {
  let svgfileresp = await fetchData(laSvgFile);
  // if (test) console.log("uniue file: ", unicodefileresp);
  let svgdata = await svgfileresp.json();
  if (test)
    console.log("uniue file resp count: ", svgdata.length, unicodedasvgdatata);

  return svgdata;
}
async function mergeonName(array1, array2) {
  const mergedArray = await array1.map((obj1) => {
    const matchingObj2 = array2.find((obj2) => obj2.name === obj1.name);
    return { ...obj1, ...matchingObj2 }; // Merge properties, later ones overwrite
  });

  // Add objects from array2 that didn't have a match in array1
  array2.forEach((obj2) => {
    if (!array1.some((obj1) => obj1.name === obj2.name)) {
      // mergedArray.push(obj2);
      console.log("Missed element: ", obj2);
    }
  });
  return mergedArray;
}

async function laAvesomeextract() {
  if (test) console.log("LaAvesomeextract is working");
  if (test) console.log("Icon Names count: ", classnames.length);

  for (let i = 0; i < classnames.length; i++) {
    iconobject.name = classnames[i]
      .querySelector(".icons__text")
      .innerText.trim();
    iconobject.classname = classnames[i]
      .querySelector(".icons__after i")
      .className.trim();
    iconobject.icongroup = "line-awesome";
    iconobject.iconfamily = "classic";
    iconobject.iconstyle = iconobject.classname.split(" ")[0];
    iconobject.html = `<i class="${iconobject.classname}"></i>`;
    iconobject.label = iconobject.name;
    iconobject.svg = `<svg></svg>`;
    iconobject.searchterms = [" "];
    iconobject.unicode = "44";

    iconobjectarray.push(JSON.parse(JSON.stringify(iconobject)));
    if (testHighMem)
      console.log("Icon Names count: ", classnames[i], iconobject);
    //     iconobject.html = (classnames[i].querySelector('.icons__after')).innerHTML
    //     iconobject.classname = (classnames[i].querySelector('.icons__after  i')).className;

    //     console.log("ClassNames HTML ", classnames[i], iconobject);
  }
  if (testHighMem) console.log("ClassNames Array ", iconobjectarray);

  // const uniqueArray = Array.from(new Set(originalArray.map(JSON.stringify))).map(JSON.parse);
  // const uarray = Array.from(new Set(iconobjectarray.map(JSON.stringify))).map(JSON.parse);

  const uniqueArray = Array.from(
    new Set(iconobjectarray.map(JSON.stringify))
  ).map(JSON.parse);

  if (test) console.log("ClassNames Array unik count", uniqueArray.length);

  let unicodedata = await getUnicodeInfo();
  let mergedDataUnicode = await mergeonName(uniqueArray, unicodedata);
  if (test)
    console.log(
      "ClassNames Array unik count",
      mergedDataUnicode.length,
      mergedDataUnicode
    );

  let svgdata = await getSvgInfo();
  let mergedData = await mergeonName(mergedDataUnicode, svgdata);

  let iconobjectarrayStrings = JSON.stringify(mergedData);

  downloadTextFile("laIconsExtract.json", iconobjectarrayStrings);
}

async function phosphorExtract() {
  if (test) console.log("PhosphorExtract inside Extract");
  let phosphorDataJson = await fetchDataPhosphor();

  if (test) console.log("Icon Names count: ", phosphorDataJson.length);

  let count = 0;
  for (let i = 0; i < phosphorDataJson.length; i++) {
    // for (let i = 0; i < 5; i++) {
    // if (test) console.log("Icon Name: ", phosphorDataJson[i].name);

    iconobject.name = phosphorDataJson[i].name;
    //     // iconobject.classname = (((classnames[i]).querySelector('.icons__after i')).className).trim();
    iconobject.icongroup = "phosphor-icons";
    iconobject.iconfamily = phosphorDataJson[i].style;

    let style = phosphorDataJson[i].name.split("-").slice(-1)[0];
    // if (test) console.log("Icon style: ", style);
    switch (style) {
      case "thin":
      case "fill":
      case "light":
      case "bold":
      case "duotone":
        // if (test) console.log("Special Icons");
        count++;
        // let temp = iconobject.name.slice(0,-1);
        // iconobject.name.delete;
        iconobject.name = iconobject.name.split("-").slice(0, -1).join("-");
        if (test) console.log("The reconstructed name is: ", iconobject.name);
        iconobject.classname = `ph-${style} ph-${iconobject.name}`;
        iconobject.iconstyle = style;
        break;
      default:
        //if (test) console.log("regular icon");
        iconobject.classname = `ph ph-${iconobject.name}`;
        iconobject.iconstyle = "regular";

        break;
    }
    //     // iconobject.iconstyle = (iconobject.classname).split(" ")[0];
    //     // iconobject.html = `<i class="${iconobject.classname}"></i>`;
    iconobject.html = `<i class="${iconobject.classname}"></i>`;

    iconobject.label = phosphorDataJson[i].name;
    iconobject.svg = phosphorDataJson[i].content;
    iconobject.searchterms = phosphorDataJson[i].tags.split(",");
    iconobject.unicode = "0";

    iconobjectarray.push(JSON.parse(JSON.stringify(iconobject)));

    //     if (testHighMem) console.log("Icon Names count: ", classnames[i], iconobject);
    //     //     iconobject.html = (classnames[i].querySelector('.icons__after')).innerHTML
    //     //     iconobject.classname = (classnames[i].querySelector('.icons__after  i')).className;

    //     //     console.log("ClassNames HTML ", classnames[i], iconobject);
  }
  // if (testHighMem) console.log("ClassNames Array ", iconobjectarray);
  if (test) console.log("ClassNames Array ", iconobjectarray);

  // // const uniqueArray = Array.from(new Set(originalArray.map(JSON.stringify))).map(JSON.parse);
  // // const uarray = Array.from(new Set(iconobjectarray.map(JSON.stringify))).map(JSON.parse);

  // const uniqueArray = Array.from(new Set(iconobjectarray.map(JSON.stringify))).map(JSON.parse);
  if (test) console.log("Special Icons Count:  ", count);

  // if (test) console.log("ClassNames Array unik count", uniqueArray.length);

  // let unicodedata = await getUnicodeInfo();
  // let mergedDataUnicode = await mergeonName(uniqueArray, unicodedata);
  // if (test) console.log("ClassNames Array unik count", mergedDataUnicode.length, mergedDataUnicode);

  // let svgdata = await getSvgInfo();
  // let mergedData = await mergeonName(mergedDataUnicode, svgdata);

  // let iconobjectarrayStrings = JSON.stringify(mergedData);
  let iconobjectarrayStrings = JSON.stringify(iconobjectarray);

  downloadTextFile(
    "phosphor-icons-extract-no-unicode.json",
    iconobjectarrayStrings
  );
}

let phosphorUnicodeObjectArray = [];
let phosphorUnicodeObject = {
  name: "test",
  unicode: 33,
};

async function downloadUnicodePhosphor() {
  console.log("clicked download");
  console.log(
    "JSON Phosphor Unicode file response: ",
    phosphorUnicodeRaw.length
  );
  console.log("whole object : ", phosphorUnicodeRaw);

  for (let i = 0; i < phosphorUnicodeRaw.length; i++) {
    // for (let i = 0; i < 5; i++) {
    phosphorUnicodeObject.name = phosphorUnicodeRaw[i].name;
    phosphorUnicodeObject.unicode =
      phosphorUnicodeRaw[i].codepoint.toString(16);
    // if (test) console.log(phosphorUnicodeObject);
    phosphorUnicodeObjectArray.push({ ...phosphorUnicodeObject });
  }
  if (test) console.log(phosphorUnicodeObjectArray);
  let phosphorUnicodeObjectArrayString = JSON.stringify(
    phosphorUnicodeObjectArray
  );
  if (test) console.log(phosphorUnicodeObjectArrayString);
  //  downloadTextFile("phosphor-icons-unicode.json",phosphorUnicodeObjectArrayString);
}

async function mergeUnicodePhosphor() {
  //  let phosphorNoUnicodeObjArray = await fetchDataPhosphor();
  //   console.log("JSON Phosphor No Unicode count: ", phosphorNoUnicodeObjArray.length);

  // let unicodenamedataResp = await fetchData(phosphorIconUnicodeFile);
  // console.log("JSON Phosphor Unicode file response: ", phosphorUnicodeRaw.length);
  // let unicodenamedata = unicodenamedataResp.json();
  // console.log("JSON Phosphor Unicode count: ", unicodenamedata.length);

  let phosphorBaseResp = await fetchData(phosphorIconBaseFile);
  if (test) console.log("JSON Phosphor Base file response: ", phosphorBaseResp);
  let phosphorBaseData = await phosphorBaseResp.json();
  if (test) console.log("JSON Phosphor Base Data: ", phosphorBaseData);

  let phosphorUnicodeResp = await fetchData(phosphorIconUnicodeFile);
  if (test)
    console.log("JSON Phosphor Unicode file response: ", phosphorUnicodeResp);
  let phosphorUnicodeData = await phosphorUnicodeResp.json();
  if (test) console.log("JSON Phosphor Unicode Data: ", phosphorUnicodeData);

  let phosphonBaseRegular = await phosphorBaseData.filter((el) => {
    return el.iconstyle == "regular";
  });
  if (test) console.log("JSON Phosphor Base Regular : ", phosphonBaseRegular);

  let mergedDataObjectArray = await mergeonName(phosphorBaseData, phosphorUnicodeData);

  let mergedDataObjectArrayStringJSON = JSON.stringify(mergedDataObjectArray);

  if (test) console.log("JSON Phosphor Unicode Merged Full data of 9K : ", mergedDataObjectArray);
  downloadTextFile("phosphor-icons.json", mergedDataObjectArrayStringJSON);

}

async function extractUnicodePhosphor() {
  let clickfn = document.querySelector(".utilities-list-link");
  // clickfn.addEventListener("click", downloadUnicodePhosphor);
  clickfn.addEventListener("click", mergeUnicodePhosphor);
}

extractUnicodePhosphor();
// preprocessingData();
// preprocessingData1();

// }) //DOM Content Loaded
// })();  //Function IIFE to avoid heap
