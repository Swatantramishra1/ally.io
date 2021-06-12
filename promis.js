


let input = [ ];


function promiseAll(promises) {
    let results = [];

    return new Promise((resolve, reject) => {
        promises.forEach((p,index) => {
            p.then((result) => {
                results.push(result);
                if (index === promises.length) {
                    resolve(results);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    })
};

let promise = new Promise((resolve, reject) => {})

