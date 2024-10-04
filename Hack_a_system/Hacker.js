let lines = [
    "Initializing Hacking ",
    "Reading your files ",
    "Password files detected ",
    "Sending all your files to the server ",
    "Cleaning up "
]
function delay() {
    let duration =  Math.random()*4000+1000;
    return new Promise(resolve => setTimeout(resolve,duration));
}

let text = document.getElementsByClassName("terminal")[0];

text.innerHTML = `<p class="txt">${lines[0]}</p>`

async function Displaylines() {
    await delay();
    text.innerHTML = `<p>${lines[0]}</p><p class="txt">${lines[1]}</p>`

    await delay();
    text.innerHTML = `<p>${lines[0]}</p><p>${lines[1]}</p><p class="txt">${lines[2]}</p>`
    
    await delay();
    text.innerHTML = `<p>${lines[0]}</p><p>${lines[1]}</p><p>${lines[2]}</p><p class="txt">${lines[3]}</p>`

    await delay();
    text.innerHTML = `<p>${lines[0]}</p><p>${lines[1]}</p><p>${lines[2]}</p><p>${lines[3]}</p><p class="txt">${lines[4]}</p>`

    await delay();
    text.innerHTML = `<p>${lines[0]}</p><p>${lines[1]}</p><p>${lines[2]}</p><p>${lines[3]}</p><p>${lines[4]}</p>`

    text.innerHTML = `<h1>Your System has been Hacked</h1>`
}
Displaylines();