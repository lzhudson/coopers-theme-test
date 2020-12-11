<?php 

function _coopers_assets() {
  wp_enqueue_style( '_coopers-stylesheet', get_template_directory_uri() . '/dist/css/main.css', array(), '1.0.0', 'all' );
  wp_enqueue_script( '_coopers-scripts', get_template_directory_uri() . '/dist/js/bundle.js', array('jquery'), '1.0.0', true );
}
add_action('wp_enqueue_scripts', '_coopers_assets');


?>