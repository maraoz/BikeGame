using UnityEngine;
using System.Collections;

public class WaypointProvider : MonoBehaviour {
    public Transform[] waypoints;
    public WaypointSource source;

    internal void CollectWaypoints() {
        waypoints = source.GetWaypoints();

    }

    internal float GetLength() {
        float ret = 0;
        for (int i = 0; i < waypoints.Length - 1; i++) {
            ret += Vector3.Distance(waypoints[i].position, waypoints[i + 1].position);
        }
        return ret;
    }
}
