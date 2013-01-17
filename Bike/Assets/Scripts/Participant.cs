using UnityEngine;
using System.Collections;

public class Participant : MonoBehaviour {

    public Circuit circuit;

    private CharacterController controller;
    private float totalMeters;

    void Awake() {
        controller = GetComponent<CharacterController>();
        totalMeters = 0f;
    }

    public void take_step(float distance) {
        totalMeters += distance;
        controller.Move(transform.forward * distance);

        if (totalMeters >= circuit.GetLength()) {
            Application.ExternalCall("receive_finish_from_unity");
        }

    }

}
