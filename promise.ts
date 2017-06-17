function getIftari(callback: Function){
    setTimeout(() => {
        callback(['Mango', 'Banan', 'Chat']) 
    }, 2000)
}

//console.log('getIftari', getIftari());

getIftari((iftari) => {
    if(iftari){
        console.log('Wait for Azan')
    }else{
        console.log('Try some other place')
    }
})


function add(num1, num2){
    return num1 + num2;
}

if(add(1, 3) == 4){

}else{

}

function getIftariP() : Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Mango', 'Banan', 'Chat'])
        }, 1000)
    })
}

const iftariPromise = getIftariP();

iftariPromise.then((iftari) => {
 console.log('getIftariP', iftari);
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('second')
        }, 3000)
    });
}).then((response) => {
    console.log('c response', response)
      return 555;
}).then((response) => {
    console.log('c response', response)
})

var task1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'one');
});

task1.then((res) => {
    console.log('res :', res);
})

function getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
        resolve('Resolved!')
    })
}

getPromise().then((respose) => {
        console.log('respose :', respose);
})

// fetch('https://gocleanlaundry.herokuapp.com/api/products').then((response) => {
//         return response.json()
// }).then((products) => {
//     console.log('products :', products);
// })