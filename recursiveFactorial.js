function recurciveFact(n){
    if(n === 0){
        return 1
    }

    return n*recurciveFact(n-1)
}
console.log(recurciveFact(4));
console.log(recurciveFact(0));
console.log(recurciveFact(8));

//Big-O = O(n) -linear