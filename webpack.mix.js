let mix = require("laravel-mix");

mix
  .sass("src/sass/style.scss", "src/css")
  .sass("src/sass/wave/circle-wave.scss", "src/css")
  .sass("src/sass/progress/circle-progress.scss", "src/css");
