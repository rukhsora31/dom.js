// const r1 = prompt('напишите текст')
// const r2 = prompt('напишите текст')
// const r3 = prompt('введите цену')
// const title = document.querySelector('h2')
// const text  = document.querySelector('p')
// const box = document.querySelector('.box')
// title.innerText = r1
// text.innerText = r2

// const price = document.createElement('h3')
// price.innerText = r3
// box.append(price)

// const bnt1 = document.querySelector('#btn1')
// const bnt2 = document.querySelector('#btn2')

// btn1.onclick = () => {
//     alert('товар куплен')
//     box.classList.add('none')
// }

// btn2.onclick = () => {
//     alert('товар не куплен')
//     box.classList.add('none')
// }

const list = document.querySelector('.list')
const r1 = prompt('first fruit')
const r2 = prompt('second fruit')
const r3 = prompt('third fruit')

const fruits = []

fruits.push(r1)
fruits.push(r2)
fruits.push(r3)

fruits.forEach(fruit => {
    const p = document.createElement('p')
    p.innerText = fruit
    list.append(p)

    p.onclick = () =>{
        p.remove()
    }
})