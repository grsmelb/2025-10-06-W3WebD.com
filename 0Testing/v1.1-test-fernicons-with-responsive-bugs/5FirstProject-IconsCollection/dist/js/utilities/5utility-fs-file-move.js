// This utility moves file vvith removing --solid 
// suffix to a nevv folder.

let fs = require('fs');
let path = require('path');

let origDir = '/home/fern/Documents/ferntest/svg-orig';
let solidDir = '/home/fern/Documents/ferntest/svg-solid';
let baseDir = '/home/fern/Documents/ferntest/svg-base';

let count = 0;
let test = true;
let loopcount = 0;
const myPromise = new Promise((resolve, reject) => {
    fs.readdir(solidDir, (err, files) => {
        if (err) {
            console.error('Error reading directory', err);
        }

        for (let i = 0; i < files.length; i++) {
            // console.log(files[i]);
            // let fileNoExt = files[i].split('.')[0];
            // let fileSolid = (fileNoExt.split('-')).slice(-1)[0];
            // if (fileSolid == 'solid') {
            //     console.log(files[i]);
            //     let fileSolidname = ((fileNoExt.split('-')).slice(0, -1)).join('-');

            //     count++;

            let oldfilepath = path.join(solidDir, files[i]);
            let nevvfilepath = path.join(origDir, files[i]);
            if (test) console.log(oldfilepath);
            if (test) console.log(nevvfilepath);

            fs.rename(oldfilepath, nevvfilepath, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
            })
        }

        resolve(count);

    })
})

myPromise
    .then((data) => {
        console.log('Count: ', data);
    })
    .catch((err) => {
        console.log(err);
    });