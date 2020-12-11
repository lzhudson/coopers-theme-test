import { src, dest, watch, parallel, series } from 'gulp';
import del from 'del';
import imagemin from 'gulp-imagemin';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import webpack from 'webpack-stream';
import named from 'vinyl-named';
import browserSync from 'browser-sync';
import zip from 'gulp-zip';
import info from './package.json';
import replace from 'gulp-replace';
import wpPot from 'gulp-wp-pot';
const PRODUCTION = yargs.argv.prod;

const server = browserSync.create();
export const serve = done => {
  server.init({
    proxy: 'http://cooperstheme.local'
  });
  done();
}

export const reload = done => {
  server.reload();
  done();
}


export const styles = () => {
  return src('src/scss/main.scss')
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([ autoprefixer ])))
    .pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie8'})))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest('dist/css'))
    .pipe(server.stream());
}

export const images = () => {
  return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(dest('dist/images'));
}

export const watchForChanges = () => {
  watch('src/scss/**/*.scss', styles);
  watch('src/images/**/*.{jpg,jpeg,png,svg,gif}', (images, reload));
  watch(['src/**/*','!src/{images,js,scss}','!src/{images,js,scss}/**/*'], (copy, reload));
  watch('src/js/**/.js', (scripts, reload));
  watch('**/*.php', reload);
}

export const copy = () => {
  return src(['src/**/*','!src/{images,js,scss}','!src/{images,js,scss}/**/*'])
    .pipe(dest('dist'));
}

export const scripts = () => {
  return src(['src/js/bundle.js','src/js/admin.js'])
  .pipe(named())
  .pipe(webpack({
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    mode: PRODUCTION ? 'production' : 'development',
    devtool: !PRODUCTION ? 'inline-source-map' : false,
    output: {
      filename: '[name].js'
    },
    externals: {
      jquery: 'jQuery'
    }
  }))
  .pipe(dest('dist/js'));
}

export const compress = () => {
  return src([
    "**/*",
    "!node_modules{,/**}",
    "!bundled{,/**}",
    "!src{,/**}",
    "!.babelrc",
    "!.gitignore",
    "!gulpfile.babel.js",
    "!package.json",
    "!package-lock.json",
  ])
  .pipe(gulpif(file => file.relative.split('.').pop() !== 'zip', replace('_themename', info.name)))
  .pipe(zip(`${info.name}.zip`))
  .pipe(dest('bunlded'));
}

export const pot = () => {
  return src('**/*.php')
  .pipe(
      wpPot({
        domain: '_themename',
        package: info.name
      })
    )
  .pipe(dest(`languages/${info.name}.pot`));
};


export const clean = () => {
  return del(['dist']);
}

export const dev = series(clean, parallel(styles, images, copy, scripts), serve, watchForChanges);
export const build = series(clean, parallel(styles, images, copy, scripts), pot, compress);

export default dev;
