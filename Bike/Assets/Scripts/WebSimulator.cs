using UnityEngine;
using System.Collections;

public class WebSimulator : MonoBehaviour {

    void Start() {
        if (Application.platform == RuntimePlatform.WindowsWebPlayer ||
            Application.platform == RuntimePlatform.OSXWebPlayer) {

            enabled = false;
            return;
        }

        FakeExternal.Call("my_circuit", "set_distance", 500);
    }

    void OnGUI() {
        if (GUILayout.Button("step")) {
            FakeExternal.Call("my_participant", "take_step", 5);
        }
    }

}
