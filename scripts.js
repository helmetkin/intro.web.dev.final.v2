document.addEventListener('DOMContentLoaded', function() {

    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeCartModal = document.getElementById('close-cart-modal');
    const viewCartButton = document.getElementById('view-cart-button');
    const clearCartButton = document.getElementById('clear-cart-button');
    const processOrderButton = document.getElementById('process-order-button');
    const cartItemsContainer = document.getElementById('cart-items');
    const subscribeButton = document.getElementById('subscribe-button');
    const subscribeModal = document.getElementById('subscribe-modal');
    const closeSubscribeModal = document.getElementById('close-subscribe-modal');
    const imageModal = document.getElementById('image-modal');
    const closeImageModal = document.getElementById('close-image-modal');
    const modalImage = document.getElementById('modal-image');
   

    if (!sessionStorage.getItem('cartItems')) {
        sessionStorage.setItem('cartItems', JSON.stringify([]));
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            addItemToCart(product, price);
        });
    });

    viewCartButton.addEventListener('click', function() {
        cartModal.style.display = 'block';
        displayCartItems();
    });

    closeCartModal.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    clearCartButton.addEventListener('click', function() {
        clearCart();
    });

    processOrderButton.addEventListener('click', function() {
        processOrder();
    });

    function addItemToCart(product, price) {
        let cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
        cartItems.push({ product, price });
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert('Item added to the cart');
    }

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

    function clearCart() {
        sessionStorage.setItem('cartItems', JSON.stringify([]));
        alert('Cart cleared');
        displayCartItems();
    }

    function processOrder() {
        const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
        if (cartItems.length > 0) {
            sessionStorage.setItem('cartItems', JSON.stringify([]));
            alert('Thank you for your order');
            displayCartItems();
        } else {
            alert('Cart is empty.');
        }
    }

    if (subscribeButton) {
        subscribeButton.addEventListener('click', function() {
            subscribeModal.style.display = 'block';
        });
    }

    if (closeSubscribeModal) {
        closeSubscribeModal.addEventListener('click', function() {
            subscribeModal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target == subscribeModal) {
            subscribeModal.style.display = 'none';
        }
    });

    
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const fullsizeImage = this.getAttribute('data-fullsize');
            modalImage.src = fullsizeImage;
            imageModal.style.display = 'block';
        });
    });

    closeImageModal.addEventListener('click', function() {
        imageModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == imageModal) {
            imageModal.style.display = 'none';
        }
    });

});
