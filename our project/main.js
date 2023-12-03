let cartIcon=document.querySelector('#cart_icon');
let cart=document.querySelector('.cart');
let closeCart=document.querySelector('#close_cart');


// open_cart

cartIcon.onclick = () => {
    cart.classList.add("active");
};

// close_cart

closeCart.onclick = () => {
    cart.classList.remove("active");
};

// cart_working
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}

// macking function
function ready(){
    // remove item from cart
    var removeCartButtons= document.getElementsByClassName("cart_remove")
    console.log(removeCartButtons);
    for(var i=0;i<removeCartButtons.length;i++){
        var button=removeCartButtons[i]
        button.addEventListener("click", removeCartItem)
    }
    var quantityInputs=document.getElementsByClassName('cart_quantity')
    for(var i=0;i<quantityInputs.length;i++){
      var input= quantityInputs[i];
      input.addEventListener("change", quantitychanged);
    }

    // add to cart 
    var addCart= document.getElementsByClassName('add_cart');
    for(var i=0;i<addCart.length;i++){
        var button=addCart[i];
        button.addEventListener("click", addCartClicked);
    }
}

// remove item from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

// quantitychanged
function quantitychanged(event){
    var input=event.target;
    if (isNaN(input.value) || input.value <=0) {
        input.value=1;
    }
    updatetotal();
}
// add cart clicked 
function addCartClicked(event){
    var button = event.target
    var shopproduct=button.parentElement
    var title=shopproduct.getElementById('title')[0].innerText;
    console.log(title);
}

// update total

function updatetotal(){
    var cartContent=document.getElementsByClassName('cart_content')[0];
    var cartBoxs=document.getElementsByClassName('cart_box');
    var total=0;
    for(var i=0;i<cartBoxs.length;i++){
        var cartbox=cartBoxs[i];
        var priceElement=cartbox.getElementsByClassName('cart_price')[0];
        var quantityElement=cartbox.getElementsByClassName('cart_quantity')[0];
        var price=parseFloat(priceElement.innerText.replace("$","")); 
        var quantity=quantityElement.value;
        total=total + (price * quantity);
        // if price contain some cent values 
        total= Math.round(total * 100) /100;


        document.getElementsByClassName('total_price')[0].innerText = "$" + total;
}
}
