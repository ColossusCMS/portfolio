$(function() {
	$("body").vegas({
		slides : [
			{ src : "images/bg-1.jpg"},
			{ src : "images/bg-2.jpg"}
		],
		delay : 7000,
		timer : false
	});
});

$(function(){
	$('#topBtn').on('click',function(e){
        e.preventDefault();
		$('html,body').animate({scrollTop:0},600);
	});
	
	$(window).scroll(function() {
		if ($(document).scrollTop() > 100) {
			$('#topBtn').addClass('show');
		} else {
			$('#topBtn').removeClass('show');
		}
	});
});

$(function() {
	$('#top_nav ul li').on('click', function (event) {
		event.preventDefault();
		var element = $(this).attr('class').split(" ")[0];
		var destination = $('#' + element).offset().top;
		$("html:not(:animated),body:not(:animated)").animate({
		  scrollTop: destination
		}, 500);
	});

	var height = $(window).height();

	var ranges = [
		[0, height],
		[height + 1, height * 2],
		[height * 2 + 195, height * 3 + 195],
		[height * 3 + 196, height * 4 + 196],
		[height * 4 + 196, 999999]
	];

	$(window).on('scroll', function () {
		var pos = $(window).scrollTop();
		$.each(ranges, function (i, range) {
			if (pos >= range[0] && pos <= range[1]) {
				setActive($("#top_nav ul li").eq(i)[0]);
				return;
			}
		});
	});
	function setActive(elem) {
		$(elem).siblings().find('a').removeClass('active');
		$(elem).find('a').addClass('active');
	}
});



$(function() {
	var size = 0;
	var lineWidth = 0;
	var width = $(document).width();
	if(width < 426) {
		size = 150;
		lineWidth = 20;
	}
	else if(width >= 426 && width < 769) {
		size = 200;
		lineWidth = 30;
	}
	else {
		size = 300;
		lineWidth = 30;
	}
	$('.chart').easyPieChart({
		barColor: '#00b4e6',
		trackColor: '#ccc',
		scaleColor: false,
		lineCap: 'butt',
		lineWidth: lineWidth,
		size: size,
		animate: 1000,
		onStart: $.noop,
		onStop: $.noop,
		onStep: function(from, to, percent) {
			$(this.el).find('.percent').text(Math.round(percent));
		}
	});
})