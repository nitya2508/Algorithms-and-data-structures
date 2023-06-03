

let numbers = [1,3,5,7,9,11]

function linearSearch(arr,num) {
    for(let i=0; i<arr.length;i++){
        if(arr[i]===num){
            return i
        }
    }
    return -1
}

console.log(linearSearch(numbers,10))
console.log(linearSearch(numbers,7))
console.log(linearSearch(numbers,9))

//Big-O = O(n)