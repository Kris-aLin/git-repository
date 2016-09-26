/**
 * Created by Administrator on 16-9-13.
 */
/*------top------*/
$(function(){
    var $app=$("#app");
    var $phone=$("#phone");
    $( $phone).on("mouseenter",function(){
        $(this).children("div").show();
    });
    $($phone).on("mouseleave",function(){
        $(this).children("div").hide();
    });
});


/*---------滑动导航---------*/
//$(function(){
//    $("#dong li").on("mouseenter",function(){
//        $("#banbox").show()
//    });
//    $("#banbox").on("mouseleave",function(){
//        $("#banbox").hide();
//    })
//});

$(function(){
    //var $div=$("#dong");
    //var $li=$div.children().eq(1);
    //var $d=$li.children("div")
    //console.log($d)
    $("#dong li").each(function(index){
        var $div=$("#dong");
        var $li=$div.children().eq(index);
        var $d=$li.children("div");
             $(this).on("mouseenter",function(){
                 $d.show();
             });
        $($d).on("mouseleave",function(){
            $d.hide()
        })
    })
})

/*-----滚动条--------*/
$(function(){
    var $nav=$(".nav").offset().top;
    console.log($nav);
    $(window).scroll(function(){
        var scrtop=$(document).scrollTop();//不开见高度
        if(scrtop>$nav){
            $(".nav").css("position","fixed").css("top",0);

        }else {
            $(".nav").css("position","static");

        }
    })
})

/*-------------轮播图---------------*/
$(function(){
    var len = $(".num > li").length;
    var index = 0;  //图片序号

})