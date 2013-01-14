using UnityEngine;
using System.Collections;

public class Participant : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	int	pk_participant;
	string	_type;		//	participant ¦ observer ¦ trace	type of participant		
	string type {
		get { return _type; }
		set { _type = value; }
	}
	
	string	_name;
	string name{
		get { return _name; }
		set { _name = value; }
	}
	
	float	_step;		//		the size of a step in meters
	float	step{		
		get { return _step; }
		set { _step = value; }
	}
					
	void	set_pk_participant(int incoming_pk){
	}
	
	string	get_pk_participant(){
		return "returns the type of circuit";
	}
	
	void take_step(){
	}
	
}
