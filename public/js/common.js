$(function () {
    //加载fastclick插件
    FastClick.attach(document.body);
    $(".shade").css("height",$("section").height());
    /*导航鼠标滑过事件
    *
    * 判断窗口宽度是否执行鼠标滑过事件
    *
    */
    $(".nav-li").hover(function () {
        if($('body').width()>950){
            $(this).find(".tabs").addClass("show");
        }
    },function () {
        if($('body').width()>950){
            $(this).find(".tabs").removeClass("show");
        }
    });
    /*
    *
    * 导航点击事件
    *
    */
    $(".nav-li").click(function () {
        $(this).find(".tabs").toggleClass("show").parent().siblings().find(".tabs").removeClass("show");
    });
    /*
    *
    * 下拉菜单点击事件
    *
    */
    $(".tab").click(function () {
        $(".nav").toggleClass("show");
        $(".shade").toggleClass("show");
    });
    /*
    *
    * 点击其他收起下拉菜单
    *
    */
    $(".shade").click(function () {
        $(".nav").removeClass("show");
        $(this).removeClass("show");
    });
    // 首页菜单高度
    $('.h-n-a img').css({
        height:$('.h-n-a img').width()*0.75
    });
    $(window).resize(function(){
        $('.h-n-a img').css({
            height:$('.h-n-a img').width()*0.75
        });
    });
    // 搜索框
    $('.search button').click(function() {
        var v=$('.search input').val();
        if(v){
            window.location.href="/search/title="+v;
        }
    });

});
