$(document).ready(function(){
	$("#playerWrapper").hide();
	$("#arenaWrapper").data("arenas",
		{"Japanese":"url('japaneseArena.jpg')",
		 "Rome":"url('romeArena.jpg')",
		 "Matrix":"url('matrixArena.jpg')",
		 "Forest":"url('forestArena.jpg')",
		 "Snow":"url('snowArena.jpg')",
		 "Outerspace":"url('outerspaceArena.jpg')"});
	$("#slArena").change(function(evt){
		var selectedArena = $(evt.target).val();
		var arenaName = $("#arenaWrapper").data("arenas").selectedArena;
		console.log(selectedArena, arenaName);
		// $("div#container").css("background-image",$("#arenaWrapper."))
	});
});
