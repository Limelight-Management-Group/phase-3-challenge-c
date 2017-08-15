let modal = document.querySelector('.modal-content')
let modalOverlay = document.querySelector('.modal-overlay')
// let modalOpen = document.querySelectorAll('.cart-button')
let modalClose = document.querySelector('.modal-close')
// let addToCart = document.querySelectorAll('.item-button')
// let prices = document.querySelectorAll('.item-price')
// let names = document.querySelectorAll('.item-name')
// let clearButton = document.querySelector('.modal-clear')
// let shopCart = []
// let shopCartName = document.querySelector('#name')
// let shopCartPrice = document.querySelector('#price')
// let total = document.querySelector('.modal-section-amount')
// let priceArr = [] 
// let count = document.querySelector('#cart-item-count')
// let subtotal = []

// addToCart.forEach((elements, index) =>
//   elements.addEventListener('click', cartAdd(index))
// )

function getElements(elmSel) {
    return document.querySelectorAll(elmSel);
}

function getElement(elmSel) {
    return document.querySelector(elmSel);
}

let closeButton = getElement(".modal-close")
console.log('this is the close------>:', closeButton)   

let buttons = getElements(".cart-button");
console.log('these are the buttons----->:', buttons)

buttons.forEach((button) =>{
  console.log(button)
    button.addEventListener('click', openModal)
})

function openModal(){
  console.log('this is opening!')
  modal.classList.add('modal-open')
  modalOverlay.classList.add('hide-overlay')
}

closeButton.addEventListener('click', closeModal)
function closeModal(){
  console.log('I am in the close')
  modal.classList.remove('modal-open')
  modal.classList.remove('hide-overlay')
} 
// modalClose.addEventListener('click', closeModal)
// addToCart.addEventListener('click', cartAdd)
// clearButton.addEventListener('click', clearModal)
  
  // function clearModal(){
  //   // shopCart = []
  //   // shopCartSize = 0;
  //   console.log('this is on, boss')
  //   // updateCount())
  //   // updateTotal()
  //   subtotal = 0;
  //   total.innerHTML = 0
  // }

// function cartAdd(index) {
//   return function (){
//   shopCart.push({
//     name: names[index].textContent,
//     price: prices[index].textContent,
//   })
//   console.log('shopCart', shopCart)
//   updateTotal()
//   updateCount()
//   }
// }
// function updateCount(){
//   count.innerHTML = shopCart.length;
//   console.log(shopCart.length, 'item(s) here') 
// }
// function updateTotal(){
//   let newTotal = total.innerHTML = subtotal
//   console.log('this is working, dawg!!')
// }

// function closeModal(){
//   console.log('I am in the close')
//   modal.classList.remove('modal-open')
//   modal.classList.remove('hide-overlay')
// } 

