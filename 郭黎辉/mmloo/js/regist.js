$(function(){
	
	
	
	$("#form .yan_code .hint").click(function(){
		var code1 = String.fromCharCode(parseInt(Math.random() * 26) + 65);
		var code2 = String.fromCharCode(parseInt(Math.random() * 26) + 65);
		var number = parseInt(Math.random() * 10);
		var code3 = String.fromCharCode(parseInt(Math.random() * 26) + 65);
		$("#form .yan_code .code").html(code1 + code2 + number +code3);
	});
	
	//获取焦点提醒
	$(".phone input").focus(function(){
		$("#regist_main .user").slideDown("fast");
	});
	$(".phone input").blur(function(){
		$("#regist_main .user").slideUp("fast");
	});
	
	$(".pwd input").focus(function(){
		$("#regist_main .pwd_").slideDown("fast");
	});
	$(".pwd input").blur(function(){
		$("#regist_main .pwd_").slideUp("fast");
	});
	
	$(".yan_code input").focus(function(){
		$("#regist_main .code_").slideDown("fast");
	});
	$(".yan_code input").blur(function(){
		$("#regist_main .code_").slideUp("fast");
	});
	
	$(".msm .input1").focus(function(){
		$("#regist_main .msm_").slideDown("fast");
	});
	$(".msm .input1").blur(function(){
		$("#regist_main .msm_").slideUp("fast");
	});
	
	$(".friend input").focus(function(){
		$("#regist_main .friend_").slideDown("fast");
	});
	$(".friend input").blur(function(){
		$("#regist_main .friend_").slideUp("fast");
	});
	
	//验证手机号
	$(".phone input").change(function(){
		
		var number_value = $(".phone input").val();
		
		//标记是否被注册过
		var login_regist = true;
		//获取json里已经注册过的账号
		$.ajax({
			type:"get",
			url:"../data/login/user_pwd.json",
			async:true,
			success:function(responseObj){
				for(var i = 0; i < responseObj.length;i++){
					if(number_value == responseObj[i].user){
							$(".phone input").addClass("border_red");
							$(".hint1").html("该手机号码已经被使用");
							$(".hint1").addClass("active");
							$(".b1 img").attr("src","../img/regist/false.png");
						login_regist = false;
					}
				}
				
				if(login_regist){
					var pattern = /^[1-3]\d{10}$/;
					if(pattern.test(number_value)){
						$(".phone input").removeClass("border_red");
						$(".hint1").removeClass("active");
						$(".b1 img").attr("src","../img/regist/true.png");
					}else{
						$(".phone input").addClass("border_red");
						$(".hint1").html("手机号码格式不对")
						$(".hint1").addClass("active");
						$(".b1 img").attr("src","../img/regist/false.png");
					}
				}
				
				
				
			}
		});
		
		
	});
	//验证密码格式
	$(".pwd input").change(function(){
		var pwd_value = $(".pwd input").val();
		var pattern = /^.{6,20}$/;
		if(pattern.test(pwd_value)){
			$(".pwd input").removeClass("border_red");
			$(".hint2").removeClass("active");
			$(".b2 img").attr("src","../img/regist/true.png");
		}else{
			$(".pwd input").addClass("border_red");
			$(".hint2").html("密码长度应在6-20个字符之间");
			$(".hint2").addClass("active");
			$(".b2 img").attr("src","../img/regist/false.png");
		}
	});
	//验证码格式验证
	$(".yan_code input").change(function(){
		var pwd_value = $(".yan_code input").val();
		var code_value = $(".yan_code .code").html();
		
		
		if(pwd_value == code_value){
			$(".yan_code input").removeClass("border_red");
			$(".hint3").removeClass("active");
			$(".b3 img").attr("src","../img/regist/true.png");
		}else{
			$(".yan_code input").addClass("border_red");
			$(".hint3").html("验证码不正确");
			$(".hint3").addClass("active");
			$(".b3 img").attr("src","../img/regist/false.png");
		}
	});
	
	//注册
	
	$("#form .btn").click(function(){
		
		var choose_value = $(":checkbox").prop("checked");
//		console.log(choose_value);
		
		if(!choose_value){
			
			$(".hint6").html("请阅读并同意该协议");
			$(".hint6").addClass("active");
			
		}
		else{
			$(".hint6").removeClass("active");
		}
		
		if($(".b1 img").attr("src") == "../img/regist/true.png" && $(".b2 img").attr("src") == "../img/regist/true.png" && $(".b3 img").attr("src") == "../img/regist/true.png" && choose_value ){
			
			//注册成功时，把用户名和账号存到cookie中
			
			var user_message = {
				user: $(".phone input").val(),
				pwd : $(".pwd input").val()
			}
			
			var userArr = $.cookie("userMessage") ? JSON.parse($.cookie("userMessage")) : [];
			
			userArr.push(user_message);
			
			$.cookie("userMessage",JSON.stringify(userArr),{expires:7,path:"/"});
			
			window.location.href = "index.html";
			
		}
		if($(".phone input").val() == ""){
			$(".phone input").addClass("border_red");
			$(".hint1").html("手机号码不能为空");
			$(".hint1").addClass("active");
			$(".b1 img").attr("src","../img/regist/false.png");
		}
		if($(".pwd input").val() == ""){
			$(".pwd input").addClass("border_red");
			$(".hint2").html("密码不能为空");
			$(".hint2").addClass("active");
			$(".b2 img").attr("src","../img/regist/false.png");
		}
		if($(".yan_code input").val() == ""){
			$(".yan_code input").addClass("border_red");
			$(".hint3").html("验证码不能为空");
			$(".hint3").addClass("active");
			$(".b3 img").attr("src","../img/regist/false.png");
		}
	})
		
	
	
})

