

let add = (a, b) => {
	return a+b;
};

console.log(add(10, 20))


let print = v => console.log(v)
print("lamda 식")

let add2 = (a, b) => a+b;
console.log(add2(10, 20))

let hello = () => console.log("Hello World")
hello();


function pow(a, b) {					// default 파라메터
	return a**b
}

console.log(pow(10, 3))
console.log(pow())
console.log(pow(10))


function sum() {
	console.log(arguments)
}

function sum2(...args) {
	console.log(args)
}

sum(1)
sum(1, 2, 3)
sum2(1)
sum2(1, 2, 3)