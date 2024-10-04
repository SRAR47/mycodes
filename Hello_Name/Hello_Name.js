console.log('Script is initializing!');
let theme = confirm("Press OK to Switch to light theme or press cancel to continue with dark theme.")
if (theme === true) {
    document.body.style.backgroundColor = ("White");
    document.body.style.color = ("black");
}
let Name = prompt("Enter your name!")
console.log(Name);
document.querySelector('.div').innerHTML = `<h1>Hello ${Name}!</h1>`