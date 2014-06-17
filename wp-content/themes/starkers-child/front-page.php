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



<div role="main" data-behavior="view">
		<?php
		$args = array( 'post_type' => 'page', 'order' => 'ASC', 'orderby' => 'menu_order' );
		$loop = new WP_Query( $args );
		while ( $loop->have_posts() ) : $loop->the_post();
		$url = $url.get_page_link().",";
		endwhile; ?>
	</div>
	<script type="text/javascript">
			var root = "<?php echo home_url(); ?>";
	</script>


<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer' ) ); ?>