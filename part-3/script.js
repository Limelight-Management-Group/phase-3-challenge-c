let modal = document.querySelector('.modal-content')
let modalOverlay = document.querySelector('.modal-overlay')
// let modalOpen = document.querySelectorAll('.cart-button')
let modalClose = document.querySelector('.modal-close')
let subtotal = document.querySelector('.modal-section-amount')
console.log('this is the subtotal', subtotal.innerHTML)
let daysStayedDropdown = document.querySelector('.daysStayed')
var sum = 0;

function getElements(elmSel) {
    return document.querySelectorAll(elmSel);
}

function getElement(elmSel) {
    return document.querySelector(elmSel);
}

let closeButton = getElement(".modal-close")
// console.log('this is the close------>:', closeButton)   

let buttons = getElements(".cart-button");
// console.log('these are the buttons----->:', buttons)

buttons.forEach((button) =>{
  // console.log(button)
    button.addEventListener('click', openModal)
})
var currentDiv = document.querySelector(".priceOutput");
var currentPriceDiv = document.querySelector(".roomOutput");  

function openModal(){
  console.log('this is opening!')
  modal.classList.add('modal-open')
  modalOverlay.classList.add('hide-overlay')
  let newArr = []
  var newTR = document.createElement("tr");
  console.log('this is the newTR', newTR)
  newTR.innerHTML = buttons.forEach((button) =>{
      let text = button.OuterHTML = button
      newArr.push(text)
  })
  let newPriceArr = []
  let roomRate = document.querySelectorAll(".price")

  // console.log('this is buttonprice', buttonprice)
    var newTrPrice = document.createElement("tr");
  console.log('this is the newTrPrice', roomRate[0].innerHTML)
  // console.log('da room rate', roomRate)
  newTrPrice.innerHTML = roomRate.forEach((element) =>{
    // console.log('---->>', element.price)
      // let price = buttonprice.innerHTML = buttonprice.forEach((bprice) =>{
        // console.log(bprice)
      // })
      newPriceArr.push('pricer--->',price)
      // console.log('this is the ratee--->:',roomRate)
  })
    // console.log('this is newText', newPriceArr)
}

closeButton.addEventListener('click', closeModal)
function closeModal(){
  console.log('I am in the close')
  modal.classList.remove('modal-open')
  modal.classList.remove('hide-overlay')
}
var finalCost = []
// console.log('sums value', sum)
// console.log('the total cost arr',totalCostArr.spice())
let updatButton = document.querySelector('.updateTotal')
updatButton.addEventListener('click', updateTotal)
var totalCostArr = [];
// console.log('sum check',sum)
function updateTotal(){
  let currentValue = daysStayedDropdown.value
  console.log('checking daysValue:', currentValue)
  sum = Number(currentValue) * totalCostArr[0]
  console.log('the sum',sum)
  finalCost.push(sum)
  console.log('tca',totalCostArr)
  
  console.log('this is the sum---------<>', sum)

  // console.log('this is the total cost', totalCost)
}

console.log('finalCOST', finalCost)


//button selectors
let roomRate = document.querySelectorAll(".price")
// console.log('this is room rate', roomRate)
let twoB = document.getElementById('2b')
price = twoB.innerHTML = roomRate

twoB.addEventListener('click', ()=>{
  var newTrPrice = document.createElement("tr");
  newTrPrice.innerHTML = roomRate[0].innerHTML
  let id = twoB.id
  // let priceOutput = price[0].innerHTML
  // console.log(priceOutput)
  let price = roomRate[0].innerHTML
  console.log('price,.,.,.->',price)
  currentDiv.append(id);
  currentPriceDiv.append(price);
  // console.log('the subtotal--->>..>', subtotal)
  console.log('pricecheck', price)
  let val = subtotal.innerHTML = (Number(price) * 3)
  console.log('the val',val)
})
let twoA = document.getElementById('2a')
twoA.addEventListener('click', ()=>{
  let id = twoA.id
  var newTrPrice = document.createElement("tr");
  let price = roomRate[1].innerHTML
  console.log('this worked!!', twoA.id)
  console.log('price,.,.,.->',price)
  currentDiv.append(id);
  currentPriceDiv.append(price);
})
let daysValue = daysStayedDropdown.value
console.log('da Days Value --->:', daysValue)
let threeA = document.getElementById('3a')
threeA.addEventListener('click', ()=>{
  let id = threeA.id
  var newTrPrice = document.createElement("tr");
  let price = roomRate[2].innerHTML
  console.log('this worked!!', threeA.id)
  console.log('price,.,.,.->',price)
  console.log('days val', daysValue)
  currentDiv.append(id);
  currentPriceDiv.append(price);
})
let threeB = document.getElementById('3b')
threeB.addEventListener('click', ()=>{
  let id = threeB.id
  var newTrPrice = document.createElement("tr");
  let price = roomRate[3].innerHTML
  console.log('this worked!!', threeB.id)
  console.log('price,.,.,.->',price)
  currentDiv.append(id);
  currentPriceDiv.append(price);
})
let threeC = document.getElementById('3c')
threeC.addEventListener('click', ()=>{
  let id = threeC.id
  var newTrPrice = document.createElement("tr");
  let price = roomRate[4].innerHTML
  console.log('this worked!!', threeC.id)
  console.log('price,.,.,.->',price)
  currentDiv.append(id);
  currentPriceDiv.append(price);
})
let fourA = document.getElementById('4a')
fourA.addEventListener('click', ()=>{
  let id = fourA.id
  var newTrPrice = document.createElement("tr");
  let price = roomRate[5].innerHTML
  console.log('this worked!!', fourA.id)
  console.log('price,.,.,.->',price)
  currentDiv.append(id);
  currentPriceDiv.append(price);
})
let fourB = document.getElementById('4b')
fourB.addEventListener('click', ()=>{
  let id = fourB.id
  var newTrPrice = document.createElement("tr");
  let price = roomRate[6].innerHTML 
  const regie = /\$/g
  console.log("da price", price)
  let priceReg = price.replace(regie, ' ').split(',').map((price)=>{
                let number = parseFloat(price, 10)
                // console.log('this is number', typeof number )
                return number 
              })
  let totalCost = priceReg[0]
  console.log(totalCost)
  totalCostArr.push(totalCost) 
  // console.log('this worked!!', fourB.id)

  console.log('checking totalCostArr --->',totalCostArr[1])
  let cost = totalCostArr.reduce((a,b)=>{
    return a+b
  })

  console.log('checking cost---->-->', Array.isArray(finalCost))
  currentDiv.append(id);
  currentPriceDiv.append(priceReg);
  console.log('lastcheck---->>>>>>',sum)
  console.log(sum)
  subtotal.append(finalCost[0])
})



// 
/*
buttons
2B 
2A  
3A  
3B 
3C  
4A  
4B


Room #  Capacity  Rate / Night  
2B  4 $59.99  this info.
2A  4 $59.99  this info.
3A  2 $45.00  this info.
3B  2 $45.00  this info.
3C  3 $52.64  this info.
4A  4 $59.99  this info.
4B
*/

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

// function updateCount(){
//   count.innerHTML = shopCart.length;
//   console.log(shopCart.length, 'item(s) here') 
// }
// function updateTotal(){
//   let newTotal = total.innerHTML = subtotal
//   console.log('this is working, dawg!!')
// }


