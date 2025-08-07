const products = [
    {
      id: 1,
      name: "Solglasögon",
      price: 199,
      image: "image/solglasögon.jpg"
    },
    {
      id: 2,
      name: "Sneakers",
      price: 799,
      image: "image/sneakers.jpg"
    },
    {
      id: 3,
      name: "T-shirt",
      price: 1299,
      image: "image/tshirt.jpg"
    },
    {
        id: 4,
        name: "Smartwatch",
        price: 1299,
        image: "image/smartwatch.jpg"
      }
  ];
  
  let cart = [];
  
  function renderProducts() {
    const container = document.getElementById('product-list');
    container.innerHTML = '';
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price} kr</p>
        <button onclick="addToCart(${product.id})">Lägg i varukorg</button>
      `;
      container.appendChild(card);
    });
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    cartItems.innerHTML = '';
    let total = 0;
  
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price} kr`;
      cartItems.appendChild(li);
      total += item.price;
    });
  
    cartTotal.textContent = total;
    cartCount.textContent = cart.length;
  }
  
  function toggleCart() {
    document.getElementById('cart').classList.toggle('hidden');
  }
  
  // Init
  renderProducts();
  