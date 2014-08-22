DLN.Behaviors.pageloader = function(container) {
	container.pageloader();
}

DLN.Behaviors.back = function(container) {
	container.on('click', function(e) {
		e.preventDefault();
		$('[role="main"]').removeClass(function(){
			return $(this).attr('class');
		});

		window.history.pushState("object or string", "Title", '/');
		$('[data-behavior="pageName"]').fadeOut(function(){
			$('[data-behavior="pageName"]').html('');
		});;

	});
}

DLN.Behaviors.view = function(container) {
	container.view({
		root: root,
		pages: ['home', 'design', 'code']
	});
}

DLN.Behaviors.animate_css = function(container) {
	container.cssAnimate();
}


DLN.Behaviors.design = function(container) {
	container.view({
		urls: design_projects
	});
	console.log(design_projects);
}

DLN.Behaviors.close = function(container) {
	container.on('click', function(e){
		e.preventDefault();
		$(e.target).parent("#loader").remove();
	});
}

// DLN.Behaviors.design = function(container) {
// 	container.on('click', function(e) {
//     e.preventDefault();
// 		// $('[role="main"]').removeClass('code');
// 		// $('[role="main"]').addClass('design');
// 	});
// }

DLN.Behaviors.pageSlider = function(container) {
	container.on('click', function(e) {
    e.preventDefault();
    var target = $(e.target).attr("href");
		var slug = [];
    slug = target.split('/');
    var target_id = slug[slug.length-2];
		$('[role="main"]').removeClass('design code');
		$('[role="main"]').addClass(target_id);
		window.history.pushState("object or string", "Title", "#/"+target_id);
		$('[data-behavior="pageName"]').hide();
		$('[data-behavior="pageName"]').html(target_id).fadeIn();
	});
}

DLN.Behaviors.pagesize = function(container) {
	// container.pagesize();
	// $(window).resize(function(){
	// 	container.width(container.data('pagesize').windowWidth());
	// 	container.height(container.data('pagesize').windowHeight());
	// });
}

DLN.Behaviors.imageloader = function(container) {
	container.imageloader();
}


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

						