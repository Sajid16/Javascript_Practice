function check_prime() {
    var num1, c = 0;
    num1 = document.getElementById("num1").value;
    // console.log(num1)
    for( var i = 2; i<= num1/2; i++){
        if(num1 % i == 0){
            c++;
            break;
        }
    }
    if(c == 0 && num1 != 1){
        var msg = "The given number is a prime number";
        document.getElementById("prime_result").innerHTML = msg;
    }
    else{
        var msg = "The given number is not a prime number";
        document.getElementById("prime_result").innerHTML = msg;
    }
}

