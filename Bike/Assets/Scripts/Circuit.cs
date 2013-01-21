using UnityEngine;
using System.Collections;

public class Circuit : PersistentSingleton {

    public GameObject finishLine;
    public GameObject midTerrain;

    private float length;
    private Participant participant;


    internal override void Awake() {
        base.Awake();
        participant = FindObjectOfType(typeof(Participant)) as Participant;
    }

    internal float GetLength() {
        return length;
    }

    // distance
    public void set_distance(int meters) {
        length = meters;
        Vector3 finishPosition = transform.position + transform.forward * meters + Vector3.up * 1.5f;
        GameObject.Instantiate(finishLine, finishPosition, Quaternion.identity);

        int size = (int) midTerrain.GetComponent<Terrain>().terrainData.size.z;
        int n = (meters / size) + 2;
        for (int i = 1; i < n; i++) {
            Vector3 pos = transform.position + transform.right * (-size / 2) + i * (transform.forward * size);
            pos.y = -8;
            GameObject.Instantiate(midTerrain, pos, Quaternion.identity);
        }
        participant.StartWaypoints(2);
        participant.AddWaypoint(participant.transform.position, 0);
        participant.AddWaypoint(transform.position + transform.forward * meters * 10, 1);
        participant.EndWaypoints();

    }

    // laps
    public void set_laps(int n) {
        Application.LoadLevel("Velodrome");
    }

    void OnLevelWasLoaded(int level) {
        if (Application.loadedLevelName == "Velodrome") {

            VelodromeCreator vc = GameObject.FindObjectOfType(typeof(VelodromeCreator)) as VelodromeCreator;

            participant.transform.position = vc.transform.position;
            length = vc.fullDistance;

            GameObject[] waypoints = vc.GetWaypoints();
            participant.StartWaypoints(waypoints.Length);
            for (int i = 0; i < waypoints.Length; i++) {
                participant.AddWaypoint(waypoints[i].transform.position, i);
            }
            participant.EndWaypoints();
        }

    }

}
