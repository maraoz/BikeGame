using UnityEngine;
using System.Collections;

public class FakeExternal {

    public static void Call(string name, string method, object arg) {
        GameObject obj = GameObject.Find(name);
        obj.SendMessage(method, arg);
    }

}
