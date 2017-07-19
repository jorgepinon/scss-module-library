import $ from 'jquery/dist/jquery.min.js';

import responsiveNav from 'responsive-nav/responsive-nav.min.js';

import Dropdown from './vendor/accessible_dropdown_menu.js';


$(document).ready(function() {

	/* responsiveNav itit */
	var nav = responsiveNav('#main-menu', {
		customToggle: "#main-menu-toggle"
 	});


	/* Dropdown init */
	var dropdowns = document.querySelectorAll('[data-directive=dropdown]');
	for (var i = 0, len = dropdowns.length; i < len; i++) {
		new Dropdown(dropdowns[i]);
	}


});
