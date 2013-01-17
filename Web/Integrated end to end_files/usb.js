var button_x_last_timestamp = 0;
var button_x_counter = 0;
button_x_debouce_delay = 100; // ms

var button_y_last_timestamp = 0;
var button_y_counter = 0;
button_y_debouce_delay = 100; // ms

function read_keystroke(e){
	var myForm = document.test_form;
	var myUnicode=e.keyCode? e.keyCode : e.charCode
	incoming_keystroke = String.fromCharCode(myUnicode);
	if (incoming_keystroke == myForm.button_x.value)
	{
		  var current_timestamp = e.timeStamp;
		  if ((current_timestamp - button_x_last_timestamp) > button_x_debouce_delay){
				// alert("current_timestamp: " + current_timestamp + "   and button_x_last_timestamp: " + button_x_last_timestamp);
			  button_x_last_timestamp = current_timestamp;
		      document.getElementById("image_button_x").hidden = false;
		      myForm.button_x_counter.value = Number(myForm.button_x_counter.value) + 1;
		      advance();
		  }
	}
	else if (incoming_keystroke == myForm.button_y.value)
	{
		  var current_timestamp = e.timeStamp;
		  if ((current_timestamp - button_y_last_timestamp) > button_y_debouce_delay){
				// alert("current_timestamp: " + current_timestamp + "   and button_y_last_timestamp: " + button_y_last_timestamp);
			  button_y_last_timestamp = current_timestamp;
		      document.getElementById("image_button_y").hidden = false;
		      myForm.button_y_counter.value = Number(myForm.button_y_counter.value) + 1;
		  }
	}
}
