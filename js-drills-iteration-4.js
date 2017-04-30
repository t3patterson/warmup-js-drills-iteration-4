//-----------------------------------------
// findUnique()
// Write a function called `findUnique` that takes two arrays of integers and
// returns an array that includes only the elements that don't appear in both.
// A value should not appear more than once in the returned array.
//
// array1 = [1,2,3,4,6]
// array2 = [0,2,3,4,5]
//
// findUnique(array1, array2)
//  => [0,1,6,5]
//
//------------------------------------------

function findUnique () {

}

let array1 = [1, 2, 3, 4, 8]
let array2 = [2, 3, 7, 8, 10]
let outputArray = findUnique(array1, array2)

console.assert( outputArray.length === 4 )
console.assert( outputArray.indexOf(2) === 0 )
console.assert( outputArray.indexOf(7) >= 0 )
console.assert( outputArray.indexOf(10) >= 0 )

let array1 = [33, 13, 12, 12, 80, 44, 43]
let array2 = [11, 43, 33, 80, 10]
let outputArray = findUnique(array1, array2)

console.assert( outputArray.length === 5 )
console.assert( outputArray.indexOf(43) === -1 )
console.assert( outputArray.indexOf(80) === -1 )
console.assert( outputArray.indexOf(10) >= 0 )
console.assert( outputArray.indexOf(12) >= 0 )
console.assert( outputArray.indexOf(11) >= 0 )
console.assert( outputArray.indexOf(44) >= 0 )


