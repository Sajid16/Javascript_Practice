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
<<<<<<< HEAD
    document.getElementById("message").innerHTML = msg;
    var range_num1,range_num2, c, d = 0, prime = [];
    var msg = "The prime numbers within the given range are ";
    range_num1 = document.getElementById("range_num1").value;
    range_num2 = document.getElementById("range_num2").value;
    // console.log(range_num1, range_num2)
=======
    var range_num1, range_num2, c, d = 0, prime = [];
    var msg = "The prime numbers within the given range are ";
    range_num1 = document.getElementById("range_num1").value;
    range_num2 = document.getElementById("range_num2").value;
    document.getElementById("message").innerHTML = msg;
>>>>>>> fdc6adddbaefab241f0bae4972c218b854112d5a
    for (var j = range_num1; j <= range_num2; j++) {
        c = 0;
        for (var i = 2; i <= j / 2; i++) {
            console.log(j)
            if (j % i === 0 && j !== i) {
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
        // console.log(prime[i])
    }
    document.getElementById("prime_result_range").innerHTML = temp;
}