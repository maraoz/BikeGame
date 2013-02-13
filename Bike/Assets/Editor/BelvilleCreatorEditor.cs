using UnityEngine;
using System.Collections;
using UnityEditor;

[CustomEditor(typeof(BelvilleCreator))]
class BelvilleCreatorEditor : Editor {
    public override void OnInspectorGUI() {
        DrawDefaultInspector();
        if (GUILayout.Button("Recreate")) {
            BelvilleCreator t = target as BelvilleCreator;
            t.DoDestroy();
            t.DoCreate();
        }
    }
}