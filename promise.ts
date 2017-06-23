function getProducts(){
    console.log('Hello')
    return fetch('https://gocleanlaundry.herokuapp.com/api/products').then((response) => {
         return response.json()
        })
}

getProducts().then((products) => {
    console.log('...', products);
})


const productsPromise: Promise<Response> = fetch('https://gocleanlaundry.herokuapp.com/api/products');

productsPromise.then((response) => {
    console.log('response :', response)
    return response.json()
}).then((products) => {
    console.log('products :', products)
})

// .then((response) => {
//         return response.json()
// }).then((products) => {
//     console.log('products :', products);
// })