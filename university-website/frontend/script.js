// Here, you can add functions like adding items to the cart
console.log("Welcome to our website!");
// Fetch products from the backend API
fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(products => {
        console.log(products); // You can display them on the webpage
    })
    .catch(error => console.error('Error:', error));
// Example JavaScript for adding products to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
        // You can implement actual cart logic here (localStorage, cookies, etc.)
    });
});

// Example cart quantity update and removal
document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.cart-item').remove();
    });
});

// Fetch products and display them on the page
fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(products => {
        const productContainer = document.querySelector('.product-grid');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
            productDiv.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <a href="product-details.html?id=${product._id}" class="btn">View Details</a>
                <button class="add-to-cart" data-id="${product._id}">Add to Cart</button>
            `;
            productContainer.appendChild(productDiv);
        });
    })
    .catch(error => console.log('Error fetching products:', error));
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-id');
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Product added to cart!');
        });
    });
    