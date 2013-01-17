using UnityEngine;
using System.Collections;

public class Participant : MonoBehaviour {

    public Circuit circuit;

    private float totalMeters;

    void Awake() {
        totalMeters = 0f;
    }

    public void take_step(float distance) {
        totalMeters += distance;
        this.Move(transform.forward * distance);

        if (totalMeters >= circuit.GetLength()) {
            Application.ExternalCall("receive_finish_from_unity");
        }

    }

    private void Move(Vector3 motion) {
        transform.position += motion;
    }

}
