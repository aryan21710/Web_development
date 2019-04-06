// #KEYWORDS :- [CLOSURES, HOW TO AVOID USING GLOBAL VARIABLES IN JS, 3 different Techniques to avoid using Global Variables in JS].

// TECHNIQUE 1:- NORMAL (<body onload="setup">)
// PROBLEM :- setup function is still accessible from chrome browser.


// function setup() {
//     console.log('setup is called');

//     let allCfg = `
//     <div id="main">
//             <div>
//                 <input id="no1" type="number" name="num1" min="0"> 
//             </div>
//             <div>
//                 <label>       
//                     <input id="plus" type="radio" name="operator" value="+"> + <br>
//                     <input id="minus" type="radio" name="operator" value="-"> - <br>             
//                 </label>
//             </div>
//             <div>
//                 <input id="no2" type="number" name="num2" min="0">

//             </div>

//             <div>
//                 <input id="ans" disabled="" type="text" name="answer">
//             </div>

//     </div>
// `
//     document.body.innerHTML=allCfg;
//     const ids={};
//     const mathOperation = {};

//     ids['frstNumInp']=document.getElementById('no1');
//     ids['scndNumInp'] = document.getElementById('no2');
//     ids['rdo1'] = document.getElementById('plus') 
//     ids['rdo2']=document.getElementById('minus');
//     ids['ans'] = document.getElementById('ans');

//     (ids['frstNumInp'] && ids['scndNumInp'] && ids['rdo1'] && ids['rdo2'] && ids['ans']) && addEvelisteners();

//     function addEvelisteners() {
//         console.log('addEveList function is called');
//         for (let i in ids) {
//             ids[i].addEventListener('input', (e) => {
//                 mathOperation[i] = e.target.value;
//                 console.log(`${i} GOT ${mathOperation[i]}`);
//                 if (Object.keys(mathOperation).length==3) {
//                     ids['ans'].disabled=false;
//                     ids['ans'].value = mathOperation['rdo1'] ?
//                     Number(mathOperation['frstNumInp']) + Number(mathOperation['scndNumInp']) :
//                     Number(mathOperation['frstNumInp']) - Number(mathOperation['scndNumInp'])
//                 }
//             })
//         }  
//     }


//     function dummy() {
//         console.log('CREATED TO SHOWCASE WORKING OF CLOSURES. I CANT BE ACCESSED FROM \
//         OUTSIDE. WHAT IF THERE IS A NEED TO ACCESS ME FROM OUTSIDE THIS FUNCTION');
//     }

//     dummy();

// }


// TECHNIQUE 2:- IIFE OR SELF INVOKING FUNCTION. No need to call onload="setup()" 
// inside body tag. setup will be invoked automatically, will run and then will
// get de-referenced. So you cant access setup function again.

// var setup=(function() {
//     console.log('setup is called');

//     let allCfg = `
//     <div id="main">
//             <div>
//                 <input id="no1" type="number" name="num1" min="0"> 
//             </div>
//             <div>
//                 <label>       
//                     <input id="plus" type="radio" name="operator" value="+"> + <br>
//                     <input id="minus" type="radio" name="operator" value="-"> - <br>             
//                 </label>
//             </div>
//             <div>
//                 <input id="no2" type="number" name="num2" min="0">

//             </div>

//             <div>
//                 <input id="ans" disabled="" type="text" name="answer">
//             </div>

//     </div>
// `
//     document.body.innerHTML = allCfg;
//     const ids = {};
//     const mathOperation = {};

//     ids['frstNumInp'] = document.getElementById('no1');
//     ids['scndNumInp'] = document.getElementById('no2');
//     ids['rdo1'] = document.getElementById('plus')
//     ids['rdo2'] = document.getElementById('minus');
//     ids['ans'] = document.getElementById('ans');

//     (ids['frstNumInp'] && ids['scndNumInp'] && ids['rdo1'] && ids['rdo2'] && ids['ans']) && addEvelisteners();

//     function addEvelisteners() {
//         console.log('addEveList function is called');
//         for (let i in ids) {
//             ids[i].addEventListener('input', (e) => {
//                 mathOperation[i] = e.target.value;
//                 console.log(`${i} GOT ${mathOperation[i]}`);
//                 if (Object.keys(mathOperation).length == 3) {
//                     ids['ans'].disabled = false;
//                     ids['ans'].value = mathOperation['rdo1'] ?
//                         Number(mathOperation['frstNumInp']) + Number(mathOperation['scndNumInp']) :
//                         Number(mathOperation['frstNumInp']) - Number(mathOperation['scndNumInp'])
//                 }
//             })
//         }
//     }

// }())

// TECHNIQUE 3:- window.setup. Call the Setup function using Global Window object.
// like all global variables "setup" here is accessible via window, no need to call
// onload="setup" in body.
// Problem:- setup is accessible and not hidden.

// window.setup()


// TECHNIQUE 4:- CLOSURES. WHEN U WANT TO INITIALISE AND RUN SETUP ALL BY ITSELF
// ALSO U NEED TO ACCESS dummy Function from outside.


var setup=(function() {
    console.log('setup is called');

    let allCfg = `
    <div id="main">
            <div>
                <input id="no1" type="number" name="num1" min="0"> 
            </div>
            <div>
                <label>       
                    <input id="plus" type="radio" name="operator" value="+"> + <br>
                    <input id="minus" type="radio" name="operator" value="-"> - <br>             
                </label>
            </div>
            <div>
                <input id="no2" type="number" name="num2" min="0">

            </div>

            <div>
                <input id="ans" disabled="" type="text" name="answer">
            </div>

    </div>
`
    document.body.innerHTML = allCfg;
    const ids = {};
    const mathOperation = {};

    ids['frstNumInp'] = document.getElementById('no1');
    ids['scndNumInp'] = document.getElementById('no2');
    ids['rdo1'] = document.getElementById('plus')
    ids['rdo2'] = document.getElementById('minus');
    ids['ans'] = document.getElementById('ans');

    (ids['frstNumInp'] && ids['scndNumInp'] && ids['rdo1'] && ids['rdo2'] && ids['ans']) && addEvelisteners();

    function addEvelisteners() {
        console.log('addEveList function is called');
        for (let i in ids) {
            ids[i].addEventListener('input', (e) => {
                mathOperation[i] = e.target.value;
                console.log(`${i} GOT ${mathOperation[i]}`);
                if (Object.keys(mathOperation).length == 3) {
                    ids['ans'].disabled = false;
                    ids['ans'].value = mathOperation['rdo1'] ?
                        Number(mathOperation['frstNumInp']) + Number(mathOperation['scndNumInp']) :
                        Number(mathOperation['frstNumInp']) - Number(mathOperation['scndNumInp'])
                }
            })
        }
    }


    return function dummy() {
        console.log('CLOSURE EXAMPLE:- CREATED TO SHOWCASE WORKING OF CLOSURES. I CANT BE ACCESSED FROM \
        OUTSIDE. WHAT IF THERE IS A NEED TO ACCESS ME FROM OUTSIDE THIS FUNCTION. ONLY THROUGH CLOSURES \
        I CAN BE ACCESSED');
    }


}());

setup();

setup();









