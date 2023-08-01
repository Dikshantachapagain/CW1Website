// this code increments the value in the cart if user clicks in the cart

// select the html elements
const addBtns = document.querySelectorAll("#cart-add");
const cartTotal = document.getElementById("cart-total")

// addBtns variables holds array of all the cart buttons . there are multiple buttons so we need to loop through each
addBtns.forEach((btn) => {

  // on each button set event listener that fires a function when button is clicked. the callback function increments the value of cart
  btn.addEventListener("click", function ()  {
    cartTotal.innerText = +cartTotal.innerText + 1;
  });
});

