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

<?php if ( have_posts() ): ?>
<div class="grid">
	<div class="col-2-3">
		<div class="gallery" data-behavior="animate_css">
		<?php while ( have_posts() ) : the_post(); ?>
			<div class="thumbnail">
				<article data-animation="fadeIn">
					<a href="<?php esc_url( the_permalink() ); ?>" title="Permalink to <?php the_title(); ?>" rel="bookmark" data-behavior="pageloader"><?php echo get_the_post_thumbnail(); ?></a>
				</article>
			</div>
		<?php endwhile; ?>
		</div>
		<?php else: ?>
		<h2>No posts to display</h2>	
		<?php endif; ?>
	</div>
	<div class="col-1-3">
	<?php
		$args = array( 'pagename' => 'design', 'order' => 'ASC');
		$loop = new WP_Query( $args );
		while ( $loop->have_posts() ) : $loop->the_post(); ?>
			<?php the_content(); ?>
		<?php endwhile; ?>		
	</div>
</div>

<button class="back-button ion-ios7-arrow-right" href="#" data-behavior="back"></button>