// 1.ARROW FUNCTION
// function plusTwo(s) {
// 	return s+2
// }

plusTwo = (s) => s+2
console.log(plusTwo(10))

// 2. ARROW FUNCTION FOR MAP
arr = [1,2,3,4,5,6,7,8,9,10]

// arr_map = arr.map( function(v) {return v*2})

arr_map = arr.map(v => v*4)
console.log(arr_map)

// 3. ARROW FUNCTION FOR FILTER
arr_filter = arr.filter(v => v>5)
console.log(arr_filter)