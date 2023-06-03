function recurciveFibonacci(n){
    if(n < 2){
        return n
    }

    return recurciveFibonacci(n-1)+recurciveFibonacci(n-2)
}
console.log(recurciveFibonacci(4));
console.log(recurciveFibonacci(0));
console.log(recurciveFibonacci(6));

//Big-O = O(2^n)