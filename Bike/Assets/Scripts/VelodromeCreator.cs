using UnityEngine;

[ExecuteInEditMode()]
public class VelodromeCreator : MonoBehaviour {

    public GameObject waypoint;
    public float fullDistance = 250f;
    public float straightDistance = 150f;
    public int curveResolution = 30;
    public int straightResolution = 5;

    public GameObject[] created;
    private int current = 0;


    internal GameObject[] GetWaypoints() {
        return created;
    }

    public void DoCreate() {

        created = new GameObject[curveResolution * 2 + straightResolution * 2];
        current = 0;

        float curveDistance = fullDistance - straightDistance;
        float radius = curveDistance / (2 * Mathf.PI);

        // first straight
        for (int i = 0; i < straightResolution; i++) {
            float d = (i + 1) * (straightDistance / 2) / (straightResolution + 1);
            CreateWaypoint(transform.position + transform.forward * d);
        }

        // first curve
        for (int i = 0; i < curveResolution; i++) {
            float angle = i * Mathf.PI / (curveResolution - 1);
            float x = Mathf.Cos(angle) * radius;
            float z = Mathf.Sin(angle) * radius;
            float y = 0;
            CreateWaypoint(transform.position + transform.forward * (straightDistance / 2) + -transform.right * radius + new Vector3(x, y, z));
        }
        // seconds straight
        for (int i = straightResolution; i > 0; i--) {
            float d = (i + 1) * (straightDistance / 2) / (straightResolution + 1);
            CreateWaypoint(transform.position + transform.forward * d - transform.right * 2 * radius);
        }
        // seconds curve
        for (int i = 0; i < curveResolution; i++) {
            float angle = Mathf.PI + i * Mathf.PI / (curveResolution - 1);
            float x = Mathf.Cos(angle) * radius;
            float z = Mathf.Sin(angle) * radius;
            float y = 0;
            CreateWaypoint(transform.position - transform.right * radius + new Vector3(x, y, z));
        }

    }

    void CreateWaypoint(Vector3 position) {
        created[current] = Instantiate(waypoint, position, Quaternion.identity) as GameObject;
        current += 1;
    }

}