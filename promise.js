function getProducts() {
    console.log('Hello');
    return fetch('https://gocleanlaundry.herokuapp.com/api/products').then(function (response) {
        return response.json();
    });
}
getProducts().then(function (products) {
    console.log('...', products);
});
var productsPromise = fetch('https://gocleanlaundry.herokuapp.com/api/products');
productsPromise.then(function (response) {
    console.log('response :', response);
    return response.json();
}).then(function (products) {
    console.log('products :', products);
});
// .then((response) => {
//         return response.json()
// }).then((products) => {
//     console.log('products :', products);
// }) 
//# sourceMappingURL=promise.js.map