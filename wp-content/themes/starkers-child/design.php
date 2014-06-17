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
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>

<?php wp_nav_menu(array(
  'container'=> 'nav',
  'menu_id' =>'main-menu',
  'menu_class' =>'menu',
  'theme_location' => 'primary',
  'items_wrap'      => '<ul id="%1$s" class="%2$s" data-behavior="">%3$s</ul>'
)); ?>

<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer' ) ); ?>


<?php
	$args = array( 'post_type' => 'page', 'order' => 'DES', 'orderby' => 'menu_order' );
	$loop = new WP_Query( $args );?>
	<?php while ( $loop->have_posts() ) : $loop->the_post();?>
	<div class="col-1-2 <?php the_slug(); ?>">
		<h2><button class="<?php the_slug(); ?>-button"><i class="ion-ios7-arrow-left"></i><?php the_title(); ?><i class="ion-ios7-arrow-right"></i></button></h2>
		<?php the_content(); ?>
	</div>
<?php endwhile; ?>