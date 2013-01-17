using UnityEngine;
using System.Collections;

public class Circuit : MonoBehaviour {

    public GameObject finishLine;

    private int length;

    public void set_distance(int meters) {
        length = meters;
        Vector3 finishPosition = transform.position + transform.forward * meters + Vector3.up * 3;
        GameObject.Instantiate(finishLine, finishPosition, Quaternion.identity);
    }

    internal float GetLength() {
        return length;
    }
}
