$(function(){
	var k = 0;
	
	//鼠标移入图片区域时，向左和向右箭头出现
	$("#deli_box").hover(function(){
		$("#deli_box #deli_img span").css("display","block");
	},function(){
		$("#deli_box #deli_img span").css("display","none");
	})
	
    $("#small_img li").eq(0).addClass("active");
	$("#deli_box #deli_img .right").click(function(){
		k++;
	    move();
	    $("#small_img li").removeClass("active");
	    $("#small_img li").eq(k).addClass("active");
	   
	});
	
	$("#deli_box #deli_img .left").click(function(){
		k--;
		
	    move(); 
	    $("#small_img li").removeClass("active");
	    $("#small_img li").eq(k).addClass("active");
	});
	
	function move(){
		if(k == 5){
			k = 0;
		}
		if( k == -1){
			k = 4;
		}
		$("#deli_box #deli_img li").stop().hide();
		$("#deli_box #deli_img li").eq(k).stop().fadeIn();
	};
	
	$("#small_img li").hover(function(){
		 k = $(this).index();
		 move();
		 $("#small_img li").removeClass("active");
		 $(this).addClass("active");
		
	},function(){
		
	});
	
	
	//全国
	
	$("#deli_content_left .p3 span").hover(function(){
		  $("#nation").css("display","block");
	   },function(){
		  $("#nation").css("display","none");
		
		
	});
	
	$("#nation").hover(function(){
				$("#nation").css("display","block");
	    },function(){
				$("#nation").css("display","none");
	});
	
	
	//列表
	
//	$("#nav_header #all_nav").hover(function(){
//		console.log("ss");
//		$("#all_list").css("display","block");
//	},function(){
//		
//	});
	
	$("#big_box #all_list li").hover(function(){
		var h = $(this).index();
	
		$("#big_box .list").eq(h).css("display","block");
	},function(){
		var h = $(this).index();
		$("#big_box .list").eq(h).css("display","none");
	});
	
	$("#big_box .list li").hover(function(){
		var h = $(this).index();
	
		$("#big_box .list").eq(h).css("display","block");
	},function(){
		var h = $(this).index();
		$("#big_box .list").eq(h).css("display","none");
	});
	
	
	
	//添加到购物车
	$(".btn_3 .li2").click(function(){
		
		var goodsId = 6;
		var goodsImg = "../img/deli/deli1.jpg";
		var shopHouse = "../img/cart/house.png";
		var shop_ = "官方店铺";
		var shopLogo1 = "../img/cart/logo.png";
		var free_ = "免运费";
		var free_if_ = "满49免运费";
		var shopLogo = "../img/cart/logo2.png";
		var goodsName = "得力（deli）7693-B5/60页螺旋装订本/记事本/软抄本 6本 7693";
		var goodsPrice = "27.80";
		var shop_total_ = "店铺合计：";
		var count_goods = parseInt($("#deli_content_left .count b").html());
//		console.log(count_goods);
		
		
		var goodsArr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
		
		var isExist = false;
		for(var i = 0; i < goodsArr.length; i++){
			if(goodsId == goodsArr[i].id){
//				goodsArr[i].num++;
				goodsArr[i].num += count_goods;
				isExist = true;
			}
		}
		
		if(!isExist){
			var goodsObj = {
				id:goodsId,
				name:goodsName,
				price:goodsPrice,
				img:goodsImg,
				house:shopHouse,
				shop:shop_,
				shoplogo1:shopLogo1,
				free:free_,
				free_if:free_if_,
				shoplogo:shopLogo,
				shop_total:shop_total_,
				num:count_goods
			}
			goodsArr.push(goodsObj);
		}
		
		$.cookie("cart",JSON.stringify(goodsArr),{expires:7,path:"/"});
		
		
		//点击添加到购物车时，弹出的提示框
		$("#add_success").fadeIn();
		
		$("#add_success .add_success_p3_left").click(function(){
			window.location.href = "cart.html";
		});
		
		$("#add_success .add_success_p3_right").click(function(){
			$("#add_success").fadeOut();
		});
		
		
		
		//当前的价钱
		var now_moneys = (parseFloat(goodsPrice) * parseFloat(count_goods)).toFixed(2);
//		console.log(now_moneys);
		now_moneys = parseFloat(now_moneys);
		
		//获取cookie里的商品种类数量
		var goods_counts_arr =JSON.parse($.cookie("cart"));
		var goods_type = goods_counts_arr.length;
		$(".add_success_p2 span").html(goods_type);
		//获取购物车里的总金额
		var allmoneys = $.cookie("allMoney");
//		$.cookie("allMoney","",{expires:0, path:"/"});
		console.log(allmoneys);
		var all_money = (parseFloat(allmoneys) + now_moneys).toFixed(2)
		$(".add_success_p2 b").html(all_money);
		
		
	});
	
//马上开抢
	$.ajax({
		type:"get",
		url:"../data/deli/deli.json",
		async:true,
		success:function(responseObj){
			for(var i = 0;i < responseObj.length; i++){
				var li = $("<li></li>");
				var img = $("<img/>");
				var a = $("<a href = '#'></a>");
				a.append(img)
				img.attr("src",responseObj[i].src);
				li.append(a);
				var div1 = $("<div></div>");
				div1.addClass("div1");
				var p = $("<p></p>");
				p.html(responseObj[i].content);
				var h1 = $("<h1></h1>");
				
				var span1 = $("<span></span>");
				span1.html("特价:");
				span1.addClass("span1");
				var span2 = $("<span></span>");
				span2.html(responseObj[i].money);
				span2.addClass("span2");
				h1.append(span1);
				h1.append(span2);
				var div2 = $("<div></div>");
				div2.addClass("div2");
				div2.html("马上开抢");
				div1.append(p);
				div1.append(h1);
				div1.append(div2);
				li.append(div1);
				$(".right_away_list").append(li);
				
			}
		}
	});
	
	
	
	//吸顶效果：商品详情，商品咨询。。。
	
	var _top = $("#goods_introduce_right .goods_introduce_right_nav").offset().top;
	
	$(window).scroll(function(){
		var _scrollTop = $(window).scrollTop();
		
		if(_scrollTop >= _top){
			$("#goods_introduce_right .goods_introduce_right_nav").css({position:"fixed",top:0});
			$("#red_").css("display","block");
		}
		else{
			$("#goods_introduce_right .goods_introduce_right_nav").css({position:"static"});
			$("#red_").css("display","none");
		}
	});
	
	
	//点击加和减
	$("#deli_content_left .count ul .add").click(function(){
		var old_value = $("#deli_content_left .count b").html();
		$("#deli_content_left .count b").html(++old_value);
//		console.log($("#deli_content_left .count b").html());
	});
	$("#deli_content_left .count ul .sub").click(function(){
		
		var old_value = $("#deli_content_left .count b").html();
		if(old_value > 1){
			$("#deli_content_left .count b").html(--old_value);
//		    console.log($("#deli_content_left .count b").html());
		}
		
	});
	
	
	//鼠标移入商品详情，参数。。。触发的动作
	$(".goods_introduce_right_nav li").hover(function(){
		var index = $(this).index();
		$(".big_box_div").eq(index).css("display","block");
		
		$(this).addClass("li_active");
	},function(){
		var index = $(this).index();
		$(".big_box_div").eq(index).css("display","none");
		$(this).removeClass("li_active");
	});
	
	$(".big_box_div").hover(function(){
		
		var index = $(this).index();
		console.log(index);
		//为什么要减一
		$(".goods_introduce_right_nav li").eq(index-1).addClass("li_active");
		$(this).css("display","block");
	},function(){
		var index = $(this).index();
		$(".goods_introduce_right_nav li").eq(index-1).removeClass("li_active");
		$(this).css("display","none");
	});
	
	
	
	//点击图片，实现放大镜效果
	$("#deli_box #deli_img img").click(function(){
		$("#deli_box #deli_img").animate({"width":"1223px"},500);
		$("#deli_box #deli_img").animate({"height":"520px"},500);
		$("#deli_box #small_img").css({"z-index":"5"});
		$("#deli_box #small_img").animate({"top":"460px"},500);
		$("#deli_box #deli_img li").parent().animate({"width":"1223px"},500);
		$("#deli_box #deli_img").css("z-index","3");
		$("#deli_box #deli_img img").animate({"margin-left":"460px"},500);
		$("#deli_box #deli_img img").find("span").css("z-index","4");
		
		
		$("#deli_box #deli_img img").click(function(){
//			console.log($(this).parent().parent().parent().find(".fang_da").find("li").css("left"));
			var index = $("#deli_box #deli_img img").index($(this));
			console.log(index);
			$("#deli_box .fang_da li").eq(index).css({"left":"-300px","top":"-200px"});
//			$(this).parent().parent().parent().find(".fang_da").find("li").css({"left":"-300px","top":"-200px"});
			
//			$(this).parent().parent().parent().find(".fang_da").fadeIn();
			$("#deli_box .fang_da").fadeIn();
			$("#deli_box .fang_da li").eq(index).fadeIn();
			
		});
		
		//点击放大镜，让大图还原
		$("#deli_box .fang_da").click(function(){
			
			$(this).fadeOut();
			$(this).find("li").css({"left":"0px","top":"0px"});
		})
		
		
		
	});
	
	
	
//function(){
//		console.log("s");
//	})
	
	
});





