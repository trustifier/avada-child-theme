<?php

if (!defined('ABSPATH')) die('Restricted Area');

/*
* Plugin Name: Disable Yoast SEO Notifications
* Description: Hide annoying notifications after each upgrade of Yoast SEO plugin and others admin notices.
* Version: 1.1
* Author: Aurélien Denis
* Author URI: http://wpchannel.com/
*/

add_action('admin_init', 'wpc_disable_yoast_notifications');

function wpc_disable_yoast_notifications() {
  if (is_plugin_active('wordpress-seo/wp-seo.php')) {
    remove_action('admin_notices', array(Yoast_Notification_Center::get(), 'display_notifications'));
    remove_action('all_admin_notices', array(Yoast_Notification_Center::get(), 'display_notifications'));
  }
}
