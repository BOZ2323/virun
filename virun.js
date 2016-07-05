var virus = document.querySelector("div");
var x = 1;
var y = 0;
var vy = 0;
var ay = 0;
var vx = .1; // px per millisecond
var startTime = Date.now();
var clickTime;
timer = setInterval(function animate() {
	var t = Date.now() - startTime;    
	x = vx * t;
	y = vy * t + 400;
	
	virus.style.left = x + "px";
	virus.style.top = y + "px";

	if ( x > document.body.clientWidth) {
		startTime = Date.now();
	}
	if (ay >= .001) {
		var t = Date.now() - clickTime;		
		vy = ay * t;
	}
	//if ( y > document.body.clientHeight && x > document.body.clientWidth) {
	//	console.log("hello");
	//	startTime = Date.now();
	//}
	if (y > screen.height){
		console.log("hello");
		startTime = Date.now();
		vy = 0;
		ay = 0;
	}
	//if ( y > document.body.clientHeight && x > document.body.clientWidth) {
	//	console.log("second if");
	//	vy = 0;
	//	ay = 0;
//}
},20); // ms  | 1000/20 = 50 frames per second (50 fps)

virus.addEventListener("click", function onclick(event) {
	ay = .001;
	clickTime = Date.now();

});


