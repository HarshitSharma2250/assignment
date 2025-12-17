
let authenticated=JSON.parse(localStorage.getItem('istrue'))
console.log(authenticated)
if (authenticated!=='authenticated') {
   window.location.href = 'login.html';
}

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};

function displayCartItems() {
    let cartContainer = document.getElementById('Cart_Items');
    // Clear previous content
    cartContainer.innerHTML = '';

    Object.values(cartItems).forEach((cartItem) => {
        let div = document.createElement('div');
        div.id = 'cart_product_items';

        // For the image section--------------------------------------------------
        let div_image = document.createElement('div');
        div_image.id = 'cart_image_box';
        let pic = document.createElement('img');
        pic.src = cartItem.pic;
        div_image.appendChild(pic);

        // For the text content section-------------------------------
        let div_content = document.createElement('div');
        div_content.id = 'cart_content_box';
        let productName = document.createElement('p');
        productName.textContent = cartItem.name;

      //  buttons for increase or decrease quantity------------------------------------
let decreaseeQuantity=document.createElement('button')
decreaseeQuantity.textContent=' - '

decreaseeQuantity.addEventListener('click',()=>{
    if(cartItem.quantity>1)
    CounterQuantoty(-1,cartItem.name)
})

let quantity = document.createElement('span');
quantity.textContent = 'Quantity: ' + cartItem.quantity;
console.log(cartItem.quantity)


        let increaseeQuantity=document.createElement('button')
        increaseeQuantity.textContent=' + '

        increaseeQuantity.addEventListener('click',()=>{
            CounterQuantoty(+1,cartItem.name)
        })
// end quantity buttons--------------------------------------------------------------

        let price = document.createElement('p');
        price.textContent = 'Price: ' + cartItem.price;

        // Create a remove button------------------------------------------
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove items';
        removeButton.addEventListener('click', () => {
            removeCartItem(cartItem.name);
        });

        div_content.append(productName,decreaseeQuantity, quantity,increaseeQuantity, price, removeButton);

        // Append the elements to the container--------------------------------
        div.append(div_image, div_content);
        cartContainer.appendChild(div);
    });
}

// function increase dcrease quantity --------------------------------------
function CounterQuantoty(quant,targetname){
 cartItems= JSON.parse(localStorage.getItem('cartItems')) || {};

  if (cartItems[targetname]) {
    cartItems[targetname].quantity += quant;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems()
    
}



// Function to remove a cart item by product name------------------------------------
function removeCartItem(productName) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
 // Remove the item from the cartItems object
 delete cartItems[productName];

 // Update the cartItems in local storage
 localStorage.setItem('cartItems', JSON.stringify(cartItems));

 // Redisplay the updated cart items
 displayCartItems();
 window.location.href='Cart.html'
}

// Call the function to display cart items when the page loads
 displayCartItems()
