var participant_pk;
var participant_name;
var participant_step;

var user_gender;
var user_birthdate;
var user_weight;
var user_weight_unit;
var user_height;
var user_height_unit;
var user_heart_rate_max;
var user_heart_rate_high;
var user_heart_rate_low;

var circuit_type;
var circuit_distance;
var circuit_laps;
var circuit_lap_distance;
var circuit_name;

function participant_done(){
	document.getElementById("participant_name").style.background = "#ddd";
	document.getElementById("participant_name").disabled = true;
	document.getElementById("bike").style.display = "inherit";
	document.getElementById("participant").style.display = "none";
}

function bike_done(){
	document.getElementById("participant_name").style.background = "#ddd";
	document.getElementById("participant_name").disabled = true;
	document.getElementById("participant_step").style.background = "#ddd";
	document.getElementById("participant_step").disabled = true;
	document.getElementById("circuit").style.display = "inherit";
	document.getElementById("bike").style.display = "none";
}

function circuit_type_changed(incoming_type){
	if(incoming_type == "none"){
		document.getElementById("distance").style.display = "none";
		document.getElementById("laps").style.display = "none";
		document.getElementById("named").style.display = "none";
		document.getElementById("button_end_phase_1").style.display = "none";
	}
	else if (incoming_type == "distance"){
		document.getElementById("distance").style.display = "inherit";
		document.getElementById("laps").style.display = "none";
		document.getElementById("named").style.display = "none";
		document.getElementById("button_end_phase_1").style.display = "inherit";
	}
	else if (incoming_type == "laps"){
		document.getElementById("distance").style.display = "none";
		document.getElementById("laps").style.display = "inherit";
		document.getElementById("named").style.display = "none";
		document.getElementById("button_end_phase_1").style.display = "inherit";
	}
	else if (incoming_type == "named"){
		document.getElementById("distance").style.display = "none";
		document.getElementById("laps").style.display = "none";
		document.getElementById("named").style.display = "inherit";
		document.getElementById("button_end_phase_1").style.display = "inherit";
	}
}

function end_phase_1(){
	document.getElementById("circuit_type").style.background = "#ddd";
	document.getElementById("circuit_type").disabled = true;
	document.getElementById("circuit_distance").style.background = "#ddd";
	document.getElementById("circuit_distance").disabled = true;
	document.getElementById("circuit_laps").style.background = "#ddd";
	document.getElementById("circuit_laps").disabled = true;
	document.getElementById("circuit_lap_length").style.background = "#ddd";
	document.getElementById("circuit_lap_length").disabled = true;
	document.getElementById("circuit_name").style.background = "#ddd";
	document.getElementById("circuit_name").disabled = true;
	document.getElementById("button_end_phase_1").style.display = "none";
	document.getElementById("phase_1").style.display = "none";
	document.getElementById("phase_2").style.display = "inherit";


	circuit_type = document.getElementById("circuit_type").value;
	participant_step  = document.getElementById("participant_step").value;

	// TO_DO uncomment following line once web Unity3D file is available
	// unity.SendMessage("my_race", "setup");
	// participant_pk = unity.SendMessage("my_race", "add_participant", participant_name);
	// unity.SendMessage("my_participant", "set_type", "participant");
	// unity.SendMessage("my_participant", "set_step", participant_step);
	// unity.SendMessage("my_circuit", "set_type", circuit_type);

	if (circuit_type == "distance"){
		circuit_distance = document.getElementById("circuit_distance").value;
		GetUnity().SendMessage("my_circuit", "set_distance", Number(circuit_distance));
	}
	else if (circuit_type == "laps"){
		circuit_laps = document.getElementById("circuit_laps").value;

		GetUnity().SendMessage("my_circuit", "set_laps", Number(circuit_laps));
		// unity.SendMessage("my_circuit", "set_lap_distance", circuit_lap_length);
		// unity.SendMessage("my_circuit", "set_distance", circuit_laps * circuit_lap_length);
	}
	else if (circuit_type == "named"){
		circuit_name = document.getElementById("circuit_name").value;
		GetUnity().SendMessage("my_circuit", "set_name", circuit_name);
		// TO_DO remove next line when named circuit works properly
		// unity.SendMessage("my_circuit", "set_distance", circuit_distance);
	}
}
