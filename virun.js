var virus = document.querySelector("div");

var x;
var y;

var vx = 0.1; // px per millisecond
var vy = 0;

var ay = 0;

var startTime = Date.now();
var clickTime;
var restartTimer = null;

function animate() {
	var t = Date.now() - startTime;
	x = vx * t;
	y = vy * t + 400;

	virus.style.left = x + "px";
	virus.style.top = y + "px";

	if ( x > document.body.clientWidth) {
        // if our timer will trigger the restart in the future,
        // we do nothing here and just wait for the timer to fire.
        if (!restartTimer) {
            startTime = Date.now();
        }
	}
	if (ay >= 0.001) {
		t = Date.now() - clickTime;
		vy = ay * t;
	}
    
    /* 
     * If the UFO has fallen off screen
     * and we did not start a timer yet,
     * start one. 
     * restartTimer gets the setTimeout ID (Number)
     * as long as the Timeout is running.
     * Then restartTimer is set to null again
     */
	if (y > screen.height && !restartTimer){
		console.log("gone");
		restartTimer = setTimeout(function(){ 
            startTime = Date.now();
            restartTimer = null;
			vy = 0;
			ay = 0;
		}, 4000);
	}
}

function crash(event) {
	ay = 0.001;
	clickTime = Date.now();
}

var timer = setInterval(animate, 20); // ms  | 1000/20 = 50 frames per second (50 fps)

virus.addEventListener("click", crash);


