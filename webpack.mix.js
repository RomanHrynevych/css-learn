let mix = require("laravel-mix");

mix
  .sass("src/sass/style.scss", "src/css")
  .sass("src/sass/circle-main.scss", "src/css");
