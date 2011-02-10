var matchString = "embed";
var locations = ["svtplay.se"];
var playerElement = ["#playerSwf object"];
var i;
if(typeof jQuery === 'undefined') { // Load jQuery unless it's allready present 
	var s=document.createElement("script"); 
	s.setAttribute("src","http://code.jquery.com/jquery-1.5.min.js"); 
	document.body.appendChild(s);
}
function continueWhenjQuery() {
	if (typeof jQuery === 'undefined') {
		setTimeout(continueWhenjQuery,200);
		return;
	} else {
		for (i = 0; i < locations.length; i++) { // Replace with site specific element if exists
			if(window.location.host === locations[i]) {
				matchString = playerElement[i];
				break;
			}
		}
		if(jQuery(matchString).length >= 1) { // Continue only if there actually is a video element
			var player = jQuery(matchString).first().clone();
			jQuery("head").html("");
			jQuery("body").html(player).css("padding","0").css("margin","0");
			jQuery(window).resize( function() {
				player.attr("height",jQuery(window).height()).attr("width",jQuery(window).width());
			});
			jQuery(window).resize();
		} else {
			alert("Couldn't find any video element");
		}
	}
}
continueWhenjQuery();
