function prime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

// console.log(prime(1));
// console.log(prime(5));
// console.log(prime(8));


//Array of prime numbers between the given range
function primeNumList(n) {
    let count=0
    const prime = [];
    for (j = 2; j <= n; j++) {
        for (i = 1; i <= j; i++) {
          
            if (j % i == 0)
                count++
               

        }

        if (count == 2)
        prime.push(j)
        count = 0



    }
    return prime
   
}

// console.log(primeNumList(1));
// console.log(primeNumList(5));
console.log(primeNumList(100));