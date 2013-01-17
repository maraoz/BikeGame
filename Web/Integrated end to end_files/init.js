
if (typeof unityObject != "undefined") {
	// here is where we say name of unity file: second parameter
	unityObject.embedUnity("unityPlayer", "WebPlayer/WebPlayer.unity3d", 600, 450, null, null, unityLoaded);
}

var unity = GetUnity();

// This function returns a reference to the Unity object
function GetUnity() {
	if (typeof unityObject != "undefined") {
		return unityObject.getObjectById("unityPlayer");
	}
	return null;
}


function unityLoaded(result) {
	if (result.success) {
		var unity = result.ref;
		var version = unity.GetUnityVersion("3.x.x");
		//alert("Unity Web Player loaded!\nId: " + result.id + "\nVersion: " + version);
	}
	else {
		alert("Please install Unity Web Player!");
	}
}

// actual remote location of unity JS is: 
// http://webplayer.unity3d.com/download_webplayer-3.x/3.0/uo/UnityObject.js