// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

function mergeSort(arr) {
     // Base case: if the array has one or zero elements, it's already sorted
     if (arr.length <= 1) {
         return arr;
     }
 
     // Divide the array into two halves
     const middle = Math.floor(arr.length / 2);
     const left = arr.slice(0, middle);
     const right = arr.slice(middle);
 
     // Recursively sort each half
     const sortedLeft = mergeSort(left);
     const sortedRight = mergeSort(right);
 
     // Merge the sorted halves
     return merge(sortedLeft, sortedRight);
 }
 
 function merge(left, right) {
     let result = [];
     let leftIndex = 0;
     let rightIndex = 0;
 
     // Merge the two arrays while maintaining order
     while (leftIndex < left.length && rightIndex < right.length) {
         if (left[leftIndex] < right[rightIndex]) {
             result.push(left[leftIndex]);
             leftIndex++;
         } else {
             result.push(right[rightIndex]);
             rightIndex++;
         }
     }
 
     // Concat remaining elements (if any)
     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
 }
 
 // Example usage
 let array = [105, 79, 100, 110];
 let sortedArray = mergeSort(array);
 
 sortedArray.forEach(element => {
     console.log(element);
 });
 