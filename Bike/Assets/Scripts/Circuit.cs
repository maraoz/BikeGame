using UnityEngine;
using System.Collections;

public class Circuit : MonoBehaviour {

    public GameObject finishLine;

    //public float midTerrainSideLength;
    public GameObject midTerrain;


    private int length;

    public void set_distance(int meters) {
        length = meters;
        Vector3 finishPosition = transform.position + transform.forward * meters + Vector3.up * 1.5f;
        GameObject.Instantiate(finishLine, finishPosition, Quaternion.identity);

        int size = (int) midTerrain.GetComponent<Terrain>().terrainData.size.z;
        int n = (meters / size) + 2;
        for (int i = 1; i < n; i++) {
            Vector3 pos = transform.position + transform.right * (-size/2) + i * (transform.forward * size);
            pos.y = -8;
            GameObject.Instantiate(midTerrain, pos, Quaternion.identity);
        }
    }

    internal float GetLength() {
        return length;
    }
}
