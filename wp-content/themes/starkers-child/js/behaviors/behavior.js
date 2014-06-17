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

						