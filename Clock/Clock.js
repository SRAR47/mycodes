function updateClock() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    
    
    

    // Calculate the degrees for each hand
    const secondDegrees = ((seconds / 60) * 360); // adding 90 to offset CSS rotation
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    const hourDegrees = ((hours % 12 / 12) * 360) + ((minutes / 60) * 30);

    // Apply the rotation using the calculated degrees
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

// Call the function once initially to set the clock to the current time
updateClock();

// Update the clock hands every second
setInterval(updateClock, 1000);
