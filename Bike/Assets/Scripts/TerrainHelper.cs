using UnityEngine;
using System.Collections;

public class TerrainHelper {


    private static Vector2 GetTerrainPosition(Vector3 worldPos) {
        Terrain terrain = Terrain.activeTerrain;
        TerrainData terrainData = terrain.terrainData;
        Vector3 terrainPos = terrain.transform.position;
        int mapX = (int) (((worldPos.x - terrainPos.x) / terrainData.size.x) * terrainData.alphamapWidth);
        int mapZ = (int) (((worldPos.z - terrainPos.z) / terrainData.size.z) * terrainData.alphamapHeight);
        return new Vector2(mapX, mapZ);
    }

    private static float[, ,] GetAlphaMapsForPosition(Vector3 worldPos, int size) {
        // get the splat data for this cell as a 1x1xN 3d array (where N = number of textures)
        TerrainData terrainData = Terrain.activeTerrain.terrainData;
        Vector2 converted = GetTerrainPosition(worldPos);
        return terrainData.GetAlphamaps((int) converted.x - size / 2, (int) converted.y - size / 2, size, size);
    }

    private static void SetAlphaMapsForPosition(Vector3 worldPos, float[, ,] splatmapData, int size) {
        TerrainData terrainData = Terrain.activeTerrain.terrainData;
        Vector2 converted = GetTerrainPosition(worldPos);
        terrainData.SetAlphamaps((int) converted.x - size / 2, (int) converted.y - size / 2, splatmapData);
    }

    public static float[] GetTextureMix(Vector3 worldPos) {

        // returns an array containing the relative mix of textures
        // on the main terrain at this world position.

        // The number of values in the array will equal the number
        // of textures added to the terrain.

        float[, ,] splatmapData = GetAlphaMapsForPosition(worldPos, 1);

        // extract the 3D array data to a 1D array:
        float[] cellMix = new float[splatmapData.GetUpperBound(2) + 1];
        for (int n = 0; n < cellMix.Length; ++n) {
            cellMix[n] = splatmapData[0, 0, n];
        }

        return cellMix;
    }

    public static void SetTexture(Vector3 worldPos, int textureIndex, int size) {
        float[, ,] splatmapData = GetAlphaMapsForPosition(worldPos, size);
        for (int i = 0; i < splatmapData.GetUpperBound(0) + 1; i++)
            for (int j = 0; j < splatmapData.GetUpperBound(0) + 1; j++)
                for (int n = 0; n < splatmapData.GetUpperBound(2) + 1; ++n) {
                    splatmapData[i, j, n] = n == textureIndex ? 1.0f : 0;
                }
        SetAlphaMapsForPosition(worldPos, splatmapData, size);
    }

    public static int GetMainTexture(Vector3 worldPos) {

        // returns the zero-based index of the most dominant texture
        // on the main terrain at this world position.

        float[] mix = GetTextureMix(worldPos);


        float maxMix = 0;
        int maxIndex = 0;

        // loop through each mix value and find the maximum
        for (int n = 0; n < mix.Length; ++n) {
            if (mix[n] > maxMix) {
                maxIndex = n;
                maxMix = mix[n];
            }
        }

        return maxIndex;

    }

}