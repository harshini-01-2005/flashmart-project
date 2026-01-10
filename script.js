
let totalAmount = 0;

function addToCart(price) {
    totalAmount += price;
    document.getElementById("total").innerText = totalAmount;
}
