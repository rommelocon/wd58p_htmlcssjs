function findNextDivisibleBySeven(number) {
    let remainder = number % 7;
    if (remainder === 0) {
        return number;
    } else {
        return number + (7 - remainder);
    }
}

const inputNumber = document.getElementById('input-number');
const calculateBtn = document.getElementById('calculate-btn');
const output = document.getElementById('output');

calculateBtn.addEventListener('click', () => {
    const input = Number(inputNumber.value);
    const result = findNextDivisibleBySeven(input);
    document.getElementById('output').innerHTML = 'The next number in sequence that is divisible by 7 is: ${result}';
});

