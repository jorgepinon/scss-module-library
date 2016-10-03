/*///////////////////////////////
// Drawer
///////////////////////////////*/

(function () {
	'use strict';

	var dwrs = $('.drawer');

	dwrs.each( function () {

		var dwr = $(this),
			toggler = dwr.find('.drawer-hd');

		toggler.on('click', function (e) {
			e.preventDefault();
			toggleDrawer(dwr);
		});
	});

	function toggleDrawer(dwr) {
		var bd = dwr.find('.drawer-bd');
		if (bd.is(':visible')) {
			bd.fadeTo(200, 0.00, function () {
				bd.slideUp(200, function(){
					dwr.toggleClass('is-drawer-closed').toggleClass('is-drawer-open').attr('aria-expanded','false');
				});
			});
		} else {
			bd.slideDown(200, function () {
				bd.fadeTo(200, 1.00, function() {
					dwr.toggleClass('is-drawer-closed').toggleClass('is-drawer-open').attr('aria-expanded','true');
				});
			});
		}
	}

})();