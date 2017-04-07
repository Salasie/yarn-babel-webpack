// Arrow Functions ES6
let test = x => {
    console.log(x);
}

// Promises ES6
let promiseFunction = valor => {
    return new Promise(
        (resolve, reject) => {
            if(valor){
                resolve("Hola Mundo");
            }else{
                reject("Error");
            }
        }
    );
}

//Call Promises ES6
promiseFunction(false).then(
    x => {
        test(x);
    }
).catch(
    y => {
        test(y);
    }
);