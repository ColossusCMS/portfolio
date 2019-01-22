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

//Navigation bar click move
$(function() {
	$('#top_nav li, #bot_nav li').on("click", function(event) {
		event.preventDefault();
		var element = $(this).attr('class').split(" ")[0];
		var destination = $('#' + element).offset().top;
		$("html:not(:animated), body:not(:animated)").animate({
			scrollTop : destination
		}, 500);
	});
	
	$(window).on("scroll", function() {
		setActive($(this).scrollTop());
	});
});


//Navigation bar Active

function setActive(offTop) {
	var height = $(window).height();
	var overlap = 0;
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
}


