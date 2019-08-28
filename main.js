function check_prime() {
    var num1, c = 0;
    num1 = document.getElementById("num1").value;
    // console.log(num1)
    for (var i = 2; i <= num1 / 2; i++) {
        if (num1 % i == 0) {
            c++;
            break;
        }
    }
    if (c == 0 && num1 != 1) {
        var msg = "The given number is a prime number";
        document.getElementById("prime_result").innerHTML = msg;
    }
    else {
        var msg = "The given number is not a prime number";
        document.getElementById("prime_result").innerHTML = msg;
    }
}

function find_prime_in_range() {
    var num1, c, d = 0, prime = [];
    var msg = "The prime numbers within the given range are ";
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    // console.log(num1)
    document.getElementById("message").innerHTML = msg;
    for (var j = num1; j <= num2; j++) {
        c = 0;
        for (var i = 2; i <= j / 2; i++) {
            if (j % i == 0) {
                c++;
                break;
            }
        }
        if (c == 0 && j != 1) {
            prime[d] = j;
            d++;
        }
    }

    var temp = "";
    for (var i = 0; i < prime.length; i++) {
        temp += prime[i] + ' ';
        console.log(prime[i])
    }
    document.getElementById("prime_result_range").innerHTML = temp;
}