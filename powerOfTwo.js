function powerOfTwo(n){
    if(n<1){
        return false
    }
    while (n>1) {
        if(n%2 != 0){
            return false
        }
        n=n/2
    }
    return true
}

console.log(powerOfTwo(5));
console.log(powerOfTwo(1));
console.log(powerOfTwo(8));

//Big-O = O(logn)

//Bitwise 

function powerOfTwoBitwise(n){
    if(n<1){
        return false
    }
    return (n & (n-1))==0
}

console.log(powerOfTwoBitwise(5));
console.log(powerOfTwoBitwise(1));
console.log(powerOfTwoBitwise(2));

//Big-O = O(1)