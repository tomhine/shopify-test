const mix = require('laravel-mix');
const tailwind = require('mix-tailwindcss');

mix.js('src/js/main.js', 'assets');
mix.sass('src/scss/main.scss', 'assets').tailwind('tailwind.config.js');