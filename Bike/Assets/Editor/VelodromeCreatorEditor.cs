using UnityEngine;
using System.Collections;
using UnityEditor;

[CustomEditor(typeof(VelodromeCreator))]
class VelodromeCreatorEditor : Editor {
    public override void OnInspectorGUI() {
        DrawDefaultInspector();
        if (GUILayout.Button("Create")) {
            VelodromeCreator t = target as VelodromeCreator;
            t.DoCreate();
        }
        if (GUILayout.Button("Destroy")) {
            VelodromeCreator t = target as VelodromeCreator;
            t.DoDestroy();
        }
    }
}