/* --------------------------------------------- 
    Program     : style.css
    author      : GRS
    Date        : Initial: 2025-06-25 00:51:27 IST
    Purpose     : WebDevtools - main entry css page
                  All Aids and tools for creating fullstack or any applications
                  Tools for Developers
   
    To Do        : - Make column flex whole body (header-body-footer) so when
                   shrunk it wont ovrelap. probably put overflow: hide??"
                   - Test Height of Main as "max-height" instead of "height"
                   see if the height stays for that div?? it wont??
                     - it is not working? Div max-height should work right??
                   - Set footer as max-height than height and check if overflow
                   happens??  
                   
                   - 100vh is causing issue as height is set hard
                   - Find what is the apple transparency menu bar
                   - / * Testing if links under nav section only behaves like that?? 
                   - To do menu floating and major issue will be done
    Question      : - why flex column, with overflow-hidden is making no scroll??

    Understanding : - All the issue happens due to the 100vh usage. the next element 
                      starts right after. This overlaps when the window height is so small 
------------------------------------------------- */

/* ------------------------------------------------------------ */
/* Clear all the preformat of the browsers */
/* ------------------------------------------------------------ */


3+3;
'Hellow';

let flt = parseFloat(`1.0`);
console.log("The flot conversion : " + flt);

let num = parseInt("333");
console.log("The Int value : " + num);

// let names= prompt(`What is your country?`)
let names = 'France';
console.log("The input was: " + names);

console.log(`The concatenated string: ` + flt + ' ' + 
    num + ' ' + names )

console.log( "The Addition of float and numb: " + (flt + num));
