let firstName;
let result;

document.getElementById('submit').onclick = function() {
    firstName = document.getElementById('firstName').value;
    result = document.getElementById('result').innerText = "Hello " + firstName;
}

let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function () {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function () {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}