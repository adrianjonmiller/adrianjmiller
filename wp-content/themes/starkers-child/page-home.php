<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * Please see /external/starkers-utilities.php for info on Starkers_Utilities::get_template_parts()
 *
 * @package 	WordPress
 * @subpackage 	Starkers
 * @since 		Starkers 4.0
 */
?>
		<div class="grid">
			<?php wp_nav_menu(array(
			  'container'=> 'nav',
			  'menu_id' =>'main-menu',
			  'menu_class' =>'menu',
			  'theme_location' => 'primary',
			  'items_wrap'      => '<ul id="%1$s" class="%2$s" data-behavior="pageSlider">%3$s</ul>'
			)); ?>
			<div class="slash">/</div>
		</div> 				<!-- Grid 							-->
