$(function(){
	var length = $("#box1 ul li").size();
	var timer = setInterval(function(){
	   i++;
		move(); 
	},4000); 	
	var i = 0;
    function move(){
    	if(i == -1){
    		i = 5;
    		$("#bottom_nav li").eq(i).addClass("active").siblings().removeClass();
    		$("#box1 #main_list li").fadeOut(1000);
  	        $("#box1 #main_list li").eq(i).fadeIn(2000);
  	        return;
    	}
    	if(i == 6){
    		i = 0;
    	}
	   $("#box1 #main_list li").fadeOut(1000);
  	   $("#box1 #main_list li").eq(i).fadeIn(2000);
       $("#bottom_nav li").eq(i).addClass("active").siblings().removeClass();
     };
     
     $("#bottom_nav li").hover(function(){
     	i = $(this).index();
        $("#bottom_nav li").eq(i).addClass("active").siblings().removeClass();
     	$("#box1 #main_list li").stop().fadeOut("fast");
  	    $("#box1 #main_list li").eq(i).stop().fadeIn("fast"); 
  	  }
    );
     
     $("#box1").hover(function(){ 
					clearInterval(timer);	
				}, function(){ 
					timer = setInterval(function(){
						i++;
						move();	
					}, 4000)
	});						
	$("#box1 .left").click(function(){
		i--;
		move();
	});
	$("#box1 .right").click(function(){	
		i++;
		move();
	}); 
	$("#all_list li").hover(function(){
		var j = $(this).index();
		$("#nav_box .list").eq(j).css("display","block");	
	},function(){	
		var j = $(this).index();
		$("#nav_box .list").eq(j).css("display","none");
	});
	//为什么index是从2开始？
	$("#nav_box .list").hover(function(){	
		var k = $(this).index();
		$("#nav_box .list").eq(k-2).css("display","block");
		},function(){
		var g = $(this).index();
		$("#nav_box .list").eq(g-2).css("display","none");
	 });
	 //导航右边的消息
	 $.ajax({
	 	type:"get",
	 	url:"../data/index/message.json",
	 	async:true,
	 	success:function(responseObj){
	 		var div = $("#nav_right .nav_right_message");
	 		for(var i = 0; i < responseObj.length; i++){
	 			var p = $("<p></p>");
	 			var a = $("<a href = '#'></a>")
	 			a.html(responseObj[i].message);
	 			p.append(a);
	 			p.addClass("active");
	 			div.append(p);	
	 		}
	 	}
	 });
	 
	 //话费，机票，礼品卡
	 $("#nav_right .cost_air_card a").hover(function(){
	 	$(this).find("img").animate({top:0},50);
	 	$(this).find("img").animate({top:"21px"},50);
	 },function(){
	 	$(this).find("img").css("top","21px");
	 });
	 
	 $.ajax({
	 	type:"get",
	 	url:"../data/index/hot.json",
	 	async:true,
	 	success:function(responseObj){
	 		for(var i = 0;i < responseObj.length;i++){
	 			var li = $("<li></li>");
	 			var a = $("<a href='#'></a>");
	 			var img = $("<img/>");
	 			li.addClass("active");
	 			img.attr("src",responseObj[i].address);
	 			a.append(img);
	 			li.append(a);
	 			$("#hot_box2 ul").append(li);
	 		}
	 	}
	 });
	 
	
	$.ajax({
		type:"get",
		url:"../data/index/sale.json",
		async:true,
		success:function(responseObj){
			for(var i = 0;i < responseObj.length; i++){
				var li = $("<li></li>");
				var span = $("<span></span>");
				var p = $("<p></p>");
				var b1 = $("<b></b>");
				var b2 = $("<b></b>");
				var a = $("<a href = '#'></a>");
				span.html(responseObj[i].header);
				b1.html(responseObj[i].message);
				b2.html(responseObj[i].content);
				a.append(b1);
				a.append(b2);
				p.append(a);
				li.append(span);
				li.append(p);
				$("#sale #sale_left ul").append(li);
			}
			$("#sale #sale_left ul li span:even").css("background","#84bff9"); 
			$("#sale #sale_left ul li span:odd").css("background","#ff3b30"); 
			$("#sale #sale_left ul li b:even").css("color","#55555a");
			$("#sale #sale_left ul li b:odd").css("color","#c3a7b4");
			
			$("#sale #sale_left ul li p").hover(function(){
				
				$(this).find("b").eq(0).css("color","#ff0000");
			},function(){
				$(this).find("b").eq(0).css("color","#55555a");
			})
		}
		});
		
	$.ajax({
		type:"get",
		url:"../data/index/sale_images.json",
		async:true,
		success:function(responseObj){
			for(var i = 0; i < responseObj.length; i++){
				
				var li = $("<li></li>");
				if(i == 0){
					var a = $("<a href = 'deli.html'></a>")
				}else{
					var a = $("<a href = '#'></a>");
				}
				
				var img = $("<img/>");
				img.attr("src",responseObj[i].address);
				a.append(img);
				li.append(a);
				$("#sale #sale_right ul").append(li);
			}
		}
	});	
	
	$.ajax({
		type:"get",
		url:"../data/index/news.json",
		async:true,
		success:function(responseObj){
			for(var i = 0; i < responseObj.length;i++){
				var li = $("<li></li>");
				var a = $("<a href = '#'></a>");
				var span = $("<span></span>");
				span.html("【最新】");
				a.html(responseObj[i].news);
				li.append(span);
				li.append(a);
				
				$("#news #news_left ul").append(li);
			}
			
			$("#news #news_left ul li a").hover(function(){
				$(this).css("color","#ff0000");
			},function(){
				$(this).css("color","#555");
			})
		}
	});
	
	//新闻
	$.ajax({
		type:"get",
		url:"../data/index/news_images.json",
		async:true,
		success:function(responseObj){
			for(var i = 0; i < responseObj.length;i++){
				var li = $("<li></li>");
				var a = $("<a href = '#'></a>");
				var img = $("<img/>");
				img.attr("src",responseObj[i].address);
				a.append(img);
				
				li.append(a);
				$("#news_right ul").append(li);
			}
		}
	});
	
//	console.log($(".main_content_left_bottom ul").eq(0).find("li").size());
	//1楼左边轮播图
	$.ajax({
		type:"get",
		url:"../data/index/first_lunbo.json",
		async:true,
		success:function(responseObj){
			for(var i = 0; i < responseObj.length; i ++){
				for(var j = 0; j < responseObj[i].length; j++){
//					console.log(responseObj[i].length);
					if(responseObj[i][j].id == 1){
						for(var k = 0; k < responseObj[i][j].data.length; k++){
							var li = $("<li></li>");
		 					var a = $("<a href = '#'></a>");
							var img = $("<img/>");
							img.attr("src",responseObj[i][j].data[k]);
							a.append(img);
							li.append(a);
							$(".main_content_left_bottom1 ul").append(li);
						}
			
						var size = $(".main_content_left_bottom1 ul li").size();

						var first = $(".main_content_left_bottom1 ul li").first().clone();
					
						var second = $(".main_content_left_bottom1 ul li").eq(1).clone();
					
						var last = $(".main_content_left_bottom1 ul li").eq(size-1).clone();
					
						$(".main_content_left_bottom1 ul").append(first);
						$(".main_content_left_bottom1 ul").append(second);
						$(".main_content_left_bottom1 ul").prepend(last);
						var i = 0;
						var timer = setInterval(function(){
							i++;
							move();
						
						},2000);
						function move(){
							if(i == 7){
								i = 1;
								$(".main_content_left_bottom1 ul").css("top","-5px");
							}
							$(".main_content_left_bottom1 ul").stop().animate({"top":-5+(-i *51)},500);
								
					    };
					    
					    $(".main_content_left_bottom1").hover(function(){ //mouseenter
					
					//关闭定时器
					clearInterval(timer);
							
						}, function(){ //mouseleave
							
							//重启定时器
							timer = setInterval(function(){
								i++;
								move();
							}, 3000)
					})
					    
					    $(".main_content_left_bottom1 .left").click(function(){
//					    	clearInterval(timer);
					    	
					    	if(i == 0){
					    		$(".main_content_left_bottom1 ul").css("top",-5-6*51+"px");
					    		i = 6;
					    	}
					    	i--;
					    	
					    	move();
//					    	timer = setInterval(function(){
//							   move();
//							   i++;
//						    },2000);
					    });
					    
					    $(".main_content_left_bottom1 .right").click(function(){
//					    	clearInterval(timer);
					    	i++;
					    	move();
//					    	timer = setInterval(function(){
//							   move();
//							   i++;
//						    },2000);
					    });
				
					}
				}
		
			}
	
		}

	});
	
	//楼层中间轮播图
	$.ajax({
		type:"get",
		url:"../data/index/first_lunbo.json",
		async:true,
		success:function(responseObj){
			for(var i = 0; i < responseObj.length; i ++){
				for(var j = 0; j < responseObj[i].length; j++){
					if(responseObj[i][j].id == 2){
						for(var k = 0; k < responseObj[i][j].data.length; k++){
							var li = $("<li></li>");
							var a = $("<a href = '#'></a>");
							var img = $("<img/>");
							img.attr("src",responseObj[i][j].data[k]);
							a.append(img);
							li.append(a);
							$(".main_content_middle_lunbotu1 ul").append(li);
						}
						
					}
				}
			}
			var first = $(".main_content_middle_lunbotu1 ul li").first().clone();
			$(".main_content_middle_lunbotu1 ul").append(first);
		}
		
	});
	var timer1 = setInterval(function(){
				q++;
				move1();
	},3000);
	var q = 0;
	function move1(){
		if(q == -1){
			$(".main_content_middle_lunbotu1 ul").css("left",-389*4 + "px");
			q = 3;
		}
		if(q == 5){
			$(".main_content_middle_lunbotu1 ul").css("left","0px");
			q = 1;
		}
		$(".main_content_middle_lunbotu1 ul").stop().animate({"left":-389*q},500);
	};
	
	  $(".main_content_middle_lunbotu1").hover(function(){ //mouseenter
					
					//关闭定时器
					clearInterval(timer1);
							
						}, function(){ //mouseleave
							
							//重启定时器
							timer1 = setInterval(function(){
								q++;
								move1();
							}, 3000)
	})
	
	
	$(".main_content_middle_lunbotu1 .left").click(function(){
//		clearInterval(timer1);
		q--;
		move1();
//		timer1 = setInterval(function(){
//				q++;
//				move1();
//		},3000);
	});
	$(".main_content_middle_lunbotu1 .right").click(function(){
//		clearInterval(timer1);
		q++;
		move1();
//		timer1 = setInterval(function(){
//				q++;
//				move1();
//		},3000);
	});
	
	$.ajax({
		type:"get",
		url:"../data/index/first_lunbo.json",
		async:true,
		success:function(responseObj){
			for(var i = 0; i < responseObj.length; i ++){
				for(var j = 0; j < responseObj[i].length; j++){
					if(responseObj[i][j].id == 3){
						for(var k = 0; k < responseObj[i][j].data.length; k++){
							var ul = $("<ul></ul>");
							var li1 = $("<li></li>");
							var li2 = $("<li></li>");
							var a1 = $("<a href = '#'></a>");
							var a2 = $("<a href = '#'></a>");
							var img = $("<img/>");
							var p = $("<p></p>");
							var span1 = $("<span></span>");
							var span2 = $("<span></span>");
							span1.addClass("span1");
							span2.addClass("span2");
							li1.addClass("li1");
							li2.addClass("li2");
							a2.html(responseObj[i][j].data[k].content);
							p.append(a2);
							span1.html(responseObj[i][j].data[k].price);
							span2.html(responseObj[i][j].data[k].oldPrice);
							img.attr("src",responseObj[i][j].data[k].src);
							
							a1.append(img);
							
							li1.append(a1);
							li2.append(p);
							li2.append(span1);
							li2.append(span2);
							ul.append(li1);
							ul.append(li2);
							$(".floor_bottom").append(ul);
						}
						
					}
				}
				
 
			}
			
			$(".floor_bottom ul").hover(function(){
				$(this).find(".li1").find("a").animate({"margin-top":0},400);
		    },function(){
		    	$(this).find(".li1").find("a").animate({"margin-top":10+"px"},400);
		    });
	  
		}
		
		
	});
	
	
	//右边排行榜
	$.ajax({
		type:"get",
		url:"../data/index/ranking.json",
		async:true,
		success:function(responseObj){
			for(var i = 0;i < responseObj.length; i ++){
				var li = $("<li></li>");
				var div1 = $("<div></div>");
				
				div1.addClass("rankingTitle");
				
				var span = $("<span></span>");
				var h1 = $("<h1></h1>");
				span.html(responseObj[i].number);
				h1.html(responseObj[i].content);
				div1.append(span);
				div1.append(h1);
				var div2 = $("<div></div>");
				div2.addClass("rankingContent");
				var div2_left = $("<div></div>");
				div2_left.addClass("left_content");
				var img = $("<img/>");
				img.attr("src",responseObj[i].src);
				var div2_right = $("<div></div>");
				div2_right.addClass("right_content");
				var p1 = $("<p></p>");
				p1.html(responseObj[i].message);
				p1.addClass("p1");
				var p2 = $("<p></p>");
				p2.html(responseObj[i].money);
				p2.addClass("p2");
				
				div2_left.append(img);
				div2_right.append(p1);
				div2_right.append(p2);
				
				div2.append(div2_left);
				div2.append(div2_right);
				
				li.append(div1);
				li.append(div2);
				$(".ranking_message_list").append(li);
			}
			
			//初始化
			
			$(".ranking_message_list li").eq(0).css("height","166px");
			$(".ranking_message_list li").eq(5).css("height","166px");
			$(".ranking_message_list li").eq(10).css("height","166px");
			$(".ranking_message_list li").eq(15).css("height","166px");
			$(".ranking_message_list li").eq(20).css("height","166px");
			//右边排行榜
 			$(".ranking_message_list li .rankingTitle").hover(function(){
 		
 				$(this).parent().siblings().stop().animate({"height":"26px"},500);
 				$(this).parent().stop().animate({"height":"166px"},500);
// 				$(this).next().slideDown();
 			},function(){
// 				$(this).next().slideUp();
 			});
 			
// 			$(".ranking_message_list li .rankingContent").hover(function(){
//	 			$(this).slideDown();
//	 		},function(){
//	 			$(this).slideUp();
//	 		});	
		}
	});
	
 	//优店推荐
 	$.get("../data/index/excellent.json",function(responseObj){
 		for(var i = 0; i < responseObj.length; i++){
 			var li = $("<li></li>");
 			var a = $("<a href = '#'></a>");
 			var img = $("<img/>");
 			img.attr("src",responseObj[i].address);
 			a.append(img);
 			li.append(a);
 			$("#excellent_img ul").append(li);
 		}
 	}
 		
 		
 	)
 	
 	
 	
 	
	
}); 

//二楼

$(function(){
	

	$.ajax({
		type:"get",
		url:"../data/index/first_lunbo.json",
		async:true,
		success:function(responseObj){
			for(var i = 0; i < responseObj.length; i ++){
				for(var j = 0; j < responseObj[i].length; j++){
//					console.log(responseObj[i].length);
					if(responseObj[i][j].id == 5){
						for(var k = 0; k < responseObj[i][j].data.length; k++){
							var li = $("<li></li>");
		 					var a = $("<a href = '#'></a>");
							var img = $("<img/>");
							img.attr("src",responseObj[i][j].data[k]);
							a.append(img);
							li.append(a);
							$(".main_content_left_bottom2 ul").append(li);
						}
			
						var size = $(".main_content_left_bottom2 ul li").size();

						var first = $(".main_content_left_bottom2 ul li").first().clone();
					
						var second = $(".main_content_left_bottom2 ul li").eq(1).clone();
					
						var last = $(".main_content_left_bottom2 ul li").eq(size-1).clone();
					
						$(".main_content_left_bottom2 ul").append(first);
						$(".main_content_left_bottom2 ul").append(second);
						$(".main_content_left_bottom2 ul").prepend(last);
						var i = 0;
						var timer = setInterval(function(){
							i++;
							move();
						
						},2000);
						function move(){
							if(i == 7){
								i = 1;
								$(".main_content_left_bottom2 ul").css("top","-5px");
							}
							$(".main_content_left_bottom2 ul").stop().animate({"top":-5+(-i *51)},500);
								
					    };
					    
					    
					    
					     $(".main_content_left_bottom2").hover(function(){ //mouseenter
					
							//关闭定时器
							clearInterval(timer);
									
								}, function(){ //mouseleave
									
									//重启定时器
									timer = setInterval(function(){
										i++;
										move();
									}, 2000)
						})
					    
					    $(".main_content_left_bottom2 .left").click(function(){
//					    	clearInterval(timer);
					    	
					    	if(i == 0){
					    		$(".main_content_left_bottom2 ul").css("top",-5-6*51+"px");
					    		i = 6;
					    	}
					    	i--;
					    	
					    	move();
//					    	timer = setInterval(function(){
//							   move();
//							   i++;
//						    },2000);
					    });
					    
					    $(".main_content_left_bottom2 .right").click(function(){
//					    	clearInterval(timer);
					    	i++;
					    	move();
//					    	timer = setInterval(function(){
//							   move();
//							   i++;
//						    },2000);
					    });
				
					}
				}
		
			}
	
		}

	});
	
	//楼层中间轮播图
	$.ajax({
		type:"get",
		url:"../data/index/first_lunbo.json",
		async:true,
		success:function(responseObj){
			for(var i = 0; i < responseObj.length; i ++){
				for(var j = 0; j < responseObj[i].length; j++){
					if(responseObj[i][j].id == 6){
						for(var k = 0; k < responseObj[i][j].data.length; k++){
							var li = $("<li></li>");
							var a = $("<a href = '#'></a>");
							var img = $("<img/>");
							img.attr("src",responseObj[i][j].data[k]);
							a.append(img);
							li.append(a);
							$(".main_content_middle_lunbotu2 ul").append(li);
						}
						
					}
				}
			}
			var first = $(".main_content_middle_lunbotu2 ul li").first().clone();
			$(".main_content_middle_lunbotu2 ul").append(first);
		}
		
	});
	var timer1 = setInterval(function(){
				q++;
				move1();
	},3000);
	var q = 0;
	function move1(){
		if(q == -1){
			$(".main_content_middle_lunbotu2 ul").css("left",-389*4 + "px");
			q = 3;
		}
		if(q == 5){
			$(".main_content_middle_lunbotu2 ul").css("left","0px");
			q = 1;
		}
		$(".main_content_middle_lunbotu2 ul").stop().animate({"left":-389*q},500);
	};
	
	$(".main_content_middle_lunbotu2").hover(function(){ //mouseenter
					
							//关闭定时器
							clearInterval(timer1);
									
								}, function(){ //mouseleave
									
									//重启定时器
									timer1 = setInterval(function(){
										q++;
										move1();
									}, 3000)
	})
	
	$(".main_content_middle_lunbotu2 .left").click(function(){
//		clearInterval(timer1);
		q--;
		move1();
//		timer1 = setInterval(function(){
//				q++;
//				move1();
//		},3000);
	});
	$(".main_content_middle_lunbotu2 .right").click(function(){
//		clearInterval(timer1);
		q++;
		move1();
//		timer1 = setInterval(function(){
//				q++;
//				move1();
//		},3000);
	});
	
});
//右边固定
	
	
$("#fixed_right ul li").eq(0).hover(function(){
    $("#fixed_right ul li").eq(0).css("background","#ff3b30");
	$(".fixed_p1").stop().animate({right:34});
},function(){
    $("#fixed_right ul li").eq(0).css("background","#2c2c2c");
	$(".fixed_p1").stop().animate({right:-88});
});

$(".fixed_p1").hover(function(){
	$("#fixed_right ul li").eq(0).css("background","#ff3b30");
	$(".fixed_p1").stop().animate({right:34});
	
},function(){
	$("#fixed_right ul li").eq(0).css("background","#2c2c2c");
	$(".fixed_p1").stop().animate({right:-88});
});




////三楼
$(function(){
	

	//1楼左边轮播图
	$.ajax({
		type:"get",
		url:"../data/index/first_lunbo.json",
		async:true,
		success:function(responseObj){
			for(var i = 0; i < responseObj.length; i ++){
				for(var j = 0; j < responseObj[i].length; j++){
//					console.log(responseObj[i].length);
					if(responseObj[i][j].id == "3_1"){
						for(var k = 0; k < responseObj[i][j].data.length; k++){
							var li = $("<li></li>");
		 					var a = $("<a href = '#'></a>");
							var img = $("<img/>");
							img.attr("src",responseObj[i][j].data[k]);
							a.append(img);
							li.append(a);
							$(".main_content_left_bottom3 ul").append(li);
						}
			
						var size = $(".main_content_left_bottom3 ul li").size();

						var first = $(".main_content_left_bottom3 ul li").first().clone();
					
						var second = $(".main_content_left_bottom3 ul li").eq(1).clone();
					
						var last = $(".main_content_left_bottom3 ul li").eq(size-1).clone();
					
						$(".main_content_left_bottom3 ul").append(first);
						$(".main_content_left_bottom3 ul").append(second);
						$(".main_content_left_bottom3 ul").prepend(last);
						var i = 0;
						var timer = setInterval(function(){
							i++;
							move();
						
						},2000);
						function move(){
							if(i == 11){
								i = 1;
								$(".main_content_left_bottom3 ul").css("top","-5px");
							}
							$(".main_content_left_bottom3 ul").stop().animate({"top":-5+(-i *51)},500);
								
					    };
					    
					    $(".main_content_left_bottom3").hover(function(){ //mouseenter
					
							//关闭定时器
							clearInterval(timer);
									
								}, function(){ //mouseleave
									
									//重启定时器
									timer = setInterval(function(){
										i++;
										move();
									}, 2000)
						})
					    
					    $(".main_content_left_bottom3 .left").click(function(){
//					    	clearInterval(timer);
					    	
					    	if(i == 0){
					    		$(".main_content_left_bottom3 ul").css("top",-5-10*51+"px");
					    		i = 10;
					    	}
					    	i--;
					    	
					    	move();
//					    	timer = setInterval(function(){
//							   move();
//							   i++;
//						    },2000);
					    });
					    
					    $(".main_content_left_bottom3 .right").click(function(){
//					    	clearInterval(timer);
					    	i++;
					    	move();
//					    	timer = setInterval(function(){
//							   move();
//							   i++;
//						    },2000);
					    });
				
					}
				}
		
			}
	
		}

	});
	
	//楼层中间轮播图
	$.ajax({
		type:"get",
		url:"../data/index/first_lunbo.json",
		async:true,
		success:function(responseObj){
			for(var i = 0; i < responseObj.length; i ++){
				for(var j = 0; j < responseObj[i].length; j++){
					if(responseObj[i][j].id == "3_2"){
						for(var k = 0; k < responseObj[i][j].data.length; k++){
							var li = $("<li></li>");
							var a = $("<a href = '#'></a>");
							var img = $("<img/>");
							img.attr("src",responseObj[i][j].data[k]);
							a.append(img);
							li.append(a);
							$(".main_content_middle_lunbotu3 ul").append(li);
						}
						
					}
				}
			}
			var first = $(".main_content_middle_lunbotu3 ul li").first().clone();
			$(".main_content_middle_lunbotu3 ul").append(first);
		}
		
	});
	var timer1 = setInterval(function(){
				q++;
				move1();
	},3000);
	var q = 0;
	function move1(){
		if(q == -1){
			$(".main_content_middle_lunbotu3 ul").css("left",-389*4 + "px");
			q = 3;
		}
		if(q == 5){
			$(".main_content_middle_lunbotu3 ul").css("left","0px");
			q = 1;
		}
		$(".main_content_middle_lunbotu3 ul").stop().animate({"left":-389*q},500);
	};
	
	
	$(".main_content_middle_lunbotu3").hover(function(){ //mouseenter
					
							//关闭定时器
							clearInterval(timer1);
									
								}, function(){ //mouseleave
									
									//重启定时器
									timer1 = setInterval(function(){
										q++;
										move1();
									},3000)
	})
	
	$(".main_content_middle_lunbotu3 .left").click(function(){
//		clearInterval(timer1);
		q--;
		move1();
//		timer1 = setInterval(function(){
//				q++;
//				move1();
//		},3000);
	});
	$(".main_content_middle_lunbotu3 .right").click(function(){
//		clearInterval(timer1);
		q++;
		move1();
//		timer1 = setInterval(function(){
//				q++;
//				move1();
//		},3000);
	});
});
//四楼
$(function(){
	

	//1楼左边轮播图
	$.ajax({
		type:"get",
		url:"../data/index/first_lunbo.json",
		async:true,
		success:function(responseObj){
			for(var i = 0; i < responseObj.length; i ++){
				for(var j = 0; j < responseObj[i].length; j++){
//					console.log(responseObj[i].length);
					if(responseObj[i][j].id == 5){
						for(var k = 0; k < responseObj[i][j].data.length; k++){
							var li = $("<li></li>");
		 					var a = $("<a href = '#'></a>");
							var img = $("<img/>");
							img.attr("src",responseObj[i][j].data[k]);
							a.append(img);
							li.append(a);
							$(".main_content_left_bottom4 ul").append(li);
						}
			
						var size = $(".main_content_left_bottom4 ul li").size();

						var first = $(".main_content_left_bottom4 ul li").first().clone();
					
						var second = $(".main_content_left_bottom4 ul li").eq(1).clone();
					
						var last = $(".main_content_left_bottom4 ul li").eq(size-1).clone();
					
						$(".main_content_left_bottom4 ul").append(first);
						$(".main_content_left_bottom4 ul").append(second);
						$(".main_content_left_bottom4 ul").prepend(last);
						var i = 0;
						var timer = setInterval(function(){
							i++;
							move();
						
						},2000);
						function move(){
							if(i == 7){
								i = 1;
								$(".main_content_left_bottom4 ul").css("top","-5px");
							}
							$(".main_content_left_bottom4 ul").stop().animate({"top":-5+(-i *51)},500);
								
					    };
					    
					    $(".main_content_left_bottom4").hover(function(){ //mouseenter
					
							//关闭定时器
							clearInterval(timer);
									
								}, function(){ //mouseleave
									
									//重启定时器
									timer = setInterval(function(){
										i++;
										move();
									},2000)
						})
					    
					    $(".main_content_left_bottom4 .left").click(function(){
//					    	clearInterval(timer);
					    	
					    	if(i == 0){
					    		$(".main_content_left_bottom4 ul").css("top",-5-6*51+"px");
					    		i = 6;
					    	}
					    	i--;
					    	
					    	move();
//					    	timer = setInterval(function(){
//							   move();
//							   i++;
//						    },2000);
					    });
					    
					    $(".main_content_left_bottom4 .right").click(function(){
//					    	clearInterval(timer);
					    	i++;
					    	move();
//					    	timer = setInterval(function(){
//							   move();
//							   i++;
//						    },2000);
					    });
				
					}
				}
		
			}
	
		}

	});
	
	//楼层中间轮播图
	$.ajax({
		type:"get",
		url:"../data/index/first_lunbo.json",
		async:true,
		success:function(responseObj){
			for(var i = 0; i < responseObj.length; i ++){
				for(var j = 0; j < responseObj[i].length; j++){
					if(responseObj[i][j].id == "4_2"){
						for(var k = 0; k < responseObj[i][j].data.length; k++){
							var li = $("<li></li>");
							var a = $("<a href = '#'></a>");
							var img = $("<img/>");
							img.attr("src",responseObj[i][j].data[k]);
							a.append(img);
							li.append(a);
							$(".main_content_middle_lunbotu4 ul").append(li);
						}
						
					}
				}
			}
			var first = $(".main_content_middle_lunbotu4 ul li").first().clone();
			$(".main_content_middle_lunbotu4 ul").append(first);
		}
		
	});
	var timer1 = setInterval(function(){
				q++;
				move1();
	},3000);
	var q = 0;
	function move1(){
		if(q == -1){
			$(".main_content_middle_lunbotu4 ul").css("left",-389*4 + "px");
			q = 3;
		}
		if(q == 5){
			$(".main_content_middle_lunbotu4 ul").css("left","0px");
			q = 1;
		}
		$(".main_content_middle_lunbotu4 ul").stop().animate({"left":-389*q},500);
	};
	
	$(".main_content_middle_lunbotu4").hover(function(){ //mouseenter
					
							//关闭定时器
							clearInterval(timer1);
									
								}, function(){ //mouseleave
									
									//重启定时器
									timer1 = setInterval(function(){
										q++;
										move1();
									},3000)
	})
	
	$(".main_content_middle_lunbotu4 .left").click(function(){
//		clearInterval(timer1);
		q--;
		move1();
//		timer1 = setInterval(function(){
//				q++;
//				move1();
//		},3000);
	});
	$(".main_content_middle_lunbotu4 .right").click(function(){
//		clearInterval(timer1);
		q++;
		move1();
//		timer1 = setInterval(function(){
//				q++;
//				move1();
//		},3000);
	});
});

//判断是否已登录
$(function(){
	var value = $.cookie("type");
	var userName = $.cookie("user_name");
	console.log(value);
	if(value == "success"){
		$("#left .span_1 a").remove();
		$("#left .span_2 a").remove();
//		$("#left .span_1 a").html("你好"+ userName);
//		$("#left .span_2 a").html("欢迎来到米米乐商城");
		var a = $("<a href = '#'></a>");
		a.html(userName);
		$("#left .span_1").html("你好");
		$("#left .span_1").append(a);
		$("#left .span_2").html("欢迎来到");
		var a1 = $("<a href = '#'></a>");
		a1.html("米米乐商城");
		var a2 = $("<a href = '#'></a>");
		a2.html("[退出]");
		$("#left .span_2").append(a1);
		$("#left .span_2").append(a2);
	};
	
	
	
	//点击退出时，
	$("#left .span_2 a").click(function(){
		$("#left .span_1").remove();
		$("#left .span_2").remove();
		var span_1 = $("<span></span>");
		span_1.addClass("span_1");
		
		var span_2 = $("<span></span>");
		span_2.addClass("span_2");
		var a1 = $("<a href = 'login.html'>登录</a>");
		var a2 = $("<a href = 'regist.html'>注册</a>");
		span_1.append(a1);
		span_2.append(a2);
		
		$("#left").append(span_1);
		$("#left").append(span_2);
	})
	
	
	
	$("#all_list li").eq(0).click(function(){
		window.location.href = "goods_list.html";
	})

})
