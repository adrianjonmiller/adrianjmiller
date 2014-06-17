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

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
<h2 class="page-title"><?php the_title(); ?></h2>
	<?php the_content(); ?>
<?php endwhile; ?>

<button class="back-button ion-ios7-arrow-left" href="#" data-behavior="back"></button>