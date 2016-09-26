$(function(){
	$(".login input").click(function(){
		
//		$(".text_password").find("span").remove();
		var user = $(":text").val();
		var pwd = $(":password").val();
		var flag = true;
		$.ajax({
			type:"get",
			url:"../data/login/user_pwd.json",
			async:true,
			success:function(responseObj){

				for(var i = 0;i < responseObj.length;i++){

					if(responseObj[i].user == user && responseObj[i].pwd == pwd){
						
						//保存用户名和密码到cookie里
						var userArr = $.cookie("userMessage") ? JSON.parse($.cookie("userMessage")) : [];
						
						var isExist = false;
						
						for(var i = 0; i < userArr.length; i++){
							if(user == userArr[i].user){
							
							isExist = true;
							}
						}
						
						if(!isExist){
							var login_message = {
								user:user,
								pwd:pwd
							}
							userArr.push(login_message);
						}
						
						$.cookie("userMessage",JSON.stringify(userArr),{expires:7,path:"/"});
						
						flag = false;
						
					}
					
					//登录成功，跳转到主页
					$.cookie("type", "success", {expires:7, path:"/"});
					$.cookie("user_name", user, {expires:7, path:"/"});
					window.location.href="index.html";
				}
				
				if(flag){

					window.location.href="login_false.html";
				}
				
			}
		});
	})
	
	
	//获取cookie里的用户名和密码
	if($.cookie("userMessage") != ""){
		
	
		var login_message = $.cookie("userMessage");
		var loginArr = JSON.parse(login_message);
		
		//获取最后一次保存的用户名和密码
		var length = loginArr.length;
		console.log(loginArr[2].user);
		$(":text").val(loginArr[length-1].user);
		$(":password").val(loginArr[length-1].pwd);
	
	}
})
  