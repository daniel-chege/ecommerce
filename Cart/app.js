let baseURLProducts = "http://localhost:3000/products/";
let baseURLCart = "http://localhost:3000/cart/";
// let products = []
// let products = [
// {
//     id          :Math.floor(Math.random()*10000),
//     image       :'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9pbCUyMHByb2R1Y3Rjc3xlbnwwfHwwfHx8MA%3D%3D',
//     prodName    : 'Overes Castor Oil',
//     description : 'Good oil For face and to remove blemish 250ml',
//     price : 2000,
//     inStock: 0
// },
// {
//     id          :Math.floor(Math.random()*10000),
//     image       :'https://images.unsplash.com/photo-1608571899778-51e02b3334f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
//     prodName    : 'Mushu Castor Oil',
//     description : 'Good oil For face and to remove blemish 250ml',
//     price : 2000,
//     inStock: 5
// },
// {
//     id          :Math.floor(Math.random()*10000),
//     image       :'https://images.unsplash.com/photo-1608571899778-51e02b3334f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
//     prodName    : 'Fushi Castor Oil',
//     description : 'Good oil For face and to remove blemish 250ml',
//     price : 2000,
//     inStock: 20
// }, {
//     id          :Math.floor(Math.random()*10000),
//     image       :'https://images.unsplash.com/photo-1608571899778-51e02b3334f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
//     prodName    : 'Shifu Castor Oil',
//     description : 'Good oil For face and to remove blemish 250ml',
//     price : 2000,
//     inStock: 20
// }, {
//     id          :Math.floor(Math.random()*10000),
//     image       :'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2lsJTIwcHJvZHVjdGNzfGVufDB8fDB8fHww',
//     prodName    : 'Pumba Castor Oil',
//     description : 'Good oil For face and to remove blemish 250ml',
//     price : 2000,
//     inStock: 20
// }, {
//     id          :Math.floor(Math.random()*10000),
//     image       :'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9pbCUyMHByb2R1Y3Rjc3xlbnwwfHwwfHx8MA%3D%3D',
//     prodName    : 'Sakura Castor Oil',
//     description : 'Good oil For face and to remove blemish 250ml',
//     price : 2000,
//     inStock: 20
// }
// , {
//     id          :Math.floor(Math.random()*10000),
//     image       :'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9pbCUyMHByb2R1Y3Rjc3xlbnwwfHwwfHx8MA%3D%3D',
//     prodName    : 'Mob Castor Oil',
//     description : 'Good oil For face and to remove blemish 250ml',
//     price : 2000,
//     inStock: 20
// }
// , {
//     id          :Math.floor(Math.random()*10000),
//     image       :'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9pbCUyMHByb2R1Y3Rjc3xlbnwwfHwwfHx8MA%3D%3D',
//     prodName    : 'Sokka Castor Oil',
//     description : 'Good oil For face and to remove blemish 250ml',
//     price : 2000,
//     inStock: 20
// }, {
//     id          :Math.floor(Math.random()*10000),
//     image       :'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9pbCUyMHByb2R1Y3Rjc3xlbnwwfHwwfHx8MA%3D%3D',
//     prodName    : 'Timone Castor Oil',
//     description : 'Good oil For face and to remove blemish 250ml',
//     price : 2000,
//     inStock: 20
// }
// ]
let products = [];
let cartList = [];

const cartNavBtn = document.querySelector(".cart-home");
const cartDiv = document.querySelector(".cart");

const contentDiv = document.querySelector(".content");
const cartBodyDiv = document.querySelector(".cart-body");
const cartItemBtn = document.querySelector(".cart-body");
const addProductBtn = document.getElementById("addProductBtn")
let plus = "+";
let minus = "-";

showProducts();
subtotal();
// display the products
async function showProducts() {
  // get the products
  products = await getAllProducts();
  console.log(products.length);

  console.log("hihi");
  let html = "";
  if (products.length !== 0) {
    products.forEach((p) => {
      // console.log("id is" + p.id)
      html += `
            <div class="card">
            <img src="${p.image}" alt="Product Image" lazy>
            <div class="product-details"
                <h3>${p.prodName}</h3>
                <p>${p.description}</p>
                <div>
                    <p>${p.price} KSH</p>
                    <button onClick="addToCart('${p.id}')" >Add to cart</button>
                </div>
            </div>
       </div>
            `;
    });
  } else {
    html = ` <p><i>No Products Found</i></p>`;
    console.log(" NO products Hihi");
  }

  contentDiv.innerHTML = html;
}
//open and close cart
cartNavBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(cartbtn.textContent)

  if (cartNavBtn.textContent === "Cart") {
    cartNavBtn.textContent = "X";
    cartDiv.style.right = 0;
    cartDiv.style.display = "flex";

    showCartItems();
    subtotal();

    // cart.style.right = 0
    // console.log(cartDiv.style.right = 0)
  } else {
    cartNavBtn.textContent = "Cart";
    cartDiv.style.right = "-500px";
    cartDiv.style.display = "none";
  }
});

// adds and itmes in the cartty
async function addToCart(id) {
  // console.log(products)
  let products = await getAllProducts();

  let product = products.find((p) => p.id === id);
  console.log("products", products, id);
  let cartid = Math.floor(Math.random() * 1000);
  let quant = 1;
  quant += 1;

  // get from the  data base
  cartList = await getCartList();
  // console.log("the carlist",cartList)
  let cartItem = cartList.find((item) => item.productId === id);
  if (cartItem !== undefined) {
    if (product.inStock > 0) {
      cartItem.quantity += 1;
      updateCartDB(cartItem);
      product.inStock -= 1;
      updateProductDb(product);
      showCartItems();
      subtotal();
      // console.log(product.inStock)
    } else {
      alert("No Available Item in stock !");
    }

    // console.log("Found")
  } else {
    // console.log("No Found")

    // console.log(product)

    if (product.inStock > 0) {
      cartItem = {
        // id :Math.floor(Math.random()*10000),
        productId: id,
        quantity: 1,
      };

      // addITemToDB
      // cartList.push(cartItem)
      if (addToCartDb(cartItem)) {
        console.log("added to Database");

        showCartItems();
        subtotal();
      } else {
        console.log(" could not add to Database");
      }
    } else {
      alert("No Available Item in stock !");
    }

    // console.log(cartList)
  }
}

// add items in the cart whn the add to cart buttom is
async function showCartItems() {
  cartList = await getCartList();
  console.log("showCartItems", cartList);
  html = "";
  if (cartList.length != 0) {
    console.log("ihih");
    console.log(cartList);
    cartList.forEach((item) => {
      let product = products.find((p) => p.id === item.productId);

      html += `
            <div class="cart-item">
            <div class="cart-product">
                <img src="${product.image}" alt="">
                <h4>${product.prodName}
                </h4>
            </div>
            <div class="item-price">
                <p class="cart-item-price">${
                  product.price * item.quantity
                }Ksh</p>
                <div class="cart-count">
                    <p class="cart-btn" onclick="minusCartItem('${
                      item.id
                    }')">${minus}</p>
                    <p class="item-count">${item.quantity}</p>
                    <p class="cart-btn" onclick="addCartItem('${
                      item.id
                    }')">${plus}</p>
                </div>
            </div>            
        </div>
            `;
    });
  } else {
    html = ` <p><i>Nothing in the cart</i></p>`;
    console.log("hoho");
  }
  cartBodyDiv.innerHTML = html;
}

//update using the plus or minus text
function addCartItem(itemId) {
  let item = cartList.find((i) => i.id === itemId);
  console.log("itemid," + itemId);
  let product = products.find((p) => p.id === item.productId);

  console.log("product", product);

  if (product.inStock > 1) {
    item.quantity += 1;
    updateCartDB(item);
    product.inStock -= 1;
    updateProductDb(product);
    showCartItems();
    // showProducts()
    subtotal();
    console.log(product.inStock);
  } else {
    alert("No Available Item in stock !");
  }
}

function minusCartItem(itemId) {
  // console.log(itemId)
  let item = cartList.find((i) => i.id === itemId);
  let product = products.find((p) => p.id === item.productId);
  console.log(item, product);

  if (item.quantity > 1) {
    item.quantity -= 1;
    updateCartDB(item);
    product.inStock += 1;
    updateProductDb(product);
    showCartItems();
    // showProducts()
    subtotal();
    // console.log(product.inStock)
  } else {
    removeFromCart(item);
  }
}

// delete from the cart
function removeFromCart(cartItem) {
  console.log(cartItem);

  let product = products.find((p) => p.id === cartItem.productId);
  if (confirm("Do you want to remove this item from your cart?")) {
    // cartList = cartList.filter(t => t.id !== cartItem.id)
    deleteCartFromDb(cartItem);
  }
  subtotal();
  showCartItems();
  // alert("Item  Removed from cart from method")
}

// remained herer and discount

function subtotal() {
  const totalDiv = document.querySelector(".subtotal");
  totalItems();
  html = "";
  totalCost = 0;
  console.log("cart list sub total" + cartList);
  cartList.forEach((item) => {
    let product = products.find((p) => p.id === item.productId);
    let price = product.price * item.quantity;
    totalCost += price;
  });

  html = `
        <p>Total:</p>
        <p class="total-price">${totalCost} ksh</p>
        `;
  totalDiv.innerHTML = html;

  console.log(totalCost);
}
async function totalItems() {
    html =""
  cartList = await getCartList();
  const cartHeader = document.querySelector(".cart-header");
  console.log("cart list sub total" + cartList);
  total = 0;
  cartList.forEach((item) => {
    total += item.quantity;
  });
  html = `  <h1>Your Cart</h1>
        <p>Total Items : ${total}</p>
    `;

  cartHeader.innerHTML = html;

  console.log(total);
}

///////////////////////////////////////////////////////////////////////////////
// fetch products
async function getAllProducts() {
  let response = await fetch(baseURLProducts);
  let products = await response.json();
  console.log(products);
  return products;
}

// getAllProducts()

// console.log(products);

//fetch all cart products

async function getCartList() {
  let response = await fetch(baseURLCart);
  let cartList = await response.json();
  return cartList;
}

async function addToCartDb(item) {
  let response = await fetch(baseURLCart, {
    method: "POST",
    body: JSON.stringify(item),
  });
}

function deleteCartFromDb(item) {
  let id = item.id;
  let response = fetch(baseURLCart + id, {
    method: "DELETE",
  });
}

function updateCartDB({ id, ...cartItem }) {
  let responce = fetch(baseURLCart + id, {
    method: "PUT",
    body: JSON.stringify(cartItem),
  });
}

function updateProductDb({ id, ...product }) {
  let response = fetch(baseURLProducts + id, {
    method: "PUT",
    body: JSON.stringify(product),
  });
}
function addProduct(product){
    let response  = fetch(baseURLProducts,{
        method : "POST",
        body : JSON.stringify(item)
    })
}

function deleteProduct(product) {
    let id = product.id;
    let response = fetch(baseURLProducts + id, {
      method: "DELETE",
    });
  }

addProductBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log("watched")
})