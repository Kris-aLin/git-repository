

function loadHtml(url, targetId) {
	$.ajax({
			url: url,
			dataType: "html",
			async: false,
			success: function(msg) {
				$("#"+targetId).html(msg);
		}
	})
}

$(function(){
	$("#header #right .right_ul .right_ul_li").hover(function(){
		$(this).find(".right_list1").css("display","block");
	},function(){
		$(this).find(".right_list1").css("display","none");
	});
})
