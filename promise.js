function getIftari(callback) {
    setTimeout(function () {
        callback(['Mango', 'Banan', 'Chat']);
    }, 2000);
}
//console.log('getIftari', getIftari());
getIftari(function (iftari) {
    if (iftari) {
        console.log('Wait for Azan');
    }
    else {
        console.log('Try some other place');
    }
});
function add(num1, num2) {
    return num1 + num2;
}
if (add(1, 3) == 4) {
}
else {
}
function getIftariP() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(['Mango', 'Banan', 'Chat']);
        }, 1000);
    });
}
var iftariPromise = getIftariP();
iftariPromise.then(function (iftari) {
    console.log('getIftariP', iftari);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('second');
        }, 3000);
    });
}).then(function (response) {
    console.log('c response', response);
    return 555;
}).then(function (response) {
    console.log('c response', response);
});
var task1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, 'one');
});
task1.then(function (res) {
    console.log('res :', res);
});
function getPromise() {
    return new Promise(function (resolve, reject) {
        resolve('Resolved!');
    });
}
getPromise().then(function (respose) {
    console.log('respose :', respose);
});
// fetch('https://gocleanlaundry.herokuapp.com/api/products').then((response) => {
//         return response.json()
// }).then((products) => {
//     console.log('products :', products);
// }) 
//# sourceMappingURL=promise.js.map