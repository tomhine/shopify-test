const mix = require('laravel-mix');
const tailwind = require('mix-tailwindcss');

mix.js('src/js/main.js', 'theme/assets');
mix.sass('src/scss/main.scss', 'theme/assets').tailwind('tailwind.config.js');