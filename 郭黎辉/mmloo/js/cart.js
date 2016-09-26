$(function(){
	var cart = $.cookie("cart");
	
	if(cart){
	
		var goodsArr = JSON.parse(cart);
		var all_money = 0;
	
		for(var i = 0; i < goodsArr.length; i++){
			
			//保存id
	//		var goods_id = goodsArr[i].id;
		
			
			var store_div = $("<div></div>");
			store_div.addClass("store");
			
			var store_div1 = $("<div></div>");
			store_div1.addClass("div1");
			var store_div1_img1 = $("<img/>");
			store_div1_img1.attr("src",goodsArr[i].house);
			
			store_div1_img1.addClass("img1");
			var store_div1_span = $("<span></span>");
			var store_div1_span_a = $("<a href = '#'></a>");
			store_div1_span_a.html(goodsArr[i].shop);
			var store_div1_img2 = $("<img/>");
			store_div1_img2.attr("src",goodsArr[i].shoplogo1);
			store_div1_img2.addClass("img2");
			store_div1.append(store_div1_img1);
			store_div1_span.append(store_div1_span_a);
			store_div1.append(store_div1_span);
			store_div1.append(store_div1_img2);
			store_div.append(store_div1);
			
	//		store_div1.addClass("div1");
	//		store_div1_img1.addClass("img1");
	//		store_div1_img2.addClass("img2");
			
			var store_div2 = $("<div></div>");
			store_div2.addClass("div2");
			var store_div2_b = $("<b></b>");
			var store_div2_b_img = $("<img/>");
			store_div2_b_img.attr("src",goodsArr[i].shoplogo);
			var store_div2_span = $("<span></span>");
			store_div2_span.html(goodsArr[i].free_if);
			store_div2.append(store_div2_b);
			store_div2_b.append(store_div2_b_img);
			store_div2_b.html(goodsArr[i].free);
			store_div2.append(store_div2_span);
			store_div.append(store_div2);
			
			$("#goods_list").append(store_div);
			
			var ul = $("<ul></ul>");
			
			var li1 = $("<li></li>");
			li1.addClass("active1");
			var input1 = $("<input type='checkbox'/>");
			input1.attr("checked","checked");
			var a1 = $("<a href = '#'></a>");
			var img = $("<img />");
			img.attr("src",goodsArr[i].img);
			a1.append(img);
			li1.append(input1);
			li1.append(a1);
			ul.append(li1);
			
			var li2 = $("<li></li>");
			li2.addClass("active2");
			var a2 = $("<a href = '#'></a>");
			a2.append(goodsArr[i].name);
			li2.append(a2);
			ul.append(li2);
			
			var li3 = $("<li></li>");
			li3.addClass("active3");
			li3.append("￥"+goodsArr[i].price);
			ul.append(li3);
			
			var li4 = $("<li></li>");
			li4.addClass("active4");
			var span1 = $("<span>-</span>");
			span1.addClass("left_right_span");
			//再给一个类，区分加和减按钮
			span1.addClass("sub_button");
			var span2 = $("<span></span>");
			span2.addClass("middle_span");
			//再给一个类，区分加和减按钮
			
			span2.append(goodsArr[i].num);
			var span3 = $("<span>+</span>");
			span3.addClass("add_button");
			span3.addClass("left_right_span");
			li4.append(span1);
			li4.append(span2);
			li4.append(span3);
			ul.append(li4);
			
			var li5 = $("<li></li>");
			li5.addClass("active5");
			li5.append("￥"+(parseFloat(goodsArr[i].num) * parseFloat(goodsArr[i].price)).toFixed(2));
			ul.append(li5);
			
			var li6 = $("<li></li>");
			li6.addClass("active6");
			var a3 = $("<a href = '#'>收藏</a>");
			var a4 = $("<a href = '#'>删除</a>");
			a4.addClass("remove_type");
			li6.append(a3);
			li6.append(a4);
			ul.append(li6); 
			
			$("#goods_list").append(ul);
			
			var total = $("<div></div>");
			total.addClass("total");
			var shop_total = $("<span></span>");
			shop_total.html(goodsArr[i].shop_total);
			var money = $("<span></span>");
			money.html(li5.html());
			shop_total.addClass("shop_total");
			money.addClass("money");
			total.append(shop_total);
			total.append(money);
			$("#goods_list").append(total);
			
			
			all_money = all_money + parseFloat(goodsArr[i].num) * parseFloat(goodsArr[i].price).toFixed(2);
		
		}
		
		$("#all_total .all_price").html(all_money.toFixed(2));
	}
	
	
	//删除购物车
	$("#goods_list li .remove_type").click(function(){
//		console.log($("#goods_list li .remove_type").length)
//		console.log($("#goods_list li .remove_type").index($(this)));
		
		var index = $("#goods_list li .remove_type").index($(this));
		
		
		
		
		//删除cookie里的该件商品
		goodsArr.splice(index,1);
		
		$.cookie("cart",JSON.stringify(goodsArr),{expires:7,path:"/"});
		
		
		//删除购物车时，改变总价钱
		var current_money = parseFloat($("#all_total .all_price").html());
		console.log(current_money);
//		console.log(index);
		console.log($("#goods_list .active5").eq(index).html());
		var sub_money = parseFloat($("#goods_list .active5").eq(index).html().slice(1));
//		var sub_money = parseFloat($("#goods_list .active5").eq(index).html());
		console.log(current_money - sub_money);
		current_money = (current_money) - (sub_money);
//		current_money = current_money.toFixed(2);
//		console.log(current_money);
		$("#all_total .all_price").html((current_money).toFixed(2));
		
		
		//获取点击要删除的商品的下标
		$(this).parent().parent().prev().remove();
		$(this).parent().parent().next().remove();
		$(this).parent().parent().remove();
		
	});
	
	 
	//增加和减少数量
	$(".sub_button").click(function(){
		

		
		var old_count = $(this).next().html();
		if(old_count > 1){
			$(this).next().html(--old_count);
			var price = $(this).parent().prev().html();
			var price =parseFloat(price.slice(1));
			$(this).parent().next().html((old_count * price).toFixed(2));
			$(this).parent().parent().next().find(".money").html((old_count * price).toFixed(2));
			
			//商品总价
			all_money = all_money - price;
			$("#all_total .all_price").html((all_money).toFixed(2));
		}	
	});
	
	$(".add_button").click(function(){
		
		
		
		var old_count = $(this).prev().html();
			$(this).prev().html(++old_count);
			var price = $(this).parent().prev().html();
			var price =parseFloat(price.slice(1));
			$(this).parent().next().html((old_count * price).toFixed(2));
			$(this).parent().parent().next().find(".money").html((old_count * price).toFixed(2));
			
			//商品总价
			all_money = all_money + price;
			$("#all_total .all_price").html((all_money).toFixed(2));
	});
	
	
	//判断有没有选中
	
	$(".active1 input").click(function(){
		var yes_no = $(this).prop("checked");
//		var input_index = $(this).index();

  		var before_money = parseFloat($(this).parent().parent().find(".active5").html().slice(1)).toFixed(2);
  		var  before_money = parseFloat(before_money);
  		console.log(typeof(before_money));
  		var old_money = parseFloat($("#all_total .all_price").html()).toFixed(2);
  		var old_money = parseFloat(old_money);
		if(!yes_no){
			
			
			$(this).parent().parent().next().find(".money").html("￥0");
			console.log(old_money - before_money);
			
			$("#all_total .all_price").html((old_money - before_money).toFixed(2));
		}else{
			var price = $(this).parent().parent().find(".active5").html();
			$("#all_total .all_price").html((old_money + before_money).toFixed(2));
			$(this).parent().parent().next().find(".money").html(price);
			console.log(old_money + before_money)
		}
		
		
	});
	//把总金额保存到cookie里
	var allMoney_ = $("#all_total .all_price").html();
	
	$.cookie("allMoney",allMoney_,{expires:7,path:"/"});
	
	//你可能想买
	$.ajax({
		type:"get",
		url:"../data/cart/cart.json",
		async:true,
		success:function(responseObj){
			for(var i = 0;i < responseObj.length; i++){
				
				
				
				
				var ul = $("<ul></ul>");
				ul.addClass("want_buy_goods_list");
				var li1 = $("<li></li>");
				li1.addClass("top_img");
				var a1 = $("<a href = '#'></a>");
				var img1 = $("<img/>");
				img1.attr("src",responseObj[i].src);
				a1.append(img1);
				li1.append(a1);
				ul.append(li1);
				
				var li2 = $("<li></li>");
				li2.addClass("txt_p");
				var a2 = $("<a href = '#'></a>");
				a2.html(responseObj[i].txt);
				li2.append(a2);
				ul.append(li2);
				
				var li3 = $("<li></li>");
				li3.addClass("txt_money");
				li3.html(responseObj[i].price);
				ul.append(li3);
				
				var li4 = $("<li></li>");
				li4.addClass("add_btn");
				var b = $("<b></b>");
				b.html("添加购物车");
				li4.append(b)
				ul.append(li4);
				
				//保存商品ID
				var goods_ID = responseObj[i].id;
				var div_id = $("<div></div>");
				div_id.append(goods_ID);
				div_id.addClass("src_id");
				ul.append(div_id);
				
				$(".want_buy_goods").append(ul);
				
			}
			
			//点击添加购物车
			$(".want_buy_goods .want_buy_goods_list .add_btn b").click(function(){
//				var index = $(this).index();
//				console.log(index);
				//获取图片ID
				var ID = $(this).parent().parent().find(".src_id").html();
//				console.log(ID);
				var goodsId = ID;
//				var goodsImg = responseObj[index].src;
				var goodsImg = $(this).parent().parent().find(".top_img").find("img").attr("src");
				var shopHouse = "../img/cart/house.png";
				var shop_ = "官方店铺";
				var shopLogo1 = "../img/cart/logo.png";
				var free_ = "免运费";
				var free_if_ = "满49免运费";
				var shopLogo = "../img/cart/logo2.png";
//				var goodsName = responseObj[index].txt;
				var goodsName = $(this).parent().parent().find(".txt_p").find("a").html();
//				var goodsPrice = responseObj[index].price.slice(1);
				var goodsPrice = $(this).parent().parent().find(".txt_money").html().slice(1);
				var shop_total_ = "店铺合计：";
				var count_goods = 1;
				
				var goodsArr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
				
				var isExist = false;
				for(var i = 0; i < goodsArr.length; i++){
					if(goodsId == goodsArr[i].id){
	//					goodsArr[i].num++;
						goodsArr[i].num ++;
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
				
			});
	
			
		}
		
	});
	
	
	
	
})
