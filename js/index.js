// 头部li切换
$(".header .nav li").click(function () {
    $(this).addClass("h-active").siblings().removeClass("h-active")
});
// 头部搜索
$(".header .search .search-img").toggle(
    function () {
        $(".search .show").addClass("search-show")
    },
    function () {
        $(".search .show").removeClass("search-show")
    }
);
// $(".header .search button").click(function () {
//     $(".search .show").removeClass("search-show")
// });
// 头部语言切换
$(".header .lang a").click(function () {
    $(this).addClass("l-active").siblings().removeClass("l-active")
});

// 汉堡按钮
$(".header .home .hamburger-btn .btn").click(
    function () {
        $(this).hide().siblings().show()
        $(".hamburger").slideToggle()
    }
);
// 汉堡页
$(".header .hamburger .ham  li .btn1").click(
    function () {
        $(this).hide().siblings().show()
        $(this).parent(".btn").parent(".ham-top").siblings().slideDown()
        $(this).parent(".btn").parent(".ham-top").parent("li").siblings().find(".ham-show").slideUp()
        $(this).parent(".btn").parent(".ham-top").parent("li").siblings().find(".btn2").hide().siblings().show()
    }
);
$(".header .hamburger .ham  li .btn2").click(
    function () {
        $(this).hide().siblings().show()
        $(this).parent(".btn").parent(".ham-top").siblings().slideUp()
    }
);

// 设置汉堡页li ham-show的高度
let hamSL = $(".header .hamburger .ham  li").length
// 初始一个a 的高度
let aHeight = 35;
for (let i = 0; i < hamSL; i++) {
    let aLength = $(".header .hamburger .ham  li").eq(i).find("a").length - 1;
    $(".header .hamburger .ham  li").eq(i).find(".ham-show").css("height", `${aHeight * aLength}px`)
    if (aLength == 0) {
        $(".header .hamburger .ham  li").eq(i).find(".btn").css("display", "none")
    }
}

// 火箭置顶
$(function () {
    var e = $("#rocket-to-top"),
        t = $(document).scrollTop(),
        n,
        r,
        i = !0;
    $(window).scroll(function () {
        var t = $(document).scrollTop();
        t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1,
            $(".level-2").css("opacity", 1), e.delay(100).animate({
                marginTop: "-1000px"
            },
                "normal",
                function () {
                    e.css({
                        "margin-top": "-125px",
                        display: "none"
                    }),
                        i = !0
                })) : e.fadeIn("slow")
    }),
        e.hover(function () {
            $(".level-2").stop(!0).animate({
                opacity: 1
            })
        },
            function () {
                $(".level-2").stop(!0).animate({
                    opacity: 0
                })
            }),
        $(".level-3").click(function () {
            function t() {
                var t = e.css("background-position");
                if (e.css("display") == "none" || i == 0) {
                    clearInterval(n),
                        e.css("background-position", "0px 0px");
                    return
                }
                switch (t) {
                    case "0px 0px":
                        e.css("background-position", "-298px 0px");
                        break;
                    case "-298px 0px":
                        e.css("background-position", "-447px 0px");
                        break;
                    case "-447px 0px":
                        e.css("background-position", "-596px 0px");
                        break;
                    case "-596px 0px":
                        e.css("background-position", "-745px 0px");
                        break;
                    case "-745px 0px":
                        e.css("background-position", "-298px 0px");
                }
            }
            if (!i) return;
            n = setInterval(t, 50),
                $("html,body").animate({
                    scrollTop: 0
                }, "slow");
        });
});
