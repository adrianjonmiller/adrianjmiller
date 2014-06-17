(function($) {

    $.pagesize = function(element, options) {

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
            $element.width(plugin.windowWidth());
            $element.height(plugin.windowHeight());
        }

        plugin.windowHeight = function() {
            return $(window).height();
        }

        plugin.windowWidth = function() {
            return $(window).width();
        }

        var foo_private_method = function() {
            // code goes here
        }

        plugin.init();

    }

    $.fn.pagesize = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('pagesize')) {
                var plugin = new $.pagesize(this, options);
                $(this).data('pagesize', plugin);
            }
        });

    }

})(jQuery);