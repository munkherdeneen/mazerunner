$(document).ready(function() {
	var isStarted = false;
	
	$(".boundary").on('mouseover', loosethegame);
	$("#end").on('mouseover', winthegame);
	$("#start").on('click', startthegame);
	$("#maze").on('mouseleave', leavethegame);
	
	
	function loosethegame(evt) {
		if(isStarted) {
			$(".boundary").addClass("youlose");
			$("#status").text("Sorry, you lost. (◕╭╮◕✿)");
			//alert("Sorry, you lost. :(");
		}
		theend();
	}
	
	function winthegame(evt) {
		if(isStarted) {
			$("#status").text("You win! 🙂 ⠒̫⃝*｡೨⋆*✩");
			$(".boundary").addClass("youwin");
			//alert("You win! :)");
		}
		theend();
	}
	
	function startthegame(evt) {		
		isStarted = true;
		$("#status").text("Game has been started.");
		$("div.boundary").removeClass("youlose");
		$("div.boundary").removeClass("youwin");
	}
	
	function leavethegame(evt) {
		if(isStarted) {
			$(".boundary").addClass("youlose");
			$("#status").text("Sorry, you lost. (◕╭╮◕✿)");
		}
		theend();
	}
	
	function theend() {
		isStarted = false;
	}
});