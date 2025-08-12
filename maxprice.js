const phones = [
    { name: 'xiaomi', price: 30000, color: 'blue', camera: '64mp' },
    { name: 'samsung', price: 20000, color: 'blue', camera: '64mp' },
    { name: 'Iphone', price: 130000, color: 'blue', camera: '64mp' },
    { name: 'nokia', price: 10000, color: 'blue', camera: '64mp' },
    { name: 'pixel', price: 32000, color: 'blue', camera: '64mp' },
    { name: 'walton', price: 23000, color: 'blue', camera: '64mp' }
]

function maxPriceMobile(mobile) {
    let maxPrice = mobile[0];
    for (const price of mobile) {
        if (price.price > maxPrice.price) {
            maxPrice = price;
        }
    }
    return maxPrice;
}

const prices = maxPriceMobile(phones);
console.log("The most expensive phone name is :", prices);