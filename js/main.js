//Slide show
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

$(function () {
	$('#top_nav ul li').on("click", function (event) {
	  event.preventDefault();
	  var element = $(this).attr('class').split(" ")[0];
	  var destination = $('#' + element).offset().top;
	  $("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	  }, 500);
	});
  
	$(window).on("scroll", function () {
	  setActive($(this).scrollTop());
	});
});

$(function() {
	var height = $(window).height();
	var overlap = "full";
	if(overlap == "full") {
		overlap = height - 1;
	}
	var shown = Math.ceil((offTop - overlap) / height);
	var scrT = $(window).scrollTop();
	var scrH = $(document).height();
	var winH = $(window).height();
	var scrB = scrH - winH - scrT;
	if(scrB == 0) {
		$('#top_nav li').removeClass("active").eq(5).addClass("active");
	} else {
		$('#top_nav li').removeClass("active").eq(shown).addClass("active");
	}
})

function scrollFunction() {
	var width = screen.availWidth;
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("top_Btn").style.display = "block";
	} else {
		document.getElementById("top_Btn").style.display = "none";
	}
}

function topFunction() {
	var btnTop = $('#top_Btn');
    btnTop.on('click','a', function(e){
        e.preventDefault();
        $doc.stop()
		.animate({
			scrollTop : 0
		},800)
    });
}

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