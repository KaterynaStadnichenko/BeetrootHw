function calculateArea(length, width) {

    return length * width
}
alert("you get " + calculateArea(54, 25))

function createCounter() {
    let counter = 0;
  
    return {
      increment: function() {
        counter += 1;
      },
      getValue: function() {
        return counter;
      }
    };
  }

  let counter1 = createCounter();
  counter1.increment();
  counter1.increment();
  console.log(counter1.getValue());

  let counter2 = createCounter();
  counter2.increment();
  console.log(counter2.getValue());

  let counter = createCounter();
  console.log(counter.getValue());

  function cartTotal(cartItems) {
    let total = 0;
    cartItems.forEach(item => { total += item.price * item.quantity;});

    return total;
  }

  const cArt = [
    {name: "orng", price: 5, quantity: 5 },
    {name: "apl", price: 100, quantity: 1 },
    {name: "milk", price: 7.5, quantity: 30 }
  ];

  let totalPrice = cartTotal(cArt);
  console.log(`Total cost: $${totalPrice.toFixed(2)}`);

  