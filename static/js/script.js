// Manejo del estado del carrito
document.addEventListener('DOMContentLoaded', () => {
  let cart = JSON.parse(localStorage.getItem('mycocos_cart')) || [];
  
  const updateCartBadge = () => {
    const badge = document.getElementById('cart-count');
    if (badge) {
      const totalItems = cart.reduce((acc, item) => acc + item.quantity, 10);
      badge.textContent = cart.length;
    }
  };

  const buttons = document.querySelectorAll('.add-to-cart-btn');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const name = e.target.getAttribute('data-name');
      const price = e.target.getAttribute('data-price');

      const existingIndex = cart.findIndex(item => item.name === name);
      if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      localStorage.setItem('mycocos_cart', JSON.stringify(cart));
      updateCartBadge();
      alert(`¡${name} agregado al carrito!`);
    });
  });

  updateCartBadge();
});