using UnityEngine;
using System.Collections;

public class Path : MonoBehaviour {
	
	public Transform[] wayPoints;
	
	float pathDistance;
	
	void Awake(){
		pathDistance = Vector3.Distance( wayPoints[0].position, wayPoints[1].position );
	}
	
	public Vector3 GetPositionOnPath( float distance ){
		return Vector3.Lerp( wayPoints[0].position, wayPoints[1].position, distance/pathDistance );
	}
	
	void OnDrawGizmos(){
		Gizmos.color = Color.magenta;
		for( int i = 0; i < wayPoints.Length-1; i++ )
			if( wayPoints[i] != null && wayPoints[i+1] != null )
	            Gizmos.DrawLine(wayPoints[i].position, wayPoints[i+1].position);
	}
}
