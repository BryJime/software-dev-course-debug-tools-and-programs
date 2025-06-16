const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500},
  { name: "Headphones", price: 200}
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
    // Changed <= to <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration 
    // Corrected last undefined iteration
  }
  return total;
}

function applyDiscount(total, discountRate) {
  return total - (total * discountRate); // Bug: Missing validation for discountRate
    // Added parenthesis to isolate total * discount for proper discountRate. 
}

function generateReceipt(cartItems, total) {
  if (total = isNaN){
    console.log("Total must be a number!");
    return "ERROR: Cannot generate receipt!";
  }
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number  
  return receipt;
    // Added if statement to account for non number values
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const totalItems = calculateTotal(cart);
const discountedTotal = applyDiscount(totalItems, .2); // 20% discount
const receipt = generateReceipt(cart, isNaN);
console.log(receipt);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;


