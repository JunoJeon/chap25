

setTimeout(function() {
	console.log("one shot")
},2000);

console.log("end..")

setInterval(() => {
	console.log(parseInt(Math.random()*100))	
}, 1000);

console.log("End..")