(function($) {

    $.cssAnimate = function(element, options) {

        var defaults = {
            items: '[data-animation]',
            i: 0
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            $(plugin.settings.items).css('visibility', 'hidden');

            plugin.animate(plugin.settings.i, plugin.settings.items);
        }

        plugin.foo_public_method = function() {
            // code goes here
        }

        plugin.animate = function(item, items) {
          $items = $(items);
          viewCheck(item, items);
          $($items.get(item)).one('inview', function(e, inView){
              $this = $(this);
              var animation = $this.attr('data-animation');
              if(animation == 'break') {
                  i = item+1;
              } else {
                  $this.addClass('animated ' + animation);
                  $this.css('visibility', 'visible');
                  $this.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){ 
                      if(item <= items.length) {
                          item++;
                          plugin.animate(item, items);
                      }
                  });
              }
          });
        }

        var viewCheck = function(item, items) {
          $items = $(items);
          $current = $($items.get(item));
          $next = $($items.get(item++));

          if(item <= $items.length) {
              if($next.offset().top + $next.height() > $(window).height()+$(window).scrollTop()) {
                  $('html, body').animate({
                      scrollTop: $next.offset().top - 30
                  });
                  
              }

          }

        }

        plugin.init();

    }

    $.fn.cssAnimate = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('cssAnimate')) {
                var plugin = new $.cssAnimate(this, options);
                $(this).data('cssAnimate', plugin);
            }
        });

    }

})(jQuery);


// var i =0;
// items = $('[data-animation]');

// function animate(item) {
//     viewCheck(item);
//     $(items.get(item)).one('inview', function(e, inView){
//         $this = $(this);
//         var animation = $(this).attr('data-animation');
//         if(animation == 'break') {
//             i = item+1;
//         } else {
//             $this.addClass('animated ' + animation);
//             $this.css('visibility', 'visible');
//             DLN.LoadBehavior($this);
//             $this.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){ 
//                 if(item <= items.length) {
//                     item++;
//                     animate(item);
//                 }
//             });
//         }
//     });
// }

// function viewCheck(item) {
//     $current = $(items.get(item));
//     $next = $(items.get(item++));
//     $current.show();
//     $next.show();
//     if(item <= items.length) {
//         if($next.offset().top+$next.height() > $(window).height()+$(window).scrollTop()) {
//             $('html, body').animate({
//                 scrollTop: $next.offset().top - 30
//             });
//         }
//     }
// }