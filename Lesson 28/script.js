let shoppingReceipt = [
    { name: "Orange", amount: 5, pricePerItem: 6 },
    { name: "Milk", amount: 1, pricePerItem: 20 },
    { name: "Bread", amount: 2, pricePerItem: 5 },
    { name: "Potatoes", amount: 10, pricePerItem: 7 },
]

const printReciept = Object.values(shoppingReceipt);
console.log(printReciept);

function calculateTotal() {
    return shoppingReceipt.reduce((total, item) => total + (item.amount * item.pricePerItem), 0);
}
console.log(calculateTotal(shoppingReceipt));

console.log([...shoppingReceipt].sort((a,b) => a.pricePerItem - b.pricePerItem).pop().name)

function calculateAveragePrice() {
    let totalItems = shoppingReceipt.reduce((total, item) => total + item.amount, 0);
    let totalCost = calculateTotal();
    return totalCost / totalItems;
}

console.log("average price is ", calculateAveragePrice().toFixed(2));