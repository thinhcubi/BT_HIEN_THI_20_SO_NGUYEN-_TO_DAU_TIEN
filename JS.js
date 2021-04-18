function checkPrime(number) {
    if (number < 2)
        return false;
    for (let i = 2; i < number; i++) {
        if (number % i == 0)
            return false;
    }
    return true;
}

let count = 0;
let number1 = 1;

function displayPrime(num) {
    while (count < num) {
        if (checkPrime(number1)) {
            count++;
            document.write(number1 + '<br>')
        }
        number1++;
    }
}


displayPrime(20)