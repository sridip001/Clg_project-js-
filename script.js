// Example function to toggle the visibility of products
function toggleProducts() {
    const productsSection = document.getElementById('products');
    productsSection.classList.toggle('hidden');
}

// Add event listener to the "Discover our products" button
document.querySelector('button').addEventListener('click', toggleProducts);