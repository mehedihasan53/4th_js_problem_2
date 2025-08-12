const phones = [
    { name: "xiaomi", price: 30000, color: "blue", camera: "64mp", quantity: 3 },
    { name: "samsung", price: 20000, color: "blue", camera: "64mp", quantity: 2 },
    { name: "Iphone", price: 130000, color: "blue", camera: "64mp", quantity: 1 },
    { name: "nokia", price: 10000, color: "blue", camera: "64mp", quantity: 4 },
    { name: "pixel", price: 32000, color: "blue", camera: "64mp", quantity: 6 },
    { name: "walton", price: 23000, color: "blue", camera: "64mp", quantity: 4 },
];

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

function totalMobilePrice(price) {
    let totalPrice = 0;
    for (const total of price) {
        totalPrice = totalPrice + total.price * total.quantity;
    }
    return totalPrice;
}

const total = totalMobilePrice(phones);
console.log("The Total Phone Prices is :", total);
