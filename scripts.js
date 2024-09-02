document.addEventListener('DOMContentLoaded', function() {
    // Alert for Subscribe Button
    const subscribeButton = document.getElementById('subscribe-button');
    if (subscribeButton) {
        subscribeButton.addEventListener('click', function() {
            alert('Thank you for subscribing.');
        });
    }

    // Alert for Add to Cart Buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to the cart');
        });
    });

    // Alert for Submit Button in Contact Form
    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            alert('Thank you for your message');
        });
    }

    // Example Cart Logic
    let cartItems = [];

    const viewCartButton = document.getElementById('view-cart-button');
    if (viewCartButton) {
        viewCartButton.addEventListener('click', function() {
            if (cartItems.length > 0) {
                alert('Cart has items.');
            } else {
                alert('Cart is empty.');
            }
        });
    }

    // Add to Cart Button Functionality
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartItems.push('New Item'); // Add new item to cart
            alert('Item added to the cart');
        });
    });
});