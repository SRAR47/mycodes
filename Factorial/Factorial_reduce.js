function factorial(num) {
    if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
        console.log("This input is not valid!");
    } else if (num == 1 || num == 0) {
        console.log(1);
    } else if (num > 1) {
        let factnum = [];
        for (let newnum = num; newnum > 0; newnum--) {
            factnum.push(newnum);
        }
        let fact = factnum.reduce((v1, v2) => v1 * v2, 1);
        console.log(fact);
    } else {
        console.log("This number is not valid");
    }
}

factorial(4);
