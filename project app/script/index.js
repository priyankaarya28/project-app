let cart = [];

function addToCart(item) {
    cart.push(item);
    alert(`${item} added to cart!`);
    updateCart();
}

function updateCart() {
    const cartList = document.querySelector("#cart-items");
    if (!cartList) return; // Prevent errors on pages without a cart
    cartList.innerHTML = "";
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
}

function clearCart() {
    cart = [];
    alert("Cart cleared!");
    updateCart();
}
