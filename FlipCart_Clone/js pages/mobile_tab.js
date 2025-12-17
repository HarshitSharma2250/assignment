

 // Redirect to the login page----------------------------------------------------
 let authenticated=JSON.parse(localStorage.getItem('istrue'))
 console.log(authenticated)
 if (authenticated!=='authenticated') {
    window.location.href = 'login.html';
}





const brands_name = document.querySelectorAll('.brands_name input');
let mobile_product_content_right_side = document.getElementById('mobile_product_content_right_side');
let mobileproducts = [
    {
        pic: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81ZSn2rk9WL._AC_UL480_FMwebp_QL65_.jpg",
        name: "Samsung Galaxy M14 5G (ICY Silver,6GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor|2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus|Android 13|Without Charger",
        price: "12990 ",
        brand: "samsung"
    },
    {
        pic: "https://m.media-amazon.com/images/I/61LB+d0vheL._AC_UL480_QL65_.jpg",
        name: "OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage)",
        price: "19999 ",
        brand: "oneplus"
    },
    {
        pic: "https://m.media-amazon.com/images/I/81WimZLWH1L._AC_UL480_QL65_.jpg",
        name: "realme narzo 60X 5G（Stellar Green,6GB,128GB Storage ） Up to 2TB External Memory | 50 MP AI Primary Camera | Segments only 33W Supervooc Charge",
        price: "14999",
        brand: "realme"
    },
    {
        pic: "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UL480_QL65_.jpg",
        name: "Apple iPhone 13 (128GB) - Pink",
        price: "52990 ",
        brand: "Apple"
    }
]





function displayProducts(products) {
    // Clear previous content
    mobile_product_content_right_side.innerHTML = '';

    products.forEach((product) => {
        let div = document.createElement('div');
        div.id = 'right_content_item';

        let limgdiv = document.createElement('div');
        limgdiv.id = 'left_img_div';
        let pic = document.createElement('img');
        pic.src = product.pic;

        limgdiv.appendChild(pic);

        let right_content_mobile = document.createElement('div');
        right_content_mobile.id = 'mobile_right_side_content';
        let p1 = document.createElement('p');
        p1.textContent = product.name;
        let p2 = document.createElement('p');
        p2.textContent ="price : "+product.price;

        // Add a button for each item----------------------------------------
        let addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.addEventListener('click', () => {
            addToCart(product);
        });

        right_content_mobile.append(p1, p2, addButton);
        div.append(limgdiv, right_content_mobile);

        mobile_product_content_right_side.appendChild(div);
    });
}

function addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};

    if (cartItems[product.name] ) {
        alert('Item is already in the cart!');
    }  else{

        cartItems[product.name] = {
            ...product,
            quantity: 1
        };
            alert('Item added to cart!');
    }
    
    // Update the cartItems in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
 
}




brands_name.forEach((ele) => {
    ele.addEventListener('change', () => {
        const selectedBrands = Array.from(brands_name)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.nextElementSibling.textContent.toLowerCase().trim());

        if (selectedBrands.length === 0) {
            // If no brand is selected, display all products
            displayProducts(mobileproducts);
        } else {
            // Filter products based on selected brands
            const filteredMobiles = mobileproducts.filter((product) => selectedBrands.includes(product.brand.toLowerCase().trim()));
            displayProducts(filteredMobiles);
        }
    });
});

// Display products initially
displayProducts(mobileproducts);