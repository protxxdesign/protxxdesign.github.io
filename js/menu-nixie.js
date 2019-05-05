jQuery(document).ready(function(e) {
	/* For Sticky Header */
	jQuery("header").before(jQuery("header").clone().addClass("animateIt"));
	jQuery(window).on("scroll", function () {
    	jQuery("body").toggleClass("down", (jQuery(window).scrollTop() > 160));
	});
	/* For Sticky Header */
	/* Hide mobile menu after click starts */
	jQuery('body').on('click','.pushmenu-open #top-menu li a', function(event){
		jQuery('#nav_list.active').trigger('click');
	});
	/* Hide mobile menu after click ends */
	/* For Smooth SCroll */
	jQuery('header li a[href^=#], .ftr_menu a[href^=#]').on('click', function(event){
		event.preventDefault();
		jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top}, 500);
	});
	/* For Smooth SCroll */
	/* For One Page Menu Active */

// Cache selectors
    var topMenu = jQuery(".animateIt #top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = jQuery(this.hash);
      if (item.length) { return item; }
    });

topMenu.find('li.menu-item-home a').click(function(){
    jQuery('html,body').animate({scrollTop: '0px'}, 500);
    return !1;
});

// Bind to scroll
jQuery(window).scroll(function(){
   // Get container scroll position
   var winTop = jQuery(this).scrollTop(), fromTop = winTop+topMenuHeight;
	
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if (jQuery(this).offset().top < (fromTop + 70))
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
    
   menuItems.parent().removeClass("active current-menu-item").end().filter("[href='#"+id+"']").parent().addClass("active");
   topMenu.find('li.menu-item-home').toggleClass('active', id=='');
});
/* For One Page Menu Active */
});// JavaScript Document