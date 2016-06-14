console.log("Helllo world");
	var virus = document.querySelector("div");
virus.style.top = "400px";
	var x = 1;
	var v = .1; // px per millisecond
var startTime = Date.now();
timer = setInterval(function(){
	var t = Date.now() - startTime;    
	x = v * t;
    virus.style.left = x + "px";
 if ( left > 400 ) {
    clearInterval( timer );
  }
},20); // ms  | 1000/20 = 50 frames per second (50 fps)


//if (x &gt;= 500 )
//{
//    clearTimeout();
//}


//function frame() {
//   if (pos === 600) {
//      clearInterval(id);

//var frames = 0;
//var foo = document.getElementById( 'foo' );
//foo.style.left = '0px';
