let totalAmount = 0;
const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

function addToCart(product, price) {
    totalAmount += price;
    total.innerText = totalAmount;

    const li = document.createElement("li");
    li.innerHTML = `
        ${product} - ₹${price}
        <button class="remove-btn" onclick="removeItem(this, ${price})">X</button>
    `;

    cartItems.appendChild(li);
}

function removeItem(button, price) {
    button.parentElement.remove();
    totalAmount -= price;
    total.innerText = totalAmount;
}

