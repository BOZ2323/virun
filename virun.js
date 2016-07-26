function fly(
    verticalCrashAcceleration,
    delayAfterCrash, 
    vx, 
    altitude,
    millisecondsBetweenFrames
) {
    var virus = document.querySelector("div");
    
    var x;
    var y;

    var vy = 0;
    var ay = 0;

    var startTime = Date.now();
    var clickTime;
    var restartTimer = null;

    function animate() {
        var t = Date.now() - startTime;
        x = vx * t;
        y = vy * t + altitude;

        virus.style.left = x + "px";
        virus.style.top = y + "px";

        if ( x > document.body.clientWidth) {
            // if our timer will trigger the restart in the future,
            // we do nothing here and just wait for the timer to fire.
            console.log("end of screen");
            if (!restartTimer) {
                startTime = Date.now();
            }
        }
        if (ay >= verticalCrashAcceleration) {
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
            restartTimer = setTimeout(function() {
                startTime = Date.now();
                restartTimer = null;
                vy = 0;
                ay = 0;
            }, delayAfterCrash);
        }
    }

    function crash(event) {
        ay = verticalCrashAcceleration;
        clickTime = Date.now();
    }
    
    var timer = setInterval(animate, millisecondsBetweenFrames); 


    virus.addEventListener("click", crash);
}

fly(
    0.001,  // vertical accelertion after crash    
    1000,   // delayAfterCrash, 
    0.1,    // horizontal velocity in pixels per milliseconds
    400,    // altitude (in px from top)
    20      // ms  | 1000/20 = 50 frames per second (frame rate = 50 fps)
);
