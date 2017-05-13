$(function() {
	//"use strict";
	
	var topoffset = 50; // variable for menu height
	var slideqty = $('#featured .item').length;		//(carousel) finds the amount of .item classes
	
	//Activate Scrollspy
	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	});
	
	
	// finds and store the attribute of the anchor tag of the active class inside a li tag, in 'this' document
	var hash = $(this).find('li.active a').attr('href');
		
	if(hash !== '#featured') {
		$('header nav').addClass('inbody');
	} else {
		$('header nav').removeClass('inbody');
	}
	
	
	// Adds inbody class to nav when scrollspy event fires
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
		
		// finds and store the attribute of the anchor tag of the active class inside a li tag, in 'this' document
		var hash = $(this).find('li.active a').attr('href');
		
		if(hash !== '#featured') {
			$('header nav').addClass('inbody');
		} else {
			$('header nav').removeClass('inbody');
		}
		
	});
	
	
	//Use smooth scrolling when clicking on navigation
	$('.navbar a').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-topoffset+2
                }, 500);
                return false;
            } //target.length
        } //click function
    }); //smooth scrolling
	
	
	//Automatically generate carousel indicators
	for (var i=0; i<slideqty; i++) {
		var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
		$('#featured ol').append(insertText);
	}
	
	
	$('.carousel').carousel({		//$('#featured'). would work as well
	  interval: false
	});


});