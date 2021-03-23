const productsArr = [
  { title: 'Shirt', imgsrc: './img/shirt.png', price: 150},
  { title: 'Socks', imgsrc: './img/socks.png', price: 50},
  { title: 'Jacket', imgsrc: './img/jacket.png', price: 350},
  { title: 'Shoes', imgsrc: './img/shoes.png', price: 250},
];

let counter = 0;
const products = document.querySelector('.products');
const counterEl = document.getElementById('counter');
counterEl.textContent = counter;

products.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  counter++;
  counterEl.textContent = counter;
});

const renderProduct = (title = 'Product', price = 0, imgsrc = './img/pagenotfound.png') => {
  return `<div class="product-item">
            <h3>${title}</h3>
            <img src=${imgsrc} alt="">
            <p>${price}</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list) => {
  const productList = list.map((good) => {
     return renderProduct(good.title, good.price, good.imgsrc);
  });
  products.innerHTML = productList.join('');
};

// renderProducts([{}, {}, {}]);

renderProducts(productsArr);

