alert("You are going for a driving test.")
let again = true
let age
let Name = prompt("Enter your Name.")
while (again === true) {
    age = prompt("Enter your Age.")
    let agenum = Number(age)
    if (agenum >= 18) {
        alert("You can drive.");
    }
    else if (agenum > 0 && agenum < 18) {
        alert("You can't drive.")
    }
    else {
        alert("Age entered is invalid!")
        break;
    }
    again = confirm("Do you want to enter the information again?")
}
let Form = document.querySelector('.Form')
if (age >= 18) {
    Form.innerHTML = `
    <ul>
    <li>Name: ${Name}</li>
    <li>Age: ${age}</li>
    <li>Status: You can Drive</li>
    </ul>
    `;
}
else if (isNaN(age)) {
    Form.innerHTML = `<h1>Tu masti kar ryan, tu baaz aja, tu bari haram mor marna aa.</h1>`
}
else if (age > 0 && age < 18) {
    Form.innerHTML = `
    <ul>
    <li>Name: ${Name}</li>
    <li>Age: ${age}</li>
    <li>Status: You can't Drive</li>
    </ul>
    `;
}
else {
    Form.innerHTML = `<h1>Tu masti kar ryan, tu baaz aja, tu bari haram mor marna aa.</h1>`
}