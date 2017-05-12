$(function() {
	"use strict";
	
	var topoffset = 50; // variable for menu height
	
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
	
	
	
	
	
	$('.carousel').carousel({		//$('#featured'). would work as well
	  interval: false
	});


});