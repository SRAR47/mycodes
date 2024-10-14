let input = document.querySelector('.input');
let btns = document.querySelectorAll('.btn');
let string = '';

Array.from(btns).forEach((btns) => {
    btns.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            input.value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = ''
            input.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})