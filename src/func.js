
function main() {						// 선언적 함수
	console.log("main...")
}

main()

let add = function(a, b) {			// 익명함수
	return a + b 
}


console.log(add(10, 20))				// arrow function(lamda)

let mul = (a, b) => a*b
console.log(mul(10, 20))


console.log(typeof main)
console.log(typeof add)
console.log(typeof mul)

console.log(main)
console.log(add)
console.log(mul)