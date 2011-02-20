function Resize() {
	player.setAttribute("width",window.innerWidth);
	player.setAttribute("height",window.innerHeight);
}
if(window.location.host === "svtplay.se") {
	var elem = document.getElementsByTagName("object");
	var player = elem[1].cloneNode(true);
}
else {
	var elem = document.getElementsByTagName("embed");
	var player = elem[0].cloneNode(true);
}
document.head.innerHTML = "<style> * { margin: 0 !important; padding: 0 !important; border:0 !important; overflow:hidden;}</style>";
document.body.innerHTML = "";
document.body.appendChild(player);
window.onresize = Resize;
Resize();
