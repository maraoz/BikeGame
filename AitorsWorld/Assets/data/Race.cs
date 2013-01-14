using UnityEngine;
using System.Collections; // is this included in using System; ???
using System;

public class Race : MonoBehaviour {
	
	
	// circuit	my_circuit		instance of the circuit currently loaded		
	
	// an array of the added participants. In prototype the size will be 0 or 1		
	Participant []	my_participants;
	
	Circuit		my_circuit = new Circuit();
	
	string		name;				
	float		time;		//number of seconds of active time since the start of the race.		
	DateTime	started;
	DateTime	finished;

	// instantiation event handler - find out relationship to constructor
	void Start () {
		
	}

	// Update is called once per frame
	void Update () {
	
	}

	private void	setup(){
		Debug.Log("setup");
	}
	
	void	startRace()	{
		// system time should be started.
		Debug.Log("startRace");
	}
	
	void	pause(){
		// system time should be paused. Invoking method race.pause() again will resume the game
	}
	
	void	stop(){
		// ends the race and returns the game to "over" state
	}
	
	int	add_participant(string	incoming_name){
		// the name of the participant to register (create in the array)
		// returns the id of the participant just added (for this prototype always 1 is ok)
		return 1;
	}
	
}



















