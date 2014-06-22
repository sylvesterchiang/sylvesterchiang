// JavaScript Document

//Parallax
var toggle = $('#toggle');
var nav = $('nav');
$window = $(window);
$slide = $('.homeSlide');

adjustWindow();

$(toggle).click(function(){
	$(toggle).toggleClass("open");
	$(nav).toggleClass("open");
	//alert("shit");
});

$(window).scroll(function(e){    	
	parallax();
})

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', -(scrolled * 0.2) + 'px');
}

//Init Skrollr
function adjustWindow(){
	var s = skrollr.init();
	s.refresh($('.homeSlide'));
}

//window resize
function adjustWindow(){
		
		// Init Skrollr
		
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    
	    
}