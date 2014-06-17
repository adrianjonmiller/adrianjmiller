<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * Please see /external/starkers-utilities.php for info on Starkers_Utilities::get_template_parts() 
 *
 * @package 	WordPress
 * @subpackage 	Starkers
 * @since 		Starkers 4.0
 */
?>

test

<?php if ( have_posts() ): ?>
<div class="gallery">
<?php while ( have_posts() ) : the_post(); ?>
	<div class="thumbnail">
		<article>
			<a href="<?php esc_url( the_permalink() ); ?>" title="Permalink to <?php the_title(); ?>" rel="bookmark" data-behavior="pageloader">
				<?php the_title(); ?>
			</a>
		</article>
	</div>
<?php endwhile; ?>
</div>
<?php else: ?>
<h2>No posts to display</h2>	
<?php endif; ?>

<button class="back-button ion-ios7-arrow-left" href="#" data-behavior="back"></button>