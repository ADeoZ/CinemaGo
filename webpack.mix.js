const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/index.js', 'public/js')
    .react()
    .css('resources/css/normalize.css', 'public/css')
    .sass('resources/sass/styles.scss', 'public/css')
    .css('resources/css/admin/normalize.css', 'public/css/admin')
    .sass('resources/sass/admin/styles.scss', 'public/css/admin')
    .copy('resources/js/components/Client/images/poster*.jpg', 'public/images');
