using UnityEngine;
using System.Collections;


public class ExternalListener : MonoBehaviour {

	public ExternalThirdPersonController characterController;
	
	public void ToggleWalk(){
		characterController.doMoveForward = !characterController.doMoveForward;
	}
}
