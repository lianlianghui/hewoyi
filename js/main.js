(function () {

    $(window).resize(function () {
        var W=$(window).width();
        if(W<=640) //手机
        {
            $(".banner-img-1").attr("src","images/banner-640-01.jpg");
            $(".banner-img-2").attr("src","images/banner-640-02.jpg");
        }
        else //电脑
        {
            $(".banner-img-1").attr("src","images/banner-2000-01.jpg");
            $(".banner-img-2").attr("src","images/banner-2000-02.jpg");
        }
    })



    $(window).scroll(function(){
        var H =$(document).scrollTop();

        /*固顶导航条*/
        if (H >= 450)
        {
            $(".header .navbar").addClass("fixed-top");
        }
        else
        {
            $(".header .navbar").removeClass("fixed-top");
        }

        $(".header .navbar > .container .navbar-nav li").eq(0).on("click",function () {
            $("html,body").stop().animate({
                scrollTop:0
            })
        });
        $(".header .navbar > .container .navbar-nav li").eq(1).on("click",function () {
            $("html,body").stop().animate({
                scrollTop:$(".page01 .container .title").offset().top- 100+"px"
            })
        });
        $(".header .navbar > .container .navbar-nav li").eq(2).on("click",function () {
            $("html,body").stop().animate({
                scrollTop:$(".page02 .container .title").offset().top- 100+"px"
            })
        });
        $(".header .navbar > .container .navbar-nav li").eq(3).on("click",function () {
            $("html,body").stop().animate({
                scrollTop:$(".page03 .container .title").offset().top- 100+"px"
            })
        });
        $(".header .navbar > .container .navbar-nav li").eq(4).on("click",function () {
            $("html,body").stop().animate({
                scrollTop:$(".page05 .container .title").offset().top- 100+"px"
            })
        });




        if(H >= $(".page05 .container .title").offset().top - 120)
        {
            $(".header .navbar > .container .navbar-nav li").eq(4).addClass("active").siblings().removeClass("active");
        }
        else if(H >= $(".page03 .container .title").offset().top - 120)
        {
            $(".header .navbar > .container .navbar-nav li").eq(3).addClass("active").siblings().removeClass("active");
        }
        else if(H >= $(".page02 .container .title").offset().top - 120)
        {
            $(".header .navbar > .container .navbar-nav li").eq(2).addClass("active").siblings().removeClass("active");
        }
        else if(H >= $(".page01 .container .title").offset().top - 120)
        {
            $(".header .navbar > .container .navbar-nav li").eq(1).addClass("active").siblings().removeClass("active");
        }
        else if(H >= 0)
        {
            $(".header .navbar > .container .navbar-nav li").eq(0).addClass("active").siblings().removeClass("active");
        }

    });









    /*$('carousel').carousel({
        interval:1000
    })*/

    //轮播
    //.carousel('prev')
    //按下鼠标  获取 var startX=clientX
    //移动鼠标  获取 var startM=clientX
    //松开鼠标 判断方向  if(startM > startX) {上一张}   else {下一张}

    var startX = 0;
    var startM = 0;
    var startEnd = 100;
    $(".carousel").on("touchstart",function (ev) {
        startX = ev.originalEvent.touches[0].clientX
        startM = ev.originalEvent.touches[0].clientX
    });
    $(".carousel").on("touchmove",function (ev) {
        startM = ev.originalEvent.touches[0].clientX
    });
    $(".carousel").on("touchend",function () {
       // console.log(startM > startX ? "<" : ">")
        if(Math.abs(startM - startX) >= startEnd) //不是只滑动了一点点
        {
            if(startM == startX) //点击后马上松开
            {
                return false;
            }
            //执行下一张
            $(".carousel").carousel(startM > startX ? "prev" : "next")

        }
    })



    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        mobile: true,
        live: true
    });
    wow.init();

})();
