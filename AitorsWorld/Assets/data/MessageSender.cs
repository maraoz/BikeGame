using UnityEngine;
using System.Collections;

public class MessageSender : MonoBehaviour {
	
	public GameObject raceObject;
	
	// Use this for initialization
	void Start () {
		raceObject.SendMessage("setup");
		raceObject.SendMessage("startRace");
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
