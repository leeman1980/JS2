// const productsArr = [
//   { title: 'Shirt', imgsrc: './img/shirt.png', price: 150},
//   { title: 'Socks', imgsrc: './img/socks.png', price: 50},
//   { title: 'Jacket', imgsrc: './img/jacket.png', price: 350},
//   { title: 'Shoes', imgsrc: './img/shoes.png', price: 250},
// ];

let counter = 0;
const cartBtn=document.querySelector('.btn-cart');
const products = document.querySelector('.products');
const counterEl = document.getElementById('counter');
counterEl.textContent = counter;
cartBtn.onclick=function(){
  alert ('ooo');
}

products.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  counter++;
  counterEl.textContent = counter;
});

// const renderProduct = (title = 'Product', price = 0, imgsrc = './img/pagenotfound.png') => {
//   return `<div class="product-item">
//             <h3>${title}</h3>
//             <img src=${imgsrc} alt="">
//             <p>${price}</p>
//             <button class="by-btn">Добавить в корзину</button>
//           </div>`;
// };

// const renderProducts = (list) => {
//   const productList = list.map((good) => {
//      return renderProduct(good.title, good.price, good.imgsrc);
//   });
//   products.innerHTML = productList.join('');
// };

// renderProducts([{}, {}, {}]);

//renderProducts(productsArr);
//---------------------------------------------------------
class Product {
  constructor(title, imgsrc, price) {
    this.title = title;
    this.imgsrc= imgsrc;
    this.price = price;
  }
  render() {
    return  `<div class="product-item">
    <h3>${this.title}</h3>
    <img src=${this.imgsrc} alt="">
    <p>${this.price}</p>
    <button class="by-btn">Добавить в корзину</button>
  </div>`;
  }
}

class Products {
  constructor() {
    this.productsArr = [];
  }
  fetchProducts() {
    this.productsArr = [
      { title: 'Shirt', imgsrc: './img/shirt.png', price: 150},
      { title: 'Socks', imgsrc: './img/socks.png', price: 50},
      { title: 'Jacket', imgsrc: './img/jacket.png', price: 350},
      { title: 'Shoes', imgsrc: './img/shoes.png', price: 250},
    ];
  }
  render() {
    let listHtml = '';
    this.productsArr.forEach(good => {
      const product = new Product(good.title,good.imgsrc, good.price);
      listHtml += product.render();
    });
    document.querySelector('.products').innerHTML = listHtml;
  }
  // подсчет стоимости всех товаров
 	calcAllCost() {
		return this.productsArr.reduce((sum, el) => sum + el.price, 0);
   }
 }
class CartList{
  render(){
    // отрисовка списка товаров в корзине
  }
  cartProductsCost(){
    // подсчет стоимости товаров в корзине
  }
  makeOrder(){
    // сделать заказ
  }
  cartClear(){
    // очистка корзины полностью
  }
}
class CartItem{
  render(){
    // отрисовка элемента корзины
  }
  changeQuantity(){
    //изменение количества товаров в корзине
  }
  productRemove(){
    // удаление товаров из корзины
  }
}
const productsList = new Products();
productsList.fetchProducts();
productsList.render();
console.log(productsList.calcAllCost());
