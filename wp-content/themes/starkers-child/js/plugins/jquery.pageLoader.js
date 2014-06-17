// jQuery Plugin Boilerplate
// A boilerplate for jumpstarting jQuery plugins development
// version 1.1, May 14th, 2011
// by Stefan Gabos

(function($) {

    $.pageloader = function(element, options) {

        var defaults = {
            foo: 'bar',
            onFoo: function() {}
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;

        plugin.init = function() {
          plugin.settings = $.extend({}, defaults, options);
          // code goes here
          var link;
          var close = $('<button>').attr('data-behavior', 'close').attr('class', 'ion-ios7-close-empty close');

          $element.on('click', function(e){
            e.preventDefault();
            if($(e.target).attr('href')) {
              link = $(e.target).attr('href');
            } else {
              link = $(e.target).parent('a').attr('href');
            }
            $.ajax({
            url: link
            }).done(function( data ) {
              var loader = $('<div>').attr('id', 'loader');
              loader.append( data );
              loader.append( close );
              DLN.LoadBehavior(loader);
              $('[role="main"]').append(loader);
              $(loader).hide();
              $(loader).ready(function(){
                $(loader).fadeIn();
              });
            });
          });
        }

        plugin.foo_public_method = function() {
            // code goes here
        }

        var foo_private_method = function() {
            // code goes here
        }

        plugin.init();

    }

    $.fn.pageloader = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('pageloader')) {
                var plugin = new $.pageloader(this, options);
                $(this).data('pageloader', plugin);
            }
        });

    }

})(jQuery);
// Usage

// $(document).ready(function() {

//     // attach the plugin to an element
//     $('#element').pageloader({'foo': 'bar'});

//     // call a public method
//     $('#element').data('pageloader').foo_public_method();

//     // get the value of a property
//     $('#element').data('pageloader').settings.foo;

// });