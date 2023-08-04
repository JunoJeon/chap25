


var add = function (x, y, z) {
	console.log("add(x, y, z)")
}

function add(x, y) {			//선언적 함수는 일반함수보다 먼저만들어져서 밑에있어도 결과값이 덮어지지않음
	console.log("add(x, y)...")
}

add();