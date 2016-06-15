console.log("Helllo world");
var virus = document.querySelector("div");
virus.style.top = "400px";
var x = 1;
var velocity = .1; // px per millisecond
var startTime = Date.now();

timer = setInterval(function() {
	var t = Date.now() - startTime;    
	x = velocity * t;
	virus.style.left = x + "px";
	if ( x > screen.width) {
	startTime = Date.now();
	}
},20); // ms  | 1000/20 = 50 frames per second (50 fps)
