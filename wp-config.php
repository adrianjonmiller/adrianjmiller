<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '(a<:4w1P+,~.uzt1+^_71u]::N0skvqkl>jr]q3l]X.^U]nEjR?3+@_Ri0C1c|VF');
define('SECURE_AUTH_KEY',  'BdT+%k,)@d-IEQ)+|3(a2r)]~5Z&~=o;3I1TK{nOIWTJPK+F;f@,?hhIsUEQ1$hk');
define('LOGGED_IN_KEY',    ')$l-h9ae|dyM?|RsMos9+!-,av|fF7M<5~;|Qf;V2qNpMzy_)H27-7w)%Vjn ~+(');
define('NONCE_KEY',        'UYJ.B}9.Ap65^+Q~D!0sXoTisK{$n!|;GUd!tDp `&}GdAJ+@+9-9|X# -b:rFAq');
define('AUTH_SALT',        '4Wm>n}(0,k]erPH{1cHAY{,-s(cm4*~%]8h(jj(q*)9hp;TTy>lMAF;}kZn?B&yk');
define('SECURE_AUTH_SALT', 'mia0:ipbON}+-& ULq*qsK(&nS[=($O&oCPYB<L2o|yI1.|YdVj1Q_e_u2u<e&Tg');
define('LOGGED_IN_SALT',   '+{T%1d41@ ~eTy+@3o64sMl7 (UA`n2#3>ikwM;l)1qQOE{S2R/{3:ah ?F&{uk)');
define('NONCE_SALT',       '^>Rtu5|c2L<56N&-<!sQSuC`xv{0yS|,SJW3BI+=*Nu{3|m{ZkX=c*|lH`L&Dxz*');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ajmdwp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
