let main = document.querySelector('main')
for (let i = 0; i <= 5; i++) {
//create div
let products = document.createElement('div')
let product = document.createElement('div')
let bag = document.createElement('div')
let down = document.createElement('div')

//create p and span 
let txt1 = document.createElement('p')
let txt2 = document.createElement('span')
let price = document.createElement('span')
let star = document.createElement('span')
let box = document.createElement('span')

//create img
let imgBag = document.createElement('img')
let imgDollar = document.createElement('img')
let imgStar = document.createElement('img')
let imgBox = document.createElement('img')


//create btn
let btn3 = document.createElement('button')

//styling div
products.classList.add('products')
product.classList.add('product')
bag.classList.add('bag')
down.classList.add('down')

//styling p and span 
txt1.classList.add('txt1')
txt2.classList.add('txt2')
price.classList.add('price')
star.classList.add('star')
box.classList.add('box')

//styling btn 
btn3.classList.add('btn3')

//text
txt1.innerHTML = "MEN'S CLOTHING (120)"
txt2.innerHTML = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
price.innerHTML = "109"
star.innerHTML = "3,9"
box.innerHTML = "120"
btn3.innerHTML = "В ИЗБРАННОЕ"

//attributes

imgBag.setAttribute('src', './img/81fPKd-2AYL 1.png')
imgDollar.setAttribute('src', './img/Group 7.png')
imgStar.setAttribute('src', './img/Vector.png')
imgBox.setAttribute('src', './img/Group 9.png')

//append 
price.append(imgDollar)
star.append(imgStar)
box.append(imgBox)
down.append(txt1, txt2, price, star, box, btn3)
bag.append(imgBag)
product.append(bag, down)
products.append(product)
main.append(products)
}





                                    
