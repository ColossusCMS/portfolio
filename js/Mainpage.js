/*------------- Background -------------*/

$(function() {
	$("body").vegas({
		slides : [
//			{ src : "images/bg-1.jpg"},
			{ src : "images/bg-2.jpg"}
		],
		delay : 7000,
		timer : false
	});
});

/*------------- Navigation -------------*/

/*
$(document).ready(function() {
	$('ul.menu a').click(function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
});
*/
function setActive(elem) {
	$(elem).parent().parent().find('a').removeClass('active');
	$(elem).addClass('active');
}

var ranges = [
	[0, 400],
	[401, 1600],
	[1601, 2500],
	[2501, 3400],
	[3401, 4300],
	[4301, 4600],
	[4601, 9999999]
];

$('#nav_menu li a').on('click', function () {
	$(window).scrollTop(ranges[$(this).index()][0]);
	setActive(this);
});

$(window).on('scroll', function () {
	var pos = $(window).scrollTop();
	$.each(ranges, function (i, range) {
		if (pos >= range[0] && pos <= range[1]) {
			setActive($("#nav_menu li a").eq(i)[0]);
			return;
		}
	});
});

/*----------------- Focus -----------------*/
/*
$(document).ready(function() {
	$("#circle_color").hover(function() {
		if($(".outer_circle").attr("data-toggle") == "on") {
			$(".outer_circle").fadeIn(500);
			$(".outer_circle").attr("data-toggle", "off");
		} else {
			$(".outer_circle").fadeOut(500);
			$(".outer_circle").attr("data-toggle", "on");
		}
	});
});
*/

/*----------- Service ------------*/

$(document).ready(function() {
	$('#tokmon').hover(function() {
		$('.panel1').slideToggle("fast");
	});
	$('#wem').hover(function() {
		$('.panel2').slideToggle("fast");
	});
});