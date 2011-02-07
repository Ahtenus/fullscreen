var locations = ["svtplay.se","www.youtube.com"];
var playerElement = ["#playerSwf object","embed"];
var index;
for(var i=0;i < locations.length;i++) {
	if(window.location.host == locations[i]) {
		index = i;
		break;
	}
}

var iJs=function(U) { 
	var s=document.createElement("script"); 
	s.setAttribute("src",U); 
	document.body.appendChild(s);
};
if(index === undefined) {
	alert("Sorry no support for "+window.location.host);
} else {
	iJs("http://code.jquery.com/jquery-1.5.min.js");
	$(window).resize( function() {
		player.attr("height",$(window).height()).attr("width",$(window).width());
	});
	var player = $(playerElement[i]).clone();
	$("body *").remove();
	player.appendTo("body");
	$(window).resize();
}
