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
<h2 class="page-title"><?php the_title(); ?></h2><span><?php echo get_the_content(); ?></span>
<?php endwhile; ?>

	<div class="grid gallery" data-behavior="design">
		<?php
		$args = array( 'post_type' => 'design', 'order' => 'ASC');
		$loop = new WP_Query( $args );
		while ( $loop->have_posts() ) : $loop->the_post(); ?>
			<?php if (has_post_thumbnail()) { ?>
				<div class="thumbnail">
					<a href="<?php echo get_permalink(); ?>" data-behavior="pageloader">
					 <?php echo get_the_post_thumbnail(); ?> 
					</a>
				</div>
			<?php } ?>
		<?php endwhile; ?>
	</div>
<button class="back-button ion-ios7-arrow-left" href="#" data-behavior="back"></button>