function checkReqFields() {
	/*var name=document.getElementById('nameinput').value;
	if (name==null || name=="") {
		alert("First name must be filled out");
		return false;
	}
	writeTy(name);
	document.forms('contact').reset();*/
	var x = document.getElementsByClassName("mandatory");
	var returnVal=true;
	for (var i = 0; i < x.length; i++) {
		if (x[i].value == null || x[i].value == "") {
			x[i].style.backgroundColor = "red";
			returnVal=false;
		}
		else {
			x[i].style.backgroundColor = "white";
		}
	}
	if (returnVal == false) {
		alert("Error: missing mandatory fields. See highlighted red fields");
		return false;
	}
	else {
		writeTy(name);
		document.forms('contact').reset();
		return true;
	}
}
function writeTy(name) {
	var name=document.getElementById('nameinput').value;
	alert("Thanks for contacting us, "+name+"!");
}