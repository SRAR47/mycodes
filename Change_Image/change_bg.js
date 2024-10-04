import { images } from './image_container.js';
let a = document.getElementsByClassName('btn')[0];
let card = document.getElementsByClassName('card')[0];
let img = document.getElementsByClassName('image')[0];
// a.addEventListener('click', () => {
//     let num = Math.floor(Math.random() * images.length)
//     card.innerHTML = `${images[num]}`

// })
a.addEventListener('click', () => {
    let num = Math.floor(Math.random() * images.length)
    img.classList.add('animate');
    setTimeout(() => {
        card.innerHTML = `${images[num]}`
    }, 2000);
    setTimeout(() => {
        img.classList.remove('animate')
    }, 4000);
})