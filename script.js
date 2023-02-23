"use strict";
exports.__esModule = true;
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(tallmountains) {
    var tallestMountain = tallmountains.reduce(function (prev, current) { return (prev.height > current.height) ? prev : current; });
    return tallestMountain.name;
}
var mountainName = findNameOfTallestMountain(mountains);
console.log(mountainName);
var products = [
    {
        name: "oreo",
        price: 5
    },
    {
        name: "reeses",
        price: 4
    },
    {
        name: "butterfinger",
        price: 3
    }
];
function calcAverageProductPrice(items) {
    var counter = 0;
    var total = 0;
    items.forEach(function (p) {
        total += p.price;
        counter++;
    });
    return total / counter;
}
var avgPrice = calcAverageProductPrice(products);
console.log(avgPrice);
var inventory = [
    {
        product: {
            name: "motor",
            price: 10
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1
        },
        quantity: 20
    }
];
function calcInventoryValue(things) {
    var total = 0;
    things.forEach(function (i) {
        var itemtotal = i.product.price * i.quantity;
        total += itemtotal;
    });
    return total;
}
var finaltotal = calcInventoryValue(inventory);
console.log(finaltotal);
