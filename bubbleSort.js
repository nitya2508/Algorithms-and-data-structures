let numArray = [20, -5, -10, 15, 7]

function bubbleSort(arr) {

    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {

          
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}
bubbleSort(numArray)
console.log(numArray)

//Big-O = o(n^2)