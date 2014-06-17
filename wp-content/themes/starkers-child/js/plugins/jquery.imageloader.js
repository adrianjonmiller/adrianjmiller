(function($) {

    $.imageloader = function(element, options) {

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
            // code goes here'
            $element.find('img').each(function(){
                // console.log($(this).attr("src"));
                var $this = $(this);
                $this.hide();

                var tmpImg = new Image();
                tmpImg.src=$(this).attr('src'); //or  document.images[i].src;
                $(tmpImg).on('load',function(){
                  orgWidth = tmpImg.width;
                  orgHeight = tmpImg.height;
                  $this.css('max-width', orgWidth);
                  $this.css('max-height', orgHeight);
                });

                $this.on('load', function(){
                  $this.fadeIn();
                  $('#ajaxloader').hide();
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

    $.fn.imageloader = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('imageloader')) {
                var plugin = new $.imageloader(this, options);
                $(this).data('imageloader', plugin);
            }
        });

    }

})(jQuery);