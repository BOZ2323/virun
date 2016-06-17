console.log("Helllo world");
var virus = document.querySelector("div");
virus.style.top = "400px";
var x = 1;
var y = 0;
var vy = 0;
var velocity = .1; // px per millisecond
var startTime = Date.now();
var clickTime;
timer = setInterval(function animate() {
	var t = Date.now() - startTime;    
	x = velocity * t;
	virus.style.left = x + "px";
	if ( x > document.body.clientWidth) {
		startTime = Date.now();
	}
	if (vy >= .1) {
		var t = Date.now() - clickTime;		
		y = vy * t + 400;
		virus.style.top = y + "px";
	}
},20); // ms  | 1000/20 = 50 frames per second (50 fps)

virus.addEventListener("click", function onclick(event) {
	vy = .1;
	clickTime = Date.now();
});
