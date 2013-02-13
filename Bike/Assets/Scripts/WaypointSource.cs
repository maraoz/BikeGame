using UnityEngine;
using System.Collections;

public abstract class WaypointSource : MonoBehaviour {
    public abstract Transform[] GetWaypoints();
}
