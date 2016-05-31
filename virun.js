console.log("Helllo world");
var virus = document.querySelector("div");
virus.style.top = "400px";
var x = 1;
var v = .1; // px per millisecond
var startTime = Date.now();
setInterval(function(){
    var t = Date.now() - startTime;    
    x = v * t;
    virus.style.left = x + "px";
},20); // ms  | 1000/20 = 50 frames per second (50 fps)
setTimeout(x,200);
