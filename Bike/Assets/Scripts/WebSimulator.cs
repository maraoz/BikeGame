using UnityEngine;
using System.Collections;

public class WebSimulator : MonoBehaviour {

    void Start() {
        if (IsSimulated()) {
            enabled = false;
            return;
        }
        FakeExternal.Call("my_circuit", "set_distance", 500);
    }

    public static bool IsSimulated() {
        return (Application.platform == RuntimePlatform.OSXEditor || 
            Application.platform == RuntimePlatform.WindowsEditor);
    }

    void OnGUI() {
        if (GUILayout.Button("step")) {
            FakeExternal.Call("my_participant", "take_step", 5);
        }
    }

}
