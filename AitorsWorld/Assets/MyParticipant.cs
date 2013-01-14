using UnityEngine;
using System.Collections;

public class MyParticipant : MonoBehaviour {

	public Path pathToFollow;
	float distanceCovered = 0f;
	
	void Start () {
		transform.position = pathToFollow.GetPositionOnPath( 0f );
	}
	
	private void Step( float distance ){
		distanceCovered += distance;
		transform.position = pathToFollow.GetPositionOnPath( distanceCovered );
	}
}
