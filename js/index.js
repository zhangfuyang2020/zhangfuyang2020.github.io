$(function () {
	//宽高自适应
	img('.autoimg');

	function img(e) {
		$(e).on('load', function () {
			var width = $(this)[0].naturalWidth
			var height = $(this)[0].naturalHeight
			if (width > height) {
				$(this).height('100%');
			} else {
				$(this).css("height", "auto");
				$(this).width('100%')
			}
		})
	}

	// 回到顶部
	$(window).scroll(function () {
		if ($(document).scrollTop() > 0) {
			$(".goToTop").fadeIn()
		} else {
			$(".goToTop").fadeOut()
		}
	})
	$("#top").click(function () {
		// 执行CSS属性集的自定义动画，即回到顶部
		$("body,html").animate({ scrollTop: 0 }, 1000)
	});

	// 头部li切换
	$(".header .nav li .nav-li").click(function () {
		$(this).addClass("h-active").parent("li").siblings().find(".nav-li").removeClass("h-active")
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

	// 头部语言切换
	$(".header .lang .lang1").click(function () {
		$(this).hide().next().show()
	})

	$(".header .lang .lang2 .lang-img1").click(function () {
		$(".header .lang .lang2").hide().prev().show()
	})

	$(".header .lang .lang2 .lang-img2").click(function () {
		$(".header .lang .CN").toggle()
		$(".header .lang .UA").toggle()
		$(".header .lang .lang2").hide().prev().show()
	})


	// 内页 左侧导航
	if ($(".main .box .l-list li.m-active:has(.list-show)").length == 0) {
		// 左侧列表没有子列表
		// console.log("左侧列表没有子列表");
	}
	else {
		$(".main .box .l-list li.m-active").addClass("li-active")
		$(".main .box .l-list li.m-active .list-top").click(function () {
			if ($(this).parent(".li-heart").parent("li").is(".li-active")) {
				$(".main .box .l-list li.m-active").removeClass("li-active")
			} else {
				$(".main .box .l-list li.m-active").addClass("li-active").siblings().removeClass("li-active")
			}
		})
	}
	// 左侧列表的个数
	let liLength = $(".main .box .l-list li").length
	for (let i = 0; i < liLength; i++) {
		// 判断当前有无 m-active 类名
		if (!$(".main .box .l-list li").eq(i).is(".m-active")) {
			$(".main .box .l-list li").eq(i).find(".list-top").click(function () {
				if ($(this).parent(".li-heart").parent("li:has(.list-show)").length == 0) {
					// 当前列表没有子列表
					// console.log("当前列表没有子列表");
				}else {
					// 判断当前有无 li-active 类名
					if ($(this).parent(".li-heart").parent("li").is(".li-active")) {
						$(this).parent(".li-heart").parent("li").removeClass("li-active")
					} else {
						$(this).parent(".li-heart").parent("li").addClass("li-active").siblings().removeClass("li-active")
					}
				}


			})
		}
	}
})
