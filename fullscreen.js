var matchString;
var locations = ["svtplay.se","www.youtube.com"];
var playerElement = ["#playerSwf object","embed"];
var i;
for (i = 0; i < locations.length; i++) {
	if(window.location.host === locations[i]) {
		matchString = playerElement[i];
		break;
	}
}
function afterLoad() {
	console.log(matchString);
	var player = jQuery(matchString).clone();
	jQuery("head").html("");
	jQuery("body").html(player).css("padding","0").css("margin","0");
	jQuery(window).resize( function() {
		player.attr("height",jQuery(window).height()).attr("width",jQuery(window).width());
	});
	jQuery(window).resize();
}
if (matchString === undefined) {
	alert("Sorry no support for "+window.location.host);
} else {
	if(typeof jQuery === 'undefined') { // Load jQuery unless it's allready present 
		var s=document.createElement("script"); 
		s.setAttribute("src","http://code.jquery.com/jquery-1.5.min.js"); 
		document.body.appendChild(s);
		s.onload = afterLoad();
	}
	else {
		afterLoad();
	}
}
