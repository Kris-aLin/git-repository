$(function(){
	console.log("d");
	var login_false = setInterval(function(){
		window.location.href="login.html";
		clearInterval(login_false);
		
	},3000);
})
