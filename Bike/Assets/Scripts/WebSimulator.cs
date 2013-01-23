using UnityEngine;
using System.Collections;

public class WebSimulator : PersistentSingleton {


    internal override void Awake() {
        base.Awake();
        if (!IsSimulated()) {
            enabled = false;
            return;
        }
    }

    void Start() {
        //FakeExternal.Call("my_circuit", "set_distance", 250);
        //FakeExternal.Call("my_circuit", "set_laps", 2);
        FakeExternal.Call("my_circuit", "set_name", "Test");
    }

    public static bool IsSimulated() {
        return (Application.platform == RuntimePlatform.OSXEditor ||
            Application.platform == RuntimePlatform.WindowsEditor);
    }

    void OnGUI() {
        if (GUILayout.Button("step")) {
            FakeExternal.Call("my_participant", "take_step", 2);
        }
    }

}
