// This is CommonJS module. Coverted to ES Module var require: NodeJS.Require
let http = require("http");
let fs = require("fs");
let path = require('path');
let directorypath = '/home/fern/Documents/ferntest/svg';
let directoryfileoutput = '/home/fern/Documents/ferntestoutput/fileoutput.json';

let test = false;


let svgObjectArray = [];

let svgObjefunctionctList = {
    name: "",
    svg: "<svg></svg>"
};


const myPromise1 = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation

    if (test) console.log('Inside ReadDirFiles function');

    fs.readdir(directorypath, (err, files) => {
        if (err) {
            console.error("Error Reading Directory: ", err);
            return;
        }
        console.log('Files in the directory:');

        files.forEach(file => {
            if (test) console.log("File name: ", file);
            let filepath = directorypath + "/" + file;
            let data = fs.readFileSync(filepath, 'utf8');
            if (test) console.log("file Content: ", data);
            svgObjefunctionctList.name = file.split('.')[0];
            svgObjefunctionctList.svg = data;
            svgObjectArray.push(JSON.parse(JSON.stringify(svgObjefunctionctList)));
            if (test) console.log('SVG object: ', svgObjectArray);

            // fs.readFile(filepath, 'utf8', (err, data) => {
            //     if (err) {
            //         console.log(err);
            //         return;
            //     }
            //     console.log("file Content: ", data);
            //     svgObjefunctionctList.name = file.split('.')[0];
            //     svgObjefunctionctList.svg = data;
            //     svgObjectArray.push(JSON.parse(JSON.stringify(svgObjefunctionctList)));
            //     console.log('SVG object: ', svgObjectArray);

            // });
        })
        resolve(svgObjectArray);
        if (test) console.log('Total Array after read: ', svgObjectArray)
    })

});
myPromise1
    .then((data) => {
        let filecontentstring = JSON.stringify(data);

        fs.writeFile(directoryfileoutput, filecontentstring, (err) => {
            if (err) {
                console.log("error vvriting: ", err);
                return;
            }
            console.log('File vvritten');
        })
    })

    .catch((error) => {
        console.error("Error: Promise rjected: ", error); // Executed if any promise in the chain is rejected
    });
