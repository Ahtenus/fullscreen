(function(window,undefined) {
var elem, player,numel = 0;
function Resize() {
	player.setAttribute("width",window.innerWidth);
	player.setAttribute("height",window.innerHeight);
}
if(window.location.host === "svtplay.se") {
	elem = document.getElementsByTagName("object");
	numel = 1;
}
else{
	elem = document.getElementsByTagName("embed");
	if(elem.length < 1) {
		elem = document.getElementsByTagName("object");
	}
}
if(elem.length > 0) {
	player = elem[numel].cloneNode(true);
	document.head.innerHTML = "<style> * { margin: 0; padding: 0; border:0; overflow:hidden;}</style>";
	document.body.innerHTML = "";
	document.body.appendChild(player);
	window.onresize = Resize;
	Resize();
} else {
	alert("No video element found");
}
})(window);
