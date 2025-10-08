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
    fs.readdir(origDir, (err, files) => {
        if (err) {
            console.error('Error reading directory', err)
        }

        for (let i = 0; i < files.length; i++) {
            // console.log(files[i]);
            let fileNoExt = files[i].split('.')[0];
            let fileSolid = (fileNoExt.split('-')).slice(-1)[0];
            if (fileSolid == 'solid') {
                console.log(files[i]);
                let fileSolidname = ((fileNoExt.split('-')).slice(0, -1)).join('-');
                // let firstPart = [...first, last];
                // if (test) console.log(fileSolidname);
                // if (test) console.log(last);
                count++;

                let oldfilepath = path.join(origDir, files[i]);
                let nevvfilepath = path.join(solidDir, fileSolidname) + '.svg'
                if (test) console.log(oldfilepath);
                if (test) console.log(nevvfilepath);

                fs.rename(oldfilepath, nevvfilepath, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                })
            }
            // let currentPath = origDir
            // count++;
        }
        // files.forEach(file => {
        //     loopcount++;
        //     if (loopcount < 10) break;
        //     let fileNoExt = file.split('.')[0];
        //     let fileSolid = fileNoExt.split('-')[-1];
        //     if (fileSolid == 'solid') {
        //         count++;
        //     }

        // })
        // if (test) console.log('Total Solid: ', count);
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