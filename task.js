function vfun(){
	var name=document.forms["form"]["name"].value;
	var pname=document.forms["form"]["pname"].value;

	if(name==null || name==""){
		document.getElementById("errorbox").innerHTML="Plese Enter User name";
		return false;
     }

	if(pname==null || pname==""){
		document.getElementById("errorbox1").innerHTML="Plese Enter Password";
		return false;
	}
	
}


///task 2

	function nfun(){
		var bname=document.forms["form2"]["bname"].value;
		var aname=document.forms["form2"]["aname"].value;
		var lname=document.forms["form2"]["lname"].value;
		var amount=document.forms["form2"]["amount"].value;

		if (bname==null || bname=="") { 
        document.getElementById("falsebox").innerHTML="Please Enter Book Name";
        return false;
		}
		if(aname==null || aname==""){
			document.getElementById("falsebox").innerHTML="Please Enter Author Name";
			return false;
		}
		if(lname==null || lname==""){
			document.getElementById("falsebox").innerHTML="Please Enter Laguage";
			return false;
		}
		if(amount==null || amount==""){
			document.getElementById("falsebox").innerHTML="Please Enter Cost";
			return false;
		}
}
