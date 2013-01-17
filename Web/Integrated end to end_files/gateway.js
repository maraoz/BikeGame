var paused = "false";

var steps  = 0;
var distance_covered;

function advance(){
	if (paused == "false") {
		// TO_DO uncomment following line once race management is implemented
		//if (steps == 0){
		//	unity.SendMessage("my_race", "start");
		//}

		GetUnity().SendMessage("my_participant", "take_step", Number(participant_step));

		steps = steps + 1;

		distance_covered = steps * participant_step;
		var msg = "Distance to cover is " + circuit_distance + " meters.";
		msg += "\nYou have covered " + distance_covered + " meters.";

		if (circuit_type == "distance"){
		}
		else if (circuit_type == "laps"){
		}
		else if (circuit_type == "named"){
		}
		if ( distance_covered >= circuit_distance) {
			msg += "\nYOU HAVE REACHED THE FINISH LINE !";

			// TO_DO remove next line when named circuit works properly
			//unity.SendMessage("my_race", "stop");
		}
		//alert(msg);
	}
}

function pause(){
	if (paused == "false"){
		paused = "true";
		document.getElementById("button_step").disabled = true;
		document.getElementById("button_pause").value = "unpause";
	}
	else{
		paused = "false";
		document.getElementById("button_step").disabled = false;
		document.getElementById("button_pause").value = "pause";
	}
}

function receive_finish_from_unity(){
	alert("YOU HAVE REACHED THE FINISH LINE !  =)");
}
