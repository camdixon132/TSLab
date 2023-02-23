export{};

interface Mountain {
    name:string;
    height:number;
}

let mountains:Mountain[] = [
    {
        name:"Kilimanjaro",
        height:19341
    },
    {
        name:"Everest",
        height:29029
    },
    {
        name:"Denali",
        height:20310
    }
];

function findNameOfTallestMountain(tallmountains:Mountain[]):string{
    let tallestMountain:Mountain = tallmountains.reduce((prev, current) => (prev.height > current.height)? prev : current );
    return tallestMountain.name;
}

let mountainName:string = findNameOfTallestMountain(mountains);
console.log(mountainName);

//products
interface Product{
    name:string;
    price:number;
}

let products:Product[]=[
    {
        name:"oreo",
        price:5
    },
    {
        name:"reeses",
        price:4
    },
    {
        name:"butterfinger",
        price:3
    }
];

function calcAverageProductPrice(items:Product[]):number{
    let counter:number = 0;
    let total:number = 0;
    items.forEach((p:Product) => {
        total += p.price

        counter ++ ;
    });

    return total / counter;
}

let avgPrice:number = calcAverageProductPrice(products);
console.log(avgPrice);

//inventory
interface InventoryItem{
    product:Product;
    quantity:number;
}

let inventory:InventoryItem[] = [
    {
        product:{
            name: "motor",
            price: 10
        },
        quantity:10
    },
    {
        product:{
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product:{
            name: "LED",
            price: 1
        },
        quantity: 20
    }
];

function calcInventoryValue(things:InventoryItem[]):number{
    let total:number = 0;
    things.forEach((i:InventoryItem) => {
        let itemtotal = i.product.price * i.quantity;
        total += itemtotal;
    });
    return total;
}
 let finaltotal:number = calcInventoryValue(inventory);
 console.log(finaltotal);
