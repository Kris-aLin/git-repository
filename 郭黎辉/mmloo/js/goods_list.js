$(function(){
	
	$.ajax({
		type:"get",
		url:"../data/goods_list/goods_list.json",
		async:true,
		success:function(responseObj){
			for(var i = 0;i < responseObj.length;i++){
				
				var new_div = $("<div></div>");
				
				var row = parseInt(i/4);
				var low = i%4;
				new_div.css({"left":low*238,"top":row*350});
				
				new_div.addClass("new_div_1");
				
				//大图
				var ul_big = $("<ul></ul>");
				ul_big.addClass("ul_big");
				for(var d = 0;d < responseObj[i].big_img.length;d++){
					var li = $("<li></li>");
					var img5 = $("<img/>");
					img5.addClass("big");
					img5.attr("src",responseObj[i].big_img[d]);
					li.append(img5);
					ul_big.append(li);
				}
				
				new_div.append(ul_big);
				
//				var img1 = $("<img/>");
//				img1.addClass("big");
//				img1.attr("src",responseObj[i].big_img);
//				new_div.append(img1);
				
				var move_div = $("<div></div>");
				move_div.addClass("move_div");
				var ul = $("<ul></ul>");
				ul.addClass("small_ul");
				for(var j =0;j < responseObj[i].data.length;j++){
					var li = $("<li></li>");
					var img2 = $("<img/>");
					img2.attr("src",responseObj[i].data[j]);
					li.append(img2);
					ul.append(li);
				} 
				//初始化小图标的边框颜色
				ul.find("li").eq(responseObj[i].data.length-1).addClass("change_border");
				move_div.append(ul)
//				new_div.append(ul);
				 
				
				var p1 = $("<p></p>");
				p1.addClass("p1");
				var a = $("<a href = '#'></a>");
				
				a.html(responseObj[i].content);
				p1.append(a);
				move_div.append(p1)
				var p2 = $("<p></p>");
				p2.addClass("p2");
				
				var span1 = $("<span></span>");
				span1.html(responseObj[i].price);
				span1.addClass("span1");
				var span2 = $("<span></span>");
				span2.html(responseObj[i].oldPrice);
				span2.addClass("span2");
				var span3 = $("<span></span>");
				for(var k =0;k < responseObj[i].stars.length;k++){
					var img4 = $("<img/>");
					img4.attr("src",responseObj[i].stars[k]);
					span3.append(img4);
				}
				span3.addClass("span3");
				p2.append(span1);
				p2.append(span2);
				p2.append(span3);
				move_div.append(p2)
//				new_div.append(p1);
//				new_div.append(p2);
                new_div.append(move_div);
				
				$("#all_iphone_message").append(new_div);

			}
			
			//刚开始时，给一个小图片加边框
//			var small_length = $("#all_iphone_list_right #all_iphone_message .new_div_1 .small_ul li").size();
//			$("#all_iphone_list_right #all_iphone_message .new_div_1 .small_ul li").eq(small_length - 1).addClass("change_border");
			
			//鼠标移入
		    $("#all_iphone_message .new_div_1").hover(function(){
		    	
		    	var self = this;
		    	
//		    	$(this).css({"position":"relative"});
		    	
		    	
		    	//鼠标移入，改变定位的权重
		    	$(this).css("z-index","3");
		    	
		    	var index_ = $(this).index();
//				console.log("d55");
				$(this).css("height","408px");
//				$("#all_iphone_list_right #all_iphone_message .new_div_1").eq(index_).css("height","408px");
//				$("#all_iphone_list_right #all_iphone_message .new_div_1 .move_div").css("height","224px");
				$(this).find(".move_div").css("height","224px");
				
//				$("#all_iphone_list_right #all_iphone_message .new_div_1").css("border","4px solid #d93600");
				$(this).css("border","4px solid #d93600");
				
				
//				$("#all_iphone_list_right #all_iphone_message .new_div_1 .move_div").append($(".new_div_"));
				$(this).find(".move_div").append($(".new_div_"));
//				$(".new_div_").css("display","block");
				$(this).find(".move_div").find(".new_div_").css("display","block");
//				$("#all_iphone_list_right #all_iphone_message .new_div_1").css("position","relative");
			
				
//				$("#all_iphone_list_right #all_iphone_message .new_div_1 .move_div").css({"position":"absolute","left":"0px","top":"230px"});
				$(this).find(".move_div").css({"position":"absolute","left":"0px","top":"230px"});
//				$(this).find(".move_div").css("z-index","4");
//				$("#all_iphone_list_right #all_iphone_message .new_div_1 .move_div").animate({"top":"184px"},500);
				$(this).find(".move_div").stop().animate({"top":"184px"},500);
				
				//加入购物车
//				$("#all_iphone_message .new_div_1 .new_div_ h1").click(function(){
//				       var goodsId = 5;
//		 				var goodsImg = $(this).parent().parent().parent().find(".move_div ul li img").eq(0).attr("src");
//		 				console.log(goodsImg);           
//				});
						
				
				
				//鼠标移入小图标时，触发大图变化
				$(this).find(".small_ul li").hover(function(){
						var index = $(this).index();
						$(this).siblings().removeClass("change_border");
						$(this).addClass("change_border");
						
						
						$(self).find(".ul_big li").eq(index).siblings().hide();
						$(self).find(".ul_big li").eq(index).show();
						
						
						
						
					},function(){
					
				})
				
				
//				$("#all_iphone_message .new_div_ h1 a").click(function(){
//		          
//					
//					
//	            })	
				

			},function(){
				$(this).find(".move_div").stop().animate({"top":"230px"},500);
				$(this).find(".move_div").css("height","108px");
				$(this).css("height","335px");
				$(this).css("border","4px solid #f0f0f0");
//				$("#all_iphone_list_right #all_iphone_message .new_div_1 .move_div").animate({"top":"230px"},500);
//				$("#all_iphone_list_right #all_iphone_message .new_div_1 .move_div").css("height","108px");
//				$("#all_iphone_list_right #all_iphone_message .new_div_1").css("height","335px");
//				$("#all_iphone_list_right #all_iphone_message .new_div_1").css("border","4px solid #f0f0f0");

				//鼠标移除，定位权重变回原来的值
				$(this).css("z-index","1");
			});
			
			//鼠标移入小图标时，触发大图变化
//			$("#all_iphone_list_right #all_iphone_message .new_div_1 .small_ul li").hover(function(){
//				var index = $(this).index();
//				$(this).siblings().removeClass("change_border");
//				$(this).addClass("change_border");
//				
//				
//				$("#all_iphone_list_right #all_iphone_message .new_div_1 .ul_big li").eq(index).siblings().hide();
//				$("#all_iphone_list_right #all_iphone_message .new_div_1 .ul_big li").eq(index).show();
//			},function(){
//				
//			})

			
			
		}
	});
	
	
	
	//分类筛选
	
		$("#all_iphone_list_left_1 .filter_box h2 b").click(function(){
			if($("#all_iphone_list_left_1 .filter_box h2 b").html() == "+"){
//				console.log("d");
                $("#all_iphone_list_left_1 .filter_box .filter_sort").slideDown();
//				$("#all_iphone_list_left_1 .filter_box").animate({"height":"198px"},500);
				$("#all_iphone_list_left_1 .filter_box h2 b").html("-");
			}else{
				  $("#all_iphone_list_left_1 .filter_box .filter_sort").slideUp();
//				$("#all_iphone_list_left_1 .filter_box").animate({"height":"28px"},500);
				$("#all_iphone_list_left_1 .filter_box h2 b").html("+");
			}
	   	});
	
		//二级菜单触发
		$("#all_iphone_list_left_1 .filter_box .filter_sort .filter_sort_li b").click(function(){
			if($(this).html() == "+"){
				$(this).siblings(".filter_1").slideDown();
				$(this).html("-");
			}else{
				$(this).siblings(".filter_1").slideUp();
				$(this).html("+");
			}
			
			
		});
	
	//加入购物车
	
	
//		console.log("d");
//		var goodsId = 5;
//		var goodsImg = $(this).parent().parent().parent().find(".move_div ul li img").eq(0).attr("src");
//		console.lig(goodsImg);
		
		
//		var goodsId = 2;
//		var goodsImg = "../img/deli/deli1.jpg";
//		var shopHouse = "../img/cart/house.png";
//		var shop_ = "官方店铺";
//		var shopLogo1 = "../img/cart/logo.png";
//		var free_ = "免运费";
//		var free_if_ = "满49免运费";
//		var shopLogo = "../img/cart/logo2.png";
//		var goodsName = "得力（deli）7693-B5/60页螺旋装订本/记事本/软抄本 6本 7693";
//		var goodsPrice = "27.80";
//		var shop_total_ = "店铺合计：";
//		var count_goods = parseInt($("#deli_content_left .count b").html());
////		console.log(count_goods);
	
	
})
