var seminars=[];
var BR="<br/>";
var pictureCount=1;
function processInfo()
{
	
	var first=document.sForm.first.value;
	var last=document.sForm.last.value;
	var email=document.sForm.email.value;
	var phone=document.sForm.phone.value;
	var time=document.sForm.time.value;
	if (time=="other")
	{
		time=document.sForm.other_time.value;
	} //plus add red * for required fields....
	if(first==null || first=="")//do all fields....
	{
		alert("Please fill out the form completely.")
		return false;
	}
	else if(last==null || last=="")
	{
		alert("Please fill out the form completely.")
		return false;
	}
	else if(email==null || email=="")
	{
		alert("Please fill out the form completely.")
		return false;
	}
	else if(time==null || time=="")
	{
		alert("Please fill out the form completely.")
		return false;
	}
	printReceipt(first,last,email,phone,time);
	
	
}
function printReceipt(first,last,email,phone,time)
{
	result="Name: "+first+" "+ last+BR
	+"Email: "+email+BR
	+"Phone Number: "+phone+BR
	+"Seminars: "+seminars.toString()+BR
	+"Best Time for You: "+time+BR;
	document.getElementById("receipt").innerHTML=result;
	document.getElementById("hidden").style.display="block";
}
function clearEverything()
{
	document.getElementById("receipt").innerHTML="";
	document.getElementById("hidden").style.display="none";
}


function emailReceipt()
{
	alert("The message was sent!");

}

function addSeminar(seminarName)
{
	//alert(document.getElementById(seminarName).checked);
	var seminar=document.getElementById(seminarName).value;
	if(document.getElementById(seminarName).checked)
	{
		seminars.push(seminar);
	}
	else if(document.getElementById(seminarName).checked == false)
	{
		var index= seminars.indexOf(seminar);
		seminars.splice(index,1);
	}
	
}	

function next()
{
	//alert('in the function');
	pictureCount=pictureCount+1;
	if(pictureCount==5)
		pictureCount=1;
	//alert('before the switch');
	if(pictureCount==1)
	{
		document.getElementById('picture').src="children_1.jpg";
	}
	if(pictureCount==2)
	{
		document.getElementById('picture').src="children_2.jpg";
	}
	if(pictureCount==3)
	{
		document.getElementById('picture').src="children_3.jpg";
	}
	if(pictureCount==4)
	{
		document.getElementById('picture').src="children_4.jpg";
	}
}
function previous()
{
	pictureCount=pictureCount-1;
	if(pictureCount==0)
		pictureCount=4;
	//alert('before the switch');
	if(pictureCount==1)
	{
		document.getElementById('picture').src="children_1.jpg";
	}
	if(pictureCount==2)
	{
		document.getElementById('picture').src="children_2.jpg";
	}
	if(pictureCount==3)
	{
		document.getElementById('picture').src="children_3.jpg";
	}
	if(pictureCount==4)
	{
		document.getElementById('picture').src="children_4.jpg";
	}
}
