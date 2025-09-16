<?php
// Enqueue parent and custom assets
add_action('wp_enqueue_scripts', function () {
  wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');

  // Google Fonts: EB Garamond (Roman serif) + Manrope
  wp_enqueue_style(
    'toni-fonts',
    'https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&family=Manrope:wght@400;600;700&display=swap',
    [],
    null
  );

  wp_enqueue_style('toni-custom', get_stylesheet_directory_uri() . '/assets/css/custom.css', [], '2.0.0');
  wp_enqueue_script('toni-scroll', get_stylesheet_directory_uri() . '/assets/js/scroll-effects.js', [], '2.0.0', true);
});

add_action('after_setup_theme', function () {
  add_theme_support('editor-styles');
  add_theme_support('wp-block-styles');
});

// Register patterns from /patterns automatically (WP scans, but ensure text domain)
