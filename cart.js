// Header
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const filterMenu = document.getElementById('filter-menu');
    const SignupMenu = document.getElementById('sign-menu');
    const ChatBot = document.getElementById('ChatBot-Box');

    document.getElementById('menu-toggle').addEventListener('click', function (event) {
        event.stopPropagation();
        navMenu.classList.toggle('show');
        filterMenu.classList.remove("show");
        SignupMenu.classList.remove("show");
        ChatBot.classList.remove("show");
    });

    document.getElementById('filter-toggle').addEventListener('click', function (event) {
        event.stopPropagation();
        filterMenu.classList.toggle('show');
        navMenu.classList.remove("show");
        SignupMenu.classList.remove("show");
        ChatBot.classList.remove("show");
    });

    document.getElementById('signup-toggle').addEventListener('click', function (event) {
        event.stopPropagation();
        SignupMenu.classList.toggle('show');
        navMenu.classList.remove("show");
        filterMenu.classList.remove("show");
        ChatBot.classList.remove("show");
    });

    document.getElementById('bot-toggle').addEventListener('click', function (event) {
        event.stopPropagation();
        ChatBot.classList.toggle("show");
        SignupMenu.classList.remove('show');
        navMenu.classList.remove("show");
        filterMenu.classList.remove("show");
    });

    document.addEventListener('click', function (event) {
        if (!navMenu.contains(event.target) && !filterMenu.contains(event.target) && !SignupMenu.contains(event.target) && !ChatBot.contains(event.target)) {
            navMenu.classList.remove("show");
            filterMenu.classList.remove("show");
            SignupMenu.classList.remove("show");
            ChatBot.classList.remove("show");
        }
    });
});

// Main
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach((item, index) => {
        const itemId = `cartItem_${index}`;
        let quantity = localStorage.getItem(itemId) || 0;

        const increaseBtn = item.querySelector('.increase');
        const decreaseBtn = item.querySelector('.decrease');
        const quantityDisplay = item.querySelector('.quantity');
        const priceDisplay = item.querySelector('.details p:nth-child(3)');
        const orderButton = item.querySelector('.order-button');
        const unitPrice = parseFloat(priceDisplay.textContent.replace('Price: $', ''));

        quantityDisplay.textContent = quantity;
        updatePrice();

        function updateQuantity(newQuantity) {
            quantity = Math.max(newQuantity, 0);
            quantityDisplay.textContent = quantity;
            localStorage.setItem(itemId, quantity);
            updatePrice();
        }

        function updatePrice() {
            const calculatedPrice = unitPrice * Math.max(quantity, 1);
            priceDisplay.textContent = `Price: $${calculatedPrice.toFixed(2)}`;
        }

        increaseBtn.addEventListener('click', () => {
            updateQuantity(parseInt(quantityDisplay.textContent) + 1);
        });

        decreaseBtn.addEventListener('click', () => {
            updateQuantity(parseInt(quantityDisplay.textContent) - 1);
        });

        orderButton.addEventListener('click', () => {
            // Order functionality can be added here if needed in the future
        });
    });
});
