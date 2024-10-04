import { jokes } from './Jokes_container.js';
console.log(jokes[0]);

let btn = document.getElementsByClassName('btn')[0];
btn.addEventListener('click', () => {
    let num = Math.floor(Math.random() * jokes.length);
    console.log(num);
    document.getElementsByClassName('joke_text')[0].classList.add('fade_out');
    setTimeout(() => {
        document.getElementsByClassName('joke_text')[0].innerHTML = `${jokes[num]}`
    }, 400);
    setTimeout(() => {
        document.getElementsByClassName('joke_text')[0].classList.remove('fade_out');
    }, 500);
})