document.addEventListener('DOMContentLoaded', function() {
    
    const subscribeButton = document.getElementById('subscribe-button');
    if (subscribeButton) {
        subscribeButton.addEventListener('click', function() {
            alert('Thank you for subscribing.');
        });
    }
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeCartModal = document.getElementById('close-cart-modal');
    const viewCartButton = document.getElementById('view-cart-button');
    const clearCartButton = document.getElementById('clear-cart-button');
    const processOrderButton = document.getElementById('process-order-button');
    const cartItemsContainer = document.getElementById('cart-items');
    if (!sessionStorage.getItem('cartItems')) {
        sessionStorage.setItem('cartItems', JSON.stringify([]));
    }

    // Add items to cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const price = this.getAttribute('data-price');
            const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));

            cartItems.push({ product, price });
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

            alert('Item added to the cart');
        });
    });

    // View Cart
    viewCartButton.addEventListener('click', function() {
        cartModal.style.display = 'block';
        displayCartItems();
    });

    // Close Cart Modal
    closeCartModal.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    // Display Cart Items
    function displayCartItems() {
        const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
        cartItemsContainer.innerHTML = '';

        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cartItems.forEach(item => {
                const itemElement = document.createElement('p');
                itemElement.textContent = `${item.product} - $${item.price}`;
                cartItemsContainer.appendChild(itemElement);
            });
        }
    }

    // Clear Cart
    clearCartButton.addEventListener('click', function() {
        if (sessionStorage.getItem('cartItems') && JSON.parse(sessionStorage.getItem('cartItems')).length > 0) {
            sessionStorage.setItem('cartItems', JSON.stringify([]));
            alert('Cart cleared');
            displayCartItems();
        } else {
            alert('No items to clear.');
        }
    });

    // Process Order
    processOrderButton.addEventListener('click', function() {
        if (sessionStorage.getItem('cartItems') && JSON.parse(sessionStorage.getItem('cartItems')).length > 0) {
            sessionStorage.setItem('cartItems', JSON.stringify([]));
            alert('Thank you for your order');
            displayCartItems();
        } else {
            alert('Cart is empty.');
        }
    });

    // Store Contact Form Data using localStorage
    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                localStorage.setItem('customerName', name);
                localStorage.setItem('customerEmail', email);
                localStorage.setItem('customerMessage', message);
                alert('Thank you for your message');
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
   
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to the cart');
        });
    });

    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            alert('Thank you for your message');
        });
    }

  
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

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartItems.push('New Item'); 
            alert('Item added to the cart');
        });
    });
