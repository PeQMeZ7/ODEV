document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.querySelector(".ri-shopping-cart-line"); // Sepet ikonu
    const cartCount = document.createElement("span"); // Sayıyı gösterecek span
    cartCount.classList.add("cart-count");
    cartCount.textContent = "0"; // Başlangıçta 0
    cartIcon.appendChild(cartCount); // Sepet ikonuna ekle

    let count = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            if (count < 9) { // Sepet sınırı kontrolü
                count++;
                cartCount.textContent = count; // Ürün sayısını güncelle
                cartCount.style.display = "inline-block"; // Görünür yap
            }
        });
    });
});
