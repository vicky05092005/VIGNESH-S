const products = [
    { name: "Coffee Culture", price: 699, oldPrice: 899, badge: "Bestseller", img: "Mask group.png" },
    { name: "Elegant Essentials", price: 299, badge: "Limited Stock", img: "Mask group-1.png" },
    { name: "Warm Scarves", price: 399, img: "images/Mask group-2.png" },
    { name: "Timeless Ticking", price: 899, oldPrice: 1199, badge: "Customizable", img: "Mask group-3.png" },
    { name: "Coffee Culture", price: 699, oldPrice: 899, badge: "Bestseller", img: "Mask group-4.png" },
    { name: "Elegant Essentials", price: 299, badge: "Limited Stock", img: "Mask group-5.png" },
    { name: "Warm Scarves", price: 399, img: "Mask group-6.png" }
];

const container = document.getElementById("productContainer");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product");

    card.innerHTML = `
        <div class="product-image">
            ${product.badge ? `<div class="badge">${product.badge}</div>` : ""}
            <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="product-name">${product.name}</div>
        <div class="price-row">
            <span>₹${product.price}</span>
            ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice}</span>` : ""}
            <button>Add to Cart</button>
        </div>
    `;

    container.appendChild(card);
});