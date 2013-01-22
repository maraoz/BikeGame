using UnityEngine;
using System.Collections;

public class WaypointSource : MonoBehaviour {

    public Transform[] waypoints;

    internal Transform[] GetWaypoints() {
        return waypoints;
    }
}
