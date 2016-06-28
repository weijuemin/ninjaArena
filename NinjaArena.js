$(document).ready(function(){
	$("#playerWrapper").hide();

	$("#arenaWrapper").data("arenas",
		{"Japanese":"url('japaneseArena.jpg')",
		 "Rome":"url('romeArena.jpg')",
		 "Matrix":"url('matrixArena.jpg')",
		 "Forest":"url('forestArena.jpg')",
		 "Snow":"url('snowArena.jpg')",
		 "Outerspace":"url('outerspaceArena.jpg')"});

	$("#playerWrapper").data("players",
		{"Yellow Ninja":"ninja_shuriken_6.png",
		 "Black Ninja":"ninja_shuriken_1.png",
		 "Blue Ninja":"ninja_shuriken_2.png",
		 "Green Ninja":"ninja_shuriken_3.png",
		 "Purple Ninja":"ninja_shuriken_4.png",
		 "Red Ninja":"ninja_shuriken_5.png"});

	$("#slArena").change(function(evt){
		var selectedArena = $(evt.target).val();
		var arenaName = $("#arenaWrapper").data("arenas")[selectedArena];
		$("div#container").css("background-image",arenaName);
		$("div#arenaWrapper, div#playerWrapper").toggle();
	});
	$("#slPlayer0").change(function(evt){
		var selectedPlayer = $(evt.target).val();
		$("#player0").attr("src",$('#playerWrapper').data("players")[selectedPlayer]);
	});
	$("#slPlayer1").change(function(evt){
		var selectedPlayer = $(evt.target).val();
		$("#player1").attr("src",$('#playerWrapper').data("players")[selectedPlayer]);
	});
});
