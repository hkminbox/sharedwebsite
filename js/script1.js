function error_message(){
	alert("This functionality is currently unavailable");
}
function loginPage(){
        window.location ='login.html';
    }
    
function check_valid()
{
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var pass = document.getElementById("password").value;
	const reg = /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([a-zA-Z]{2,4})+$/;
	// console.log(reg.test(email));
	if(name=="")
	{
		alert("Enter Name");
		document.getElementById(("name")).focus()
		return false;
	}
	else if(email == "" || reg.test(email) == false)
	{
		alert("Enter a valid email");
		document.getElementById(("email")).focus()
		return false;
	}
	else if(pass=="" || pass.length < 8)
	{
		alert("Enter a valid password");
		document.getElementById(("password")).focus()
		return false;
	}
	else
	{
		return true;
	}


}

function check_valid_login()
{
	var email = document.getElementById("email").value;
	var pass = document.getElementById("password").value;
	const reg = /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([a-zA-Z]{2,4})+$/;
	if(email == "" || reg.test(email) == false)
	{
		alert("Enter a valid email");
		document.getElementById(("email")).focus()
		return false;
	}
	else if(pass=="" || pass.length < 8)
	{
		alert("Enter a valid password");
		document.getElementById(("password")).focus()
		return false;
	}
	else
	{
		return true;
	}
}