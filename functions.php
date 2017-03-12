<?php

require_once('remove-yoast-seo-nag.php');

function theme_enqueue_styles() {
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'avada-stylesheet' ) );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );


function child_theme_js() {
    wp_enqueue_script( 'theme_js', get_stylesheet_directory_uri() . '/js/custom.js', array( 'jquery' ), '1.0', true );
}
add_action('wp_enqueue_scripts', 'child_theme_js');

function avada_lang_setup() {
	$lang = get_stylesheet_directory() . '/languages';
	load_child_theme_textdomain( 'Avada', $lang );
}

function add_footer_tag() {
	echo '<a id="footer-start-anchor" name="footer-start-anchor"></a>';
}



add_action( 'after_setup_theme', 'avada_lang_setup' );
add_action( 'avada_after_main_container', 'add_footer_tag');

// CATEGORY SINGLE TEMPLATES :: single-{category_slug}.php
add_filter( 'single_template',
    create_function( '$t', 'foreach( (array) get_the_category() as $cat ) {
	$single_cat_template = get_stylesheet_directory() . "/single-{$cat->slug}.php";
        if ( file_exists($single_cat_template) ) return $single_cat_template;
    } return $t;' ) );

