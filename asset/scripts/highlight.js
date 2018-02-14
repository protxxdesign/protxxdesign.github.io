$(document).ready(function () {
	// . = class
	// # = id
	// command + / = comment
   	$('.icon').mouseover(function () {
   		var audio = $("#mouseSound")[0];
   		var that = $(this);

	    if (audio.paused) {
	        audio.play();
	    }else{
	        audio.currentTime = 0
	    }

	    that.attr('src', that.data('hover-on'));
   });

   $('.icon').mouseout(function () {
   		var that = $(this);
   		that.attr('src', that.data('hover-off'));
   });

   $('.icon').click(function () {
   		var audio = $('#clickSound')[0];
   		if (audio.paused) {
   			audio.play();
   		}else{
   			audio.currentTime = 0
   		}
   		var oldTheme = $('body').attr('class');	
   		var newTheme = $(this).data('theme');
   		$('body').removeClass(oldTheme);
   		$('body').addClass(newTheme);
   });
});