var i =0;
$items = $('[data-animation]');

function animate(item) {
	viewCheck(item);
	$($items.get(item)).one('inview', function(e, inView){
		$this = $(this);
		var animation = $(this).attr('data-animation');
		if(animation == 'break') {
			i = item+1;
		} else {
			$this.addClass('animated ' + animation);
			$this.css('visibility', 'visible');
			DLN.LoadBehavior($this);
			$this.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){ 
				if(item <= $items.length) {
					item++;
					animate(item);
				}
			});
		}
	});
}

function viewCheck(item) {
	$current = $($items.get(item));
	$next = $($items.get(item++));
	$current.show();
	$next.show();
	if(item <= $items.length) {
		if($next.offset().top+$next.height() > $(window).height()+$(window).scrollTop()) {
			$('html, body').animate({
				scrollTop: $next.offset().top - 30
			});
		}
	}
}

DLN.Behaviors.flexslider = function(container){
	container.flexslider({
		animation: "slide",
    animationLoop: false,
    itemWidth: 500,
    itemMargin: 5,
    slideshow: true,
    slideshowSpeed: 3000,
    animationLoop: true
	});
}

DLN.Behaviors.page_size = function(container) {
	container.css('min-height', $(window).height());
	$(window).resize(function () {
		container.css('min-height', $(this).height());
	});
}

DLN.Behaviors.stellar = function(container) {
	container.stellar();
}

DLN.Behaviors.animate = function(container) {
	$items.hide();
	$items.css('visibility', 'hidden');
	$(document).ready(function(){
		animate(i);
	});
}

DLN.Behaviors.app = function(container) {
	container.keydown(function(e){
		switch(e.which) {
        case 37: // left
        break;

        case 38: // up
        break;

        case 39: // right
        break;

        case 40: // down
        animate(i)
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
	});
}

DLN.Behaviors.next = function(container) {
	container.on('click', function(){
		animate(i);
	});
}

DLN.Behaviors.masonry = function(container) {
	container.masonry({
		itemSelector: '.item'
	});
}

DLN.Behaviors.flowtype = function(container) {
	container.flowtype({
		minimum   : 500,
		maximum   : 1200,
		minFont   : 12,
		maxFont   : 80,
		fontRatio : 30
	});
}