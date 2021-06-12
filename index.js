// $(‘div’).addClass(‘swatantra’).hide();


// function $(eleName, arr = []) {

// //    console.log(eleName);

//     function hide() {}

//     function show() {}

//     function addClass(el) {}

//     let functions = {
//         addClass,
//         hide,
//         show,
//     }

//     return {
//         ...functions,
         
        
//     }
// }


// class $ {
//     constructor(eleName) {
//         this.elemArray = [eleName];
//     }

//     addClass(el) {
//     }

//     hide() {}


//     show() {}



// }

//  console.log($("div"))


// let list = [];

// function $(elemName) {
//     list = document.querySelectorAll(elemName);
// }

// $.prototype.addClass =  function(className) {
//     let element;

//     for (let i = 0; i < list.length; i++) {
//         const element = list[i];
//         element.className += " " + className;
//     }
// }



// class dummySelector {

//     listItems = [];
//     constructor(elemName) {
//         // this.listItems = document.querySelectorAll(elemName);
//         this.listItems = [""];
//     }

//     addClass(className) {
//         // let element;
//         for (let i = 0; i < this.listItems.length; i++) {
//             // element = this.listItems[i];
//             this.listItems[i].className += " " + className;
//         } 

//         return this;
//     }

//     show() {
//         console.log("show")
        
//         return this;
//     }

//     hide() {


//         return this;
//     }


// }



// function $(elemName) {
//     const selectorsMethod = new dummySelector(elemName);
//     const [listItems, ...rest] = selectorsMethod;

//     return {
//         listItems,
//         ...rest
//     };
// }


// console.log($("div"));








function wrapperFunction() {
    let functionCount = {};

     return function(fn)  {
        let context = this;
        let args = arguments;
        let name = fn.name;
        if(functionCount.hasOwnProperty(name)) {
            functionCount[name] += 1;
            console.log("no of times" + name, functionCount[name])
        } else {
            functionCount[name] = 1;
            console.log("no of times" + name, functionCount[name])

        }

        fn.apply(context, args);
     }

    
}

const counterFunction = wrapperFunction();

function log() {
    console.log("log")
}

function log1() {
    console.log("log")
}


counterFunction(log);
counterFunction(log);
counterFunction(log1);




function fetchRetry(url, options = {}, retryCount = 3) {
    return fetch(url, options).then( res => {
        if(res.ok) return res.json();
        if(retryCount > 0) {
            return fetchRetry(url, options, retryCount - 1);
        } else {
            throw new Error(res);
        }
    }). catch(console.error);
}


fetchRetry("",{},10);