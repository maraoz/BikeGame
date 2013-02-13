using UnityEngine;
using System.Collections;

public class Participant : PersistentSingleton {

    public Circuit circuit;

    public Vector3[] waypoints;
    public float waypointRadius = 1.5f;
    public float damping = 0.1f;
    public float dt = 0.1f;

    private float totalMeters;
    private float plannedDistance;
    private float speed = 2.0f;
    private Vector3 currentHeading, targetHeading;
    private int currentIndex;
    private float lastStepTime;


    internal override void Awake() {
        base.Awake();
        enabled = false;
        totalMeters = 0;
        plannedDistance = 0;
        currentHeading = transform.forward;
        currentIndex = 0;
        lastStepTime = 0;
    }

    internal Vector3[] GetWaypoints() {
        return waypoints;
    }

    internal void StartWaypoints(int size) {
        waypoints = new Vector3[size];
    }

    internal void AddWaypoint(Vector3 pos, int index) {
        waypoints[index] = pos;
    }

    internal void EndWaypoints() {
        enabled = true;
    }






    // externally called
    public void take_step(float distance) {
        if (plannedDistance == 0) {
            lastStepTime = 0;
        }
        plannedDistance += distance;

        float currentStepTime = Time.time;
        speed = (lastStepTime == 0) ? (distance * dt) : distance / (currentStepTime - lastStepTime);
        lastStepTime = currentStepTime;
    }

    protected void FixedUpdate() {
        targetHeading = waypoints[currentIndex] - transform.position;
        currentHeading = Vector3.Lerp(currentHeading, targetHeading, damping);
    }

    protected void Update() {
        if (plannedDistance < 0.1) {
            plannedDistance = 0;
            return;
        }
        Vector3 moveDelta = currentHeading.normalized * Time.deltaTime * speed;
        if (moveDelta.magnitude > plannedDistance) {
            moveDelta = moveDelta.normalized * plannedDistance;
        }
        totalMeters += moveDelta.magnitude;
        if (totalMeters >= circuit.GetLength()) {
            Application.ExternalCall("receive_finish_from_unity");
            enabled = false;
        }
        plannedDistance -= moveDelta.magnitude;

        transform.position += moveDelta;
        transform.LookAt(transform.position + currentHeading);

        if (Vector3.Distance(transform.position, waypoints[currentIndex]) <= waypointRadius) {
            currentIndex++;
            if (currentIndex >= waypoints.Length) {
                currentIndex = 0;
            }
        }
    }

    // draws red line from waypoint to waypoint
    public void OnDrawGizmos() {
        Gizmos.color = Color.red;
        if (waypoints == null)
            return;
        for (int i = 0; i < waypoints.Length; i++) {
            Vector3 pos = waypoints[i];
            if (i > 0) {
                Vector3 prev = waypoints[i - 1];
                Gizmos.DrawLine(prev, pos);
            }
        }
    }

}
