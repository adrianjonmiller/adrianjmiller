<?php
/**
 * The Template for displaying all single posts
 *
 * Please see /external/starkers-utilities.php for info on Starkers_Utilities::get_template_parts()
 *
 * @package 	WordPress
 * @subpackage 	Starkers
 * @since 		Starkers 4.0
 */
?>

<div class="grid">
	<div class="col-2-3">
		<article class="module">
			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
				<div class="project-gallery" data-behavior="imageloader"><?php the_content(); ?></div>
		</article>
	</div>
	<div class="col-1-3">
		<article class="module description">
			<h2 class="project-title"><?php the_title(); ?></h2>
			<?php the_excerpt(); ?> 
		</article>
		<aritcle class="module tags">
			<ul class="tags">
				<?php
				$posttags = get_the_tags();
				if ($posttags) {
				  foreach($posttags as $tag) {
				    echo '<li class="tag">'.$tag->name . '</li>'; 
				  }
				}
				?>
			</ul>
		</div>
	</div>
	<?php endwhile; ?>
</div>
<img id="ajaxloader" src="<?php echo get_stylesheet_directory_uri() ?>/img/ajax-loader.gif" />