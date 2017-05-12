$(function() {
	"use strict";
	
	var topoffset = 50; // variable for menu height
	
	//Activate Scrollspy
	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	});
	
	
	$('.carousel').carousel({		//$('#featured'). would work as well
	  interval: false
	});


});